<section class="text-section dark">
	<div class="section-content">
		<div class="text-block">
			<p>
				Der Podcast über Politik, Sport, Musik, Technologie, KI, Freundschaft, Umwelt und vieles mehr.
			</p>
			<p>
				Angefangen hat Ende 2025 alles als reines Spaß-Projekt, um öfter mal wieder mit Freunden, 
				Familie und Bekannten zu quatschen. Mittlerweile mache ich (Faris) auch regelmässig 
				Podcasts in denen wir spezifisch in ein ganz bestimmtes Thema eintauchen, mit Gästen, 
				die sich auskennen. Schaut einfach öfter mal vorbei, neue Folgen werden regelmäßig veröffentlicht.
			</p>
		</div>
	</div>
</section>

<style>
	.text-section {
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 2rem;
	}

	.text-section.dark {
		background: #111011;
	}

	.section-content {
		display: flex;
		align-items: center;
		justify-content: center;
		max-width: 700px;
	}

	.text-block {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	p {
		font-size: 1rem;
		font-weight: 400;
		color: #050510;
		opacity: 0.8;
		line-height: 1.6;
		margin: 0;
		text-align: justify;
	}

	.text-section.dark p {
		color: #f0ecec;
	}

	@media (min-width: 768px) {
		p {
			font-size: 1.1rem;
		}
	}

	@media (max-width: 640px) {
		.text-block {
			gap: 1rem;
		}

		p {
			font-size: 0.9rem;
		}
	}
</style>