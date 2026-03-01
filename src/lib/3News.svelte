<div class="news-section">
	<h2>News</h2>
	<div class="news-content">
		<p>Aktuelle Berichterstattung über die Laberfactory.</p>
		
		<div class="articles-grid">
			<article class="article-card">
				<div class="article-header">
					<span class="article-source">Merkur.de</span>
					<span class="article-date">März 2026</span>
				</div>
				<h3 class="article-title">Faris Abbas interviewt die Bürgermeisterkandidaten in seinem Podcast</h3>
				<p class="article-description">Der Plieninger betreibt die „Laberfactory" im heimischen Keller. Nun organisiert er auch eine Podiumsdiskussion zur Bürgermeisterwahl.</p>
				<a href="https://www.merkur.de/lokales/ebersberg/pliening-ort377251/faris-abbas-interviewt-die-buergermeisterkandidaten-in-seinem-podcast-94157831.html?utm_source=_shared&utm_medium=west&utm_campaign=interactionbar" target="_blank" rel="noopener noreferrer" class="article-link">
					Artikel lesen →
				</a>
			</article>

			<article class="article-card">
				<div class="article-header">
					<span class="article-source">Merkur.de</span>
					<span class="article-date">März 2026</span>
				</div>
				<h3 class="article-title">Rund 150 Bürger kommen zur Diskussion der Bürgermeisterkandidaten</h3>
				<p class="article-description">Die drei Bürgermeisterkandidaten in Pliening diskutierten vor vollem Haus. Grundschulsanierung und Verkehr standen im Mittelpunkt der Debatte.</p>
				<a href="https://www.merkur.de/lokales/ebersberg/pliening-ort377251/rund-150-buerger-kommen-zur-diskussion-der-buergermeisterkandidaten-94191709.html?utm_source=_shared&utm_medium=west&utm_campaign=interactionbar" target="_blank" rel="noopener noreferrer" class="article-link">
					Artikel lesen →
				</a>
			</article>
		</div>
	</div>
</div>

<style>
	.news-section {
		width: 100%;
		max-width: 1000px;
		margin: 0 auto;
		text-align: center;
	}

	h2 {
		font-size: 1.5rem;
		font-weight: 500;
		color: #050510;
		margin-bottom: 2rem;
		text-align: center;
	}

	.news-content {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.articles-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
		margin: 1.5rem 0;
	}

	.article-card {
		background: rgba(255, 255, 255, 0.7);
		border: 2px solid rgba(5, 5, 16, 0.1);
		border-radius: 12px;
		padding: 1.5rem;
		transition: all 0.3s ease;
		display: flex;
		flex-direction: column;
	}

	.article-card:hover {
		border-color: rgba(5, 5, 16, 0.3);
		transform: translateY(-2px);
		box-shadow: 0 8px 25px rgba(5, 5, 16, 0.1);
	}

	.article-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 1rem;
	}

	.article-source {
		font-size: 0.85rem;
		color: #050510;
		opacity: 0.6;
		font-weight: 500;
	}

	.article-date {
		font-size: 0.8rem;
		color: #050510;
		opacity: 0.5;
	}

	.article-title {
		font-size: 1.1rem;
		font-weight: 500;
		color: #050510;
		margin: 0 0 1rem 0;
		line-height: 1.4;
	}

	.article-description {
		font-size: 0.95rem;
		color: #050510;
		opacity: 0.8;
		line-height: 1.6;
		margin: 0 0 1.5rem 0;
		flex-grow: 1;
	}

	.article-link {
		color: #050510;
		text-decoration: none;
		font-weight: 500;
		font-size: 0.9rem;
		transition: opacity 0.3s ease;
		align-self: flex-start;
		padding: 0.5rem 0;
	}

	.article-link:hover {
		opacity: 0.6;
	}

	p {
		font-size: 1.05rem;
		color: #050510;
		opacity: 0.8;
		line-height: 1.8;
		margin: 0;
	}

	@media (max-width: 768px) {
		.articles-grid {
			grid-template-columns: 1fr;
			gap: 1.5rem;
		}

		.article-card {
			padding: 1.25rem;
		}

		.article-title {
			font-size: 1rem;
		}
	}

	@media (max-width: 640px) {
		.article-card {
			padding: 1rem;
		}

		.article-title {
			font-size: 0.95rem;
		}

		.article-description {
			font-size: 0.9rem;
		}
	}
</style>