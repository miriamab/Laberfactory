<script>
	import { onMount } from 'svelte';

	let { position = 'top', count = 40 } = $props();
	
	let particles = $state([]);
	let animationFrame;
	const cellSize = 14;

	onMount(() => {
		// Initialize particles based on position
		const isTop = position === 'top';
		const isContent = position === 'content';
		
		particles = Array.from({ length: count }, (_, i) => ({
			id: i,
			x: Math.random() * 90 + 5,
			y: isContent ? Math.random() * 100 : (isTop ? Math.random() * 60 + 70 : Math.random() * 60 + 20),
			floatOffset: Math.random() * Math.PI * 2,
			floatOffsetX: Math.random() * Math.PI * 2,
			floatSpeed: 0.3 + Math.random() * 0.4,
			floatSpeedX: 0.2 + Math.random() * 0.3,
			opacity: isContent ? 0.3 + Math.random() * 0.3 : 0.5 + Math.random() * 0.5
		}));

		// Animation loop for floating effect
		const animate = () => {
			particles = particles.map(p => ({ ...p })); // Trigger reactivity
			animationFrame = requestAnimationFrame(animate);
		};
		animate();

		return () => {
			cancelAnimationFrame(animationFrame);
		};
	});

	function getStyle(p) {
		const time = Date.now() / 1000;
		const isContent = position === 'content';
		
		// Content particles float much slower and with smaller amplitude
		const speedMultiplier = isContent ? 0.15 : 1;
		const amplitudeY = isContent ? 3 : 8;
		const amplitudeX = isContent ? 3 : 4;
		
		// Use independent offsets and speeds for more random floating
		const floatY = Math.sin(time * p.floatSpeed * speedMultiplier + p.floatOffset) * amplitudeY;
		const floatX = Math.cos(time * p.floatSpeedX * speedMultiplier + p.floatOffsetX) * amplitudeX;
		
		return `
			left: ${p.x + floatX}%;
			top: ${p.y + floatY}%;
			opacity: ${p.opacity};
		`;
	}
</script>

<div class="particles-container" class:is-footer={position === 'bottom'} class:is-content={position === 'content'}>
	{#each particles as particle (particle.id)}
		<div
			class="particle"
			style={getStyle(particle)}
		></div>
	{/each}
</div>

<style>
	.particles-container {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		pointer-events: none;
		overflow: visible;
		z-index: 1;
	}

	.particles-container.is-footer {
		position: absolute;
		height: 100%;
		top: 0;
	}

	.particles-container.is-content {
		position: absolute;
		height: 100%;
		top: 0;
		left: 0;
		z-index: 5;
	}

	.particle {
		position: absolute;
		width: 14px;
		height: 14px;
		background: #ff8b4c;
		border-radius: 50%;
		transform: translate(-50%, -50%);
		will-change: left, top, opacity;
	}
</style>