<script>
	import Header from '$lib/Header.svelte';
	import HeroIntro from '$lib/Hero1.svelte';
	import Hero from '$lib/Hero2.svelte';
	import PodcastEpisodes from '$lib/PodcastEpisodes.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<Header />

<HeroIntro />

<Hero />

<section class="episodes">
	<h2>Episodenliste</h2>
	<PodcastEpisodes />
</section>

<Footer />

<style>
	.episodes {
		padding: 8rem 2rem;
		max-width: 1200px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	h2 {
		font-size: 1.5rem;
		font-weight: 500;
		color: #050510;
		margin-bottom: 3rem;
		text-align: center;
	}

	@media (min-width: 768px) {
		.episodes {
			padding: 10rem 4rem;
		}

		h2 {
			font-size: 1.5rem;
		}
	}
</style>
