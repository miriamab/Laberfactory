<script>
	import Hero from '$lib/Hero.svelte';
	import FloatingParticles from '$lib/FloatingParticles.svelte';
	import YearCalendar from '$lib/visualizations/YearCalendar.svelte';
	import DistanceChart from '$lib/visualizations/DistanceChart.svelte';
	import WeekCalendar from '$lib/visualizations/WeekCalendar.svelte';
	import PaceMap from '$lib/visualizations/PaceMap.svelte';
	import ActivityBubbles from '$lib/visualizations/ActivityBubbles.svelte';

	import Footer from '$lib/Footer.svelte';
</script>

<FloatingParticles />
<section id="hero" class="section">
	<Hero />
</section>

<div class="content-wrapper">
	<FloatingParticles position="content" count={12} />
	
	<!-- Phase 1: Duration -->
	<section id="phase-1" class="section">
	<div class="phase-header">
		<h2>DURATION</h2>
		<p>Each orange dot represents a single day of tracked athletic activity. This multi-year grid maps my consistency over 70 months, allowing you to hover over each year to reveal a personal note of that period's training patterns.</p>
	</div>
	<YearCalendar />
</section>

<!-- Phase 2: Distance -->
<section id="phase-2" class="section">
	<div class="phase-header">
		<h2>DISTANCE</h2>
		<p>Focusing exclusively on running data, each dot represents a distance unit stacked vertically. This visualization clearly exposes the massive volume peaks during the lockdown years.</p>
	</div>
	<DistanceChart />
</section>

<!-- Phase 3: Endurance -->
<section id="phase-3" class="section">
	<div class="phase-header">
		<h2>ENDURANCE</h2>
		<p>A weekly calendar where each entry offers a closer look at my personal schedule. By selecting between peak, standard, and recovery weeks, you can inspect how I structured my discipline and time investment during different phases.</p>
	</div>
	<WeekCalendar />
</section>

<!-- Phase 4: Pace -->
<section id="phase-4" class="section">
	<div class="phase-header">
		<h2>PACE</h2>
		<p>A closer look into a single session where geographic GPS data and biometric performance converge. This dashboard showes my path, pace, and heart rate to point out the effort of an individual run.
		</p>
	</div>
	<PaceMap />
</section>

<!-- Phase 5: Force -->
<section id="phase-5" class="section">
	<div class="phase-header">
		<h2>FORCE</h2>
		<p>Each bubble represents the total hours invested in a specific activity. The varying sizes visualize the distribution of effort across all disciplines, revealing cardio & strength training dominated my 70-month journey.</p>
	</div>
	<ActivityBubbles />
</section>
</div>

<Footer />

<style>
	.content-wrapper {
		position: relative;
	}

	.section {
		min-height: 10vh;
		padding-top: 10rem;
		display: flex;
		flex-direction: column;
	}

	.phase-header h2 {
		font-size: 3rem;
		font-weight: 700;
		letter-spacing: -1px;
		margin-bottom: 0.5rem;
		color: #ff8b4c;
	}

	.phase-header p {
		font-size: 1rem;
		color: #ff8b4c;
		opacity: 0.7;
		letter-spacing: 0.025em;
		width: 36rem;
	}

	@media (min-width: 768px) {
		.phase-header {
			padding: 0 3rem 1.5rem;
		}

		.phase-header h2 {
			font-size: 4rem;
		}
	}
</style>
