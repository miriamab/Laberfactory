<header>
	<div class="header-content">
		<h1>Laberfactory</h1>
		<div class="social-links">
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
	</div>
</header>

<style>
	header {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		background: #f0ecec;
		z-index: 1000;
		padding-right: 2rem;
	}

	.header-content {
		max-width: 1200px;
		margin: 0 auto;
		padding: 1.25rem 2rem;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		min-height: 60px;
	}

	h1 {
		font-size: 1.5rem;
		font-weight: 500;
		color: #050510;
		margin: 0;
		position: fixed;
		left: 50%;
		top: 1.25rem;
		transform: translateX(-50%);
		z-index: 1001;
	}

	.social-links {
		position: fixed;
		top: 1.25rem;
		right: 2rem;
		display: flex;
		gap: 1.5rem;
		align-items: center;
	}

	.social-links a {
		color: #050510;
		text-decoration: none;
		transition: opacity 0.2s ease;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.social-links a:hover {
		opacity: 0.6;
	}

	.social-links img {
		width: 24px;
		height: 24px;
		object-fit: contain;
	}

	@media (max-width: 768px) {
		.header-content {
			padding: 1rem 1.5rem;
			gap: 1rem;
		}

		h1 {
			font-size: 1.25rem;
		}

		.social-links {
			gap: 1rem;
		}

		.social-links svg {
			width: 20px;
			height: 20px;
		}
	}

	@media (max-width: 640px) {
		h1 {
			font-size: 1.1rem;
		}
	}
</style>
