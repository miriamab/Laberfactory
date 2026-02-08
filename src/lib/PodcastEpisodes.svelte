<script>
	let episodes = [
		{
			id: 1,
			title: "Die Zukunft der Technologie",
			description: "In dieser Folge sprechen wir über die neuesten Entwicklungen in der Tech-Welt.",
			fullDescription: "In dieser Folge sprechen wir über die neuesten Entwicklungen in der Tech-Welt. Wir diskutieren künstliche Intelligenz, Quantencomputer und die Auswirkungen auf unsere Gesellschaft. Unsere Gäste sind führende Experten aus der Technologiebranche, die ihre Perspektiven und Vorhersagen teilen.",
			duration: "45:32",
			releaseDate: "2026-02-01"
		},
		{
			id: 2,
			title: "Nachhaltigkeit im digitalen Zeitalter",
			description: "Wie können wir Technologie nachhaltiger gestalten?",
			fullDescription: "Wie können wir Technologie nachhaltiger gestalten? In dieser Episode untersuchen wir den ökologischen Fußabdruck von Rechenzentren, Elektronikschrott und die Bemühungen großer Tech-Unternehmen, grüner zu werden. Wir sprechen mit Umweltaktivisten und Technologieinnovatoren über praktische Lösungen.",
			duration: "38:15",
			releaseDate: "2026-01-25"
		},
		{
			id: 3,
			title: "KI und Kreativität",
			description: "Ersetzt künstliche Intelligenz menschliche Kreativität?",
			fullDescription: "Ersetzt künstliche Intelligenz menschliche Kreativität? Diese Frage steht im Mittelpunkt unserer heutigen Diskussion. Wir sprechen mit Künstlern, Musikern und Schriftstellern darüber, wie KI ihre Arbeit beeinflusst und ob Zusammenarbeit zwischen Mensch und Maschine möglich ist.",
			duration: "52:08",
			releaseDate: "2026-01-18"
		},
		{
			id: 4,
			title: "Remote Work Revolution",
			description: "Die Arbeitswelt hat sich verändert. Vor- und Nachteile.",
			fullDescription: "Die Arbeitswelt hat sich verändert. Vor- und Nachteile. Wir analysieren die Auswirkungen von Remote Work auf Produktivität, Mitarbeiterwohlbefinden und die Zukunft des Büros. Mit Beiträgen von HR-Experten und Arbeitnehmern aus verschiedenen Branchen.",
			duration: "41:27",
			releaseDate: "2026-01-11"
		}
	];

	let expandedEpisode = null;

	function formatDate(dateString) {
		const date = new Date(dateString);
		return date.toLocaleDateString('de-DE', { day: 'numeric', month: 'short' });
	}

	function toggleExpand(episodeId) {
		expandedEpisode = expandedEpisode === episodeId ? null : episodeId;
	}
</script>

<div class="episodes-grid">
	{#each episodes as episode, i}
		<article 
			class="episode" 
			class:expanded={expandedEpisode === episode.id}
			on:click={() => toggleExpand(episode.id)}
			style="animation-delay: {i * 0.1}s;"
		>
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
				<p>{expandedEpisode === episode.id ? episode.fullDescription : episode.description}</p>
			</div>
			<div class="episode-links">
				<a href="#" aria-label="YouTube" title="YouTube">
					<img src="/icons8-youtube.svg" alt="YouTube" />
				</a>
				<a href="#" aria-label="Spotify" title="Spotify">
					<img src="/icons8-spotify.svg" alt="Spotify" />
				</a>
				<a href="#" aria-label="Apple Podcasts" title="Apple Podcasts">
					<img src="/icons8-apple-podcasts-96.png" alt="Apple Podcasts" />
				</a>
			</div>
		</article>
	{/each}
</div>

<style>
	.episodes-grid {
		display: flex;
		flex-direction: column;
		gap: 0;
		max-width: 1100px;
		width: 100%;
		margin: 0 auto;
	}

	.episode {
		display: grid;
		grid-template-columns: auto 1fr auto;
		align-items: center;
		gap: 1.5rem;
		padding: 1.5rem 2rem;
		background: transparent;
		border-radius: 0;
		border: none;
		border-top: 2px solid rgba(5, 5, 16, 0.15);
		transition: all 0.3s ease;
		animation: fade-in 0.6s ease-out forwards;
		opacity: 0;
		cursor: pointer;
	}

	.episode.expanded {
		background: rgba(5, 5, 16, 0.05);
		border-top: 2px solid #050510;
	}

	.episode:hover {
		border-top-color: #050510;
		background: rgba(5, 5, 16, 0.05);
		transform: translateY(0);
	}

	.episode.expanded:hover {
		background: rgba(5, 5, 16, 0.08);
	}

	.episode-number {
		width: 60px;
		height: 60px;
		background: #050510;
		border-radius: 12px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 500;
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
		font-weight: 500;
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
		transition: all 0.4s ease;
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

	.episode-links {
		display: flex;
		gap: 1.2rem;
		align-items: center;
		justify-content: flex-end;
		min-width: 100px;
	}

	.episode-links a {
		color: #050510;
		text-decoration: none;
		transition: opacity 0.2s ease;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.episode-links a:hover {
		opacity: 0.6;
	}

	.episode-links img {
		width: 24px;
		height: 24px;
		object-fit: contain;
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