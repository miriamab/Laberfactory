<script>
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>Laberfactory</title>
	<meta name="description" content="Spannende Gespräche über Technologie, Innovation und die digitale Zukunft" />
</svelte:head>

<main>
	{@render children()}
</main>

<style>
	main {
		position: relative;
		width: 100%;
		z-index: 10;
	}
</style>
