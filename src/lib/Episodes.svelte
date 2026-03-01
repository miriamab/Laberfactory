<script>
	import PodcastEpisodes from './PodcastEpisodes.svelte';
</script>

<div class="episodes-section">
	<h2>Episodenliste</h2>
	<PodcastEpisodes />
</div>

<style>
	.episodes-section {
		width: 100%;
	}

	h2 {
		font-size: 1.5rem;
		font-weight: 500;
		color: #050510;
		margin-bottom: 2rem;
		text-align: center;
	}
</style>