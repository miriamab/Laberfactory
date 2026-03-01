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
		height: 100%;
		display: flex;
		flex-direction: column;
		min-height: 0; /* Erlaubt Flexbox-Shrinking */
	}

	h2 {
		font-size: 1.5rem;
		font-weight: 500;
		color: #050510;
		margin-bottom: 2rem;
		text-align: center;
	}
</style>