<script>
	let episodes = [
		{
			id: 1,
			title: "Die Zukunft der Technologie",
			description: "In dieser Folge sprechen wir über die neuesten Entwicklungen in der Tech-Welt.",
			duration: "45:32",
			releaseDate: "2026-02-01"
		},
		{
			id: 2,
			title: "Nachhaltigkeit im digitalen Zeitalter",
			description: "Wie können wir Technologie nachhaltiger gestalten?",
			duration: "38:15",
			releaseDate: "2026-01-25"
		},
		{
			id: 3,
			title: "KI und Kreativität",
			description: "Ersetzt künstliche Intelligenz menschliche Kreativität?",
			duration: "52:08",
			releaseDate: "2026-01-18"
		},
		{
			id: 4,
			title: "Remote Work Revolution",
			description: "Die Arbeitswelt hat sich verändert. Vor- und Nachteile.",
			duration: "41:27",
			releaseDate: "2026-01-11"
		}
	];

	function formatDate(dateString) {
		const date = new Date(dateString);
		return date.toLocaleDateString('de-DE', { day: 'numeric', month: 'short' });
	}
</script>

<div class="episodes-grid">
	{#each episodes as episode, i}
		<article class="episode" style="animation-delay: {i * 0.1}s;">
			<div class="episode-number">
				<span>#{episode.id}</span>
			</div>
			<div class="episode-info">
				<div class="episode-meta">
					<span>{formatDate(episode.releaseDate)}</span>
					<span class="dot">·</span>
					<span>{episode.duration}</span>
				</div>
				<h3>{episode.title}</h3>
				<p>{episode.description}</p>
			</div>
			<button class="play-btn" aria-label="Abspielen">
				<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
					<path d="M8 5v14l11-7z"/>
				</svg>
			</button>
		</article>
	{/each}
</div>

<style>
	.episodes-grid {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		max-width: 900px;
	}

	.episode {
		display: grid;
		grid-template-columns: auto 1fr auto;
		align-items: center;
		gap: 1.5rem;
		padding: 1.5rem 2rem;
		background: rgba(5, 5, 16, 0.03);
		border-radius: 16px;
		border: 1px solid rgba(5, 5, 16, 0.1);
		transition: all 0.3s ease;
		animation: fade-in 0.6s ease-out forwards;
		opacity: 0;
	}

	.episode:hover {
		border-color: #050510;
		box-shadow: 0 8px 32px rgba(5, 5, 16, 0.15);
		transform: translateY(-2px);
	}

	.episode-number {
		width: 60px;
		height: 60px;
		background: #050510;
		border-radius: 12px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 700;
		font-size: 1rem;
		color: #f0ecec;
	}

	.episode-info {
		min-width: 0;
	}

	.episode-meta {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.8rem;
		color: #050510;
		opacity: 0.6;
		margin-bottom: 0.5rem;
	}

	.dot {
		opacity: 0.4;
	}

	h3 {
		font-size: 1.1rem;
		font-weight: 600;
		color: #050510;
		margin: 0 0 0.25rem;
		line-height: 1.3;
	}

	p {
		font-size: 0.9rem;
		color: #050510;
		opacity: 0.7;
		margin: 0;
		line-height: 1.5;
	}

	.play-btn {
		width: 48px;
		height: 48px;
		border-radius: 50%;
		border: none;
		background: #050510;
		color: #f0ecec;
		cursor: pointer;
		transition: all 0.3s ease;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.play-btn:hover {
		background: rgba(5, 5, 16, 0.8);
		transform: scale(1.1);
	}

	@keyframes fade-in {
		from { opacity: 0; transform: translateY(10px); }
		to { opacity: 1; transform: translateY(0); }
	}

	@media (max-width: 640px) {
		.episode {
			grid-template-columns: auto 1fr;
			gap: 1rem;
			padding: 1rem 1.25rem;
		}

		.episode-number {
			width: 48px;
			height: 48px;
			font-size: 0.875rem;
		}

		.play-btn {
			grid-column: 1 / -1;
			width: 100%;
			border-radius: 12px;
			height: 44px;
		}

		h3 {
			font-size: 1rem;
		}

		p {
			font-size: 0.85rem;
		}
	}
</style>