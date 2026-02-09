<section class="text-section dark">
	<div class="section-content">
		<p>
			Der Podcast. Zufällig. Relevant. Ohne Themenlimits.
		</p>
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
		p {
			font-size: 0.9rem;
		}
	}
</style>