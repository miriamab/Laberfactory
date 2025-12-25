<script>
	import { onMount } from 'svelte';

	let weeks = $state({ peak: null, low: null, average: null });
	let selectedWeek = $state('peak');
	let currentWeek = $state(null);
	let loading = $state(true);

	const dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
	const sportColors = {
		Laufen: '#ff8b4c',
		Cardio: '#ffb380',
		'Indoor Cycling': '#ff9d66',
		'Outdoor Cycling': '#ff9d66',
		Fahrrad: '#ff9d66'
	};

	function timeToMinutes(timeStr) {
		if (!timeStr) return 0;
		const parts = timeStr.split(':');
		const hours = parseInt(parts[0]) || 0;
		const minutes = parseInt(parts[1]) || 0;
		const seconds = parseInt(parts[2]) || 0;
		return hours * 60 + minutes + seconds / 60;
	}

	function minutesToHours(minutes) {
		const hours = Math.floor(minutes / 60);
		const mins = Math.round(minutes % 60);
		return `${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}`;
	}

	async function loadAllData() {
		try {
			const [laufenRes, cardioRes, fahrradRes] = await Promise.all([
				fetch('/Laufen_Daten.csv'),
				fetch('/Cardio_Daten.csv'),
				fetch('/Fahrrad_Daten.csv')
			]);

			const [laufenText, cardioText, fahrradText] = await Promise.all([
				laufenRes.text(),
				cardioRes.text(),
				fahrradRes.text()
			]);

			// Parse all activities by week
			const weeklyData = {};

			// Parse Laufen
			laufenText.split('\n').slice(1).forEach(line => {
				if (!line.trim()) return;
				const cols = parseCSVLine(line);
				const dateStr = cols[1];
				const timeStr = cols[6];
				if (!dateStr) return;

				const date = new Date(dateStr);
				const weekKey = getWeekKey(date);
				const dayKey = date.getDay() === 0 ? 6 : date.getDay() - 1; // Convert to Mon-Sun

				if (!weeklyData[weekKey]) weeklyData[weekKey] = {};
				if (!weeklyData[weekKey][dayKey]) weeklyData[weekKey][dayKey] = [];

				weeklyData[weekKey][dayKey].push({
					type: 'Laufen',
					duration: timeToMinutes(timeStr)
				});
			});

			// Parse Cardio
			cardioText.split('\n').slice(1).forEach(line => {
				if (!line.trim()) return;
				const cols = parseCSVLine(line);
				const dateStr = cols[1];
				const timeStr = cols[6];
				if (!dateStr) return;

				const date = new Date(dateStr);
				const weekKey = getWeekKey(date);
				const dayKey = date.getDay() === 0 ? 6 : date.getDay() - 1;

				if (!weeklyData[weekKey]) weeklyData[weekKey] = {};
				if (!weeklyData[weekKey][dayKey]) weeklyData[weekKey][dayKey] = [];

				weeklyData[weekKey][dayKey].push({
					type: 'Cardio',
					duration: timeToMinutes(timeStr)
				});
			});

			// Parse Fahrrad
			fahrradText.split('\n').slice(1).forEach(line => {
				if (!line.trim()) return;
				const cols = parseCSVLine(line);
				const dateStr = cols[1];
				const timeStr = cols[6];
				if (!dateStr) return;

				const date = new Date(dateStr);
				const weekKey = getWeekKey(date);
				const dayKey = date.getDay() === 0 ? 6 : date.getDay() - 1;

				if (!weeklyData[weekKey]) weeklyData[weekKey] = {};
				if (!weeklyData[weekKey][dayKey]) weeklyData[weekKey][dayKey] = [];

				const actType = cols[0];
				weeklyData[weekKey][dayKey].push({
					type: actType.includes('Laufband') ? 'Fahrrad' : 'Fahrrad',
					duration: timeToMinutes(timeStr)
				});
			});

			// Calculate week stats
			const weekStats = Object.entries(weeklyData).map(([key, days]) => {
				let totalMinutes = 0;
				let sessionCount = 0;

				Object.values(days).forEach(dayActivities => {
					dayActivities.forEach(activity => {
						totalMinutes += activity.duration;
						sessionCount++;
					});
				});

				return {
					key,
					totalMinutes,
					sessionCount,
					days: formatWeekData(days)
				};
			});

// Find peak (most hours), low (2 sessions from 2022), average (5 sessions from 2024)
		const peakWeek = weekStats.reduce((max, w) => (w.totalMinutes > max.totalMinutes ? w : max));
		
		// Low: 2 sessions from 2022
		const lowWeeks = weekStats.filter(w => {
			const year = new Date(w.key).getFullYear();
			return w.sessionCount === 2 && year === 2022;
		});
		const lowWeek = lowWeeks.length > 0 
			? lowWeeks[0]
			: weekStats.find(w => w.sessionCount === 2) || peakWeek;
		
		// Average: 5 sessions from 2024
		const avgWeeks = weekStats.filter(w => {
			const year = new Date(w.key).getFullYear();
			return w.sessionCount === 5 && year === 2024;
		});
		const averageWeek = avgWeeks.length > 0 
			? avgWeeks[0]
			: weekStats.find(w => w.sessionCount === 5) || peakWeek;

			weeks = {
				peak: peakWeek,
				low: lowWeek || peakWeek,
				average: averageWeek || peakWeek
			};

			currentWeek = weeks.peak;
			loading = false;

			console.log('Week data loaded:', weeks);
		} catch (error) {
			console.error('Error loading week data:', error);
			loading = false;
		}
	}

	function getWeekKey(date) {
		const d = new Date(date);
		d.setHours(0, 0, 0, 0);
		d.setDate(d.getDate() - (d.getDay() || 7) + 1); // Start of week (Monday)
		return d.toISOString().split('T')[0];
	}

	function formatWeekData(daysObj) {
		const formatted = Array(7)
			.fill(null)
			.map(() => []);
		Object.entries(daysObj).forEach(([dayKey, activities]) => {
			formatted[parseInt(dayKey)] = activities;
		});
		return formatted;
	}

	function parseCSVLine(line) {
		const result = [];
		let current = '';
		let insideQuotes = false;

		for (let i = 0; i < line.length; i++) {
			const char = line[i];

			if (char === '"') {
				insideQuotes = !insideQuotes;
			} else if (char === ',' && !insideQuotes) {
				result.push(current.trim());
				current = '';
			} else {
				current += char;
			}
		}
		result.push(current.trim());
		return result;
	}

	function getWeekDateRange(weekKey) {
		const start = new Date(weekKey + 'T00:00:00');
		const end = new Date(start);
		end.setDate(end.getDate() + 6);
		const formatDate = (d) => `${String(d.getDate()).padStart(2, '0')}.${String(d.getMonth() + 1).padStart(2, '0')}.${d.getFullYear()}`;
		return `${formatDate(start)} - ${formatDate(end)}`;
	}

	onMount(async () => {
		await loadAllData();
	});
