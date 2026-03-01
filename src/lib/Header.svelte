<script>
	function scrollToTop() {
		// Immer zur ersten Sektion scrollen (da alles auf einer Seite ist)
		const section0 = document.getElementById('section-0');
		if (section0) {
			section0.scrollIntoView({ behavior: 'smooth' });
		}
	}
</script>

<header>
	<div class="header-content">
		<button class="title-button" on:click={scrollToTop}>Laberfactory</button>
		<div class="social-links">
			<a href="https://youtube.com/playlist?list=PLWPtrHZlfcFhVg55CDHb5uQZIzCf8LHHq&si=6AQbbRoHOGpP6ZxG" target="_blank" aria-label="YouTube" title="YouTube">
				<img src="/icons8-youtube.svg" alt="YouTube" />
			</a>
			<a href="https://open.spotify.com/show/7aBtsmon2ffPWEqEr8cB88" target="_blank" aria-label="Spotify" title="Spotify">
				<img src="/icons8-spotify.svg" alt="Spotify" />
			</a>
			<a href="https://podcasts.apple.com/us/podcast/laberfactory/id1856938434" target="_blank" aria-label="Apple Podcasts" title="Apple Podcasts">
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
		z-index: 1000;
		padding-right: 2rem;
		background: transparent;
		transition: background-color 0.3s ease;
	}

	header.dark-header {
		background: transparent;
	}

	.header-content {
		max-width: 1200px;
		margin: 0 auto;
		padding: 1.25rem 2rem;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		min-height: 20px;
	}

	.title-button {
		font-size: 1.2rem;
		font-weight: 400;
		color: #050510;
		margin: 0;
		padding: 0;
		border: none;
		background: none;
		position: fixed;
		left: 2rem;
		top: 1.25rem;
		z-index: 1001;
		opacity: 0;
		cursor: pointer;
		font-family: inherit;
		transition: opacity 0.3s ease, color 0.3s ease;
	}

	:global(header.show-title) .title-button {
		opacity: 1;
	}

	:global(header.dark-header) .title-button {
		color: #f0ecec;
	}

	.social-links {
		position: fixed;
		top: 1.25rem;
		right: 2rem;
		display: flex;
		gap: 1.5rem;
		align-items: center;
		opacity: 1;
		transition: opacity 0.3s ease;
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
		transition: filter 0.3s ease;
	}

	:global(header.dark-header) .social-links img {
		filter: brightness(0) invert(1);
	}

	@media (max-width: 768px) {
		.header-content {
			padding: 1rem 1.5rem;
			gap: 1rem;
		}

		.title-button {
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
		.title-button {
			font-size: 1.1rem;
		}
	}
</style>
