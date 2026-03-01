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
		width: 600px;
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
		.hero-image {
			width: 150px;
		}
	}
</style>