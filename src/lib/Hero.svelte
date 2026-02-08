<section>
	<div class="hero-container">
		<p class="animate-fade-in" style="animation-delay: 0.2s;">
			Der Podcast. Zufällig. Relevant. Ohne Themenlimits.
		</p>
		<div class="hero-image">
			<img src="/Laberfactory.png" alt="Laberfactory" />
		</div>
		<p class="animate-fade-in" style="animation-delay: 0.2s;">
			Der Podcast über Politik, Sport, Musik, Technologie, KI, Freundschaft, Umwelt und vieles mehr.
		</p>
		<p class="animate-fade-in" style="animation-delay: 0.2s;">
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
		padding: 6rem 2rem 2rem;
	}

	.hero-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: 2rem;
		max-width: 500px;
	}

	.hero-image {
		width: 400px;
	}

	.hero-image img {
		width: 200%;
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
		filter: drop-shadow(0 0 70px rgba(171, 242, 240, 0.7));
	}

	@media (min-width: 768px) {
		.hero-image {
			width: 280px;
		}

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
