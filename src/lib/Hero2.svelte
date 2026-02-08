<section>
	<div class="hero-container">
		<p>
			Der Podcast. Zufällig. Relevant. Ohne Themenlimits.
		</p>
		<div class="hero-image">
			<img src="/Laberfactory.png" alt="Laberfactory" />
		</div>
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
</section>

<style>
	section {
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 8rem 2rem 2rem;
	}

	.hero-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: 20rem;
		max-width: 700px;
	}

	.hero-image {
		width: 600px;
	}

	.hero-image img {
		width: 100%;
		height: auto;
		display: block;
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

	@media (min-width: 768px) {
		p {
			font-size: 1.1rem;
		}
	}

	@media (max-width: 640px) {
		.hero-container {
			gap: 1.5rem;
		}

		.hero-image {
			width: 150px;
		}

		p {
			font-size: 0.9rem;
		}
	}
</style>