</script>

<div class="week-calendar-container">
	{#if loading}
		<p>Loading week data...</p>
	{:else if currentWeek}
		<div class="controls">
			<label>
				Week Type:
				<select bind:value={selectedWeek} onchange={(e) => (currentWeek = weeks[e.target.value])}>
					<option value="peak">Peak (Most Hours)</option>
					<option value="average">Average</option>
					<option value="low">Low Intensity</option>
				</select>
			</label>
		</div>

		<div class="week-info">
			<h3>{selectedWeek.toUpperCase()}</h3>
			<p>{getWeekDateRange(currentWeek.key)}</p>
			<p>{currentWeek.sessionCount} sessions • {minutesToHours(currentWeek.totalMinutes)} hours</p>
		</div>

		<div class="week-grid">
			{#each dayNames as dayName, dayIndex}
				<div class="day-column">
					<div class="day-header">{dayName}</div>
					<div class="activities">
						{#each currentWeek.days[dayIndex] as activity}
							<div
								class="activity"
								style="background-color: {sportColors[activity.type] || '#ff8b4c'}"
							>
								<span class="sport">{activity.type}</span>
								<span class="duration">{minutesToHours(activity.duration)}h</span>
							</div>
						{:else}
							<div class="empty">-</div>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	{/if}
</div>

<style>
	.week-calendar-container {
		padding: 3rem 1.5rem;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.controls {
		margin-bottom: 2rem;
	}

	.controls label {
		display: flex;
		gap: 1rem;
		align-items: center;
		color: #ff8b4c;
		font-size: 1rem;
	}

	.controls select {
		padding: 0.5rem 1rem;
		background-color: #0f0f0f;
		color: #ff8b4c;
		border: 1px solid #ff8b4c;
		border-radius: 4px;
		cursor: pointer;
		font-family: inherit;
	}

	.week-info {
		text-align: center;
		margin-bottom: 2rem;
		color: #ff8b4c;
	}

	.week-info h3 {
		font-size: 1.5rem;
		margin-bottom: 0.5rem;
	}

	.week-info p {
		font-size: 0.9rem;
		opacity: 0.7;
	}

	.week-grid {
		display: grid;
		grid-template-columns: repeat(7, 1fr);
		gap: 1rem;
		max-width: 1000px;
	}

	.day-column {
		display: flex;
		flex-direction: column;
		min-width: 120px;
	}

	.day-header {
		padding: 0.75rem;
		text-align: center;
		color: #ff8b4c;
		font-weight: 600;
		font-size: 0.9rem;
		border-bottom: 2px solid rgba(255, 139, 76, 0.3);
		margin-bottom: 0.5rem;
	}

	.activities {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		min-height: 60px;
	}

	.activity {
		padding: 0.75rem;
		border-radius: 4px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.25rem;
		opacity: 0.85;
		transition: opacity 0.2s ease;
	}

	.activity:hover {
		opacity: 1;
	}

	.sport {
		font-size: 0.75rem;
		font-weight: 600;
		color: #0f0f0f;
	}

	.duration {
		font-size: 0.85rem;
		color: #0f0f0f;
		font-weight: 500;
	}

	.empty {
		color: rgba(255, 139, 76, 0.3);
		text-align: center;
		padding: 1rem 0;
	}

	@media (min-width: 768px) {
		.week-calendar-container {
			padding: 3rem 3rem;
		}

		.week-grid {
			gap: 1.5rem;
		}

		.day-column {
			min-width: 140px;
		}
	}
</style>
