<script>
	import { onMount } from 'svelte';

	let visible = true;
	let animating = false;

	onMount(() => {
		// Kurze Pause bevor die Animation startet
		setTimeout(() => {
			animating = true;
		}, 1200);

		// Nach der Animation komplett ausblenden
		setTimeout(() => {
			visible = false;
		}, 2000);
	});
</script>

{#if visible}
	<div class="intro-overlay" class:animating>
	</div>
{/if}

<style>
	.intro-overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: #111011;
		z-index: 9999;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: transform 0.8s cubic-bezier(0.77, 0, 0.175, 1);
	}

	.intro-overlay.animating {
		transform: translateY(-100%);
	}

	h1 {
		font-size: 1.5rem;
		font-weight: 500;
		color: #f0ecec;
		margin: 0;
		transition: transform 0.8s cubic-bezier(0.77, 0, 0.175, 1);
	}

	.intro-overlay.animating h1 {
		transform: translateY(-50vh);
	}

	@media (max-width: 768px) {
		h1 {
			font-size: 1.25rem;
		}
	}

	@media (max-width: 640px) {
		h1 {
			font-size: 1.1rem;
		}
	}
</style>
