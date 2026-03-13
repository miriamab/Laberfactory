<section class="image-section">
	<div class="section-content">
		<div class="hero-image">
			<img src="/Laberfactory.png" alt="Laberfactory" />
		</div>
	</div>
</section>

<style>
	.image-section {
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 2rem;
	}

	.section-content {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
	}

	.hero-image {
		width: 450px;
		max-width: 100%;
	}

	.hero-image img {
		width: 100%;
		height: auto;
		display: block;
		max-height: calc(100vh - 10rem); /* Platz für Pfeil + Padding */
		object-fit: contain;
	}

	@media (max-width: 640px) {
		.image-section {
			padding: 1rem; /* Geringeres Basis-Padding auf Mobile für mehr Platz */
		}

		.hero-image {
			width: 100%; /* Fast die gesamte Breite einnehmen statt festen winzigen 150px */
			max-width: 380px; /* Begrenzung nach oben, damit es auf extrem breiten Handys nicht riesig wird */
		}
	}

	/* Anpassungen für sehr große Bildschirme (Ultrawide / große Desktop-Monitore) */
	@media (min-width: 2000px) {
		.hero-image {
			width: 800px;
		}
	}

	@media (min-width: 2200px) {
		.hero-image {
			width: 1000px;
		}
	}
</style>