<script>
	import Header from '$lib/Header.svelte';
	import Hero from '$lib/Hero.svelte';
	import PodcastEpisodes from '$lib/PodcastEpisodes.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<Header />

<Hero />

<section class="episodes">
	<h2>Episoden</h2>
	<PodcastEpisodes />
</section>

<Footer />

<style>
	.episodes {
		padding: 8rem 2rem;
		max-width: 1200px;
		margin: 0 auto;
	}

	h2 {
		font-size: 2rem;
		font-weight: 600;
		color: #050510;
		margin-bottom: 3rem;
		position: relative;
		display: inline-block;
	}

	h2::after {
		content: '';
		position: absolute;
		bottom: -8px;
		left: 0;
		width: 40px;
		height: 3px;
		background: #050510;
		border-radius: 2px;
	}

	@media (min-width: 768px) {
		.episodes {
			padding: 10rem 4rem;
		}

		h2 {
			font-size: 2.5rem;
		}
	}
</style>
