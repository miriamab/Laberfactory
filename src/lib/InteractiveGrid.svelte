<script>
	import { onMount } from 'svelte';

	let mouseX = $state(0);
	let mouseY = $state(0);
	let mouseClientX = $state(0);
	let mouseClientY = $state(0);
	let scrollY = $state(0);
	let canvas;
	let ctx;
	const gridSize = 50;
	const distortionRadius = 550;

	function handleMouseMove(event) {
		mouseClientX = event.clientX;
		mouseClientY = event.clientY;
		mouseX = event.clientX;
		mouseY = event.clientY + scrollY;
	}

	function handleScroll() {
		scrollY = window.scrollY;
		mouseY = mouseClientY + scrollY;
	}

	function distortPoint(x, y) {
		const dx = x - mouseX;
		const dy = y - mouseY;
		const distance = Math.sqrt(dx * dx + dy * dy);

		if (distance > distortionRadius) {
			return { x, y };
		}

		const influence = 1 - distance / distortionRadius;
		const force = influence * influence * 30;

		const angle = Math.atan2(dy, dx);
		const newX = x + Math.cos(angle) * force;
		const newY = y + Math.sin(angle) * force;

		return { x: newX, y: newY };
	}



	function drawSegmentedGridLine(fromX, fromY, toX, toY) {
		const segments = 50;
		const points = [];

		// Punkte berechnen und verzerren
		for (let i = 0; i <= segments; i++) {
			const t = i / segments;
			let x = fromX + (toX - fromX) * t;
			let y = fromY + (toY - fromY) * t;

			// Nur im Einflussbereich des Cursors verzerren
			const dx = x - mouseX;
			const dy = y - mouseY;
			const distance = Math.sqrt(dx * dx + dy * dy);

			if (distance < distortionRadius) {
				const influence = 1 - distance / distortionRadius;
				const force = influence * influence * 40;
				const angle = Math.atan2(dy, dx);
				x += Math.cos(angle) * force;
				y += Math.sin(angle) * force;
			}

			points.push({ x, y });
		}

		// Mit Bézierkurven zeichnen für smoothe Kurven
		ctx.beginPath();
		ctx.moveTo(points[0].x, points[0].y);

		for (let i = 1; i < points.length - 1; i++) {
			const currentPoint = points[i];
			const nextPoint = points[i + 1];

			// Kontrollpunkt ist der aktuelle Punkt, Endpunkt ist der Durchschnitt des aktuellen und nächsten Punktes
			const controlX = currentPoint.x;
			const controlY = currentPoint.y;
			const endX = (currentPoint.x + nextPoint.x) / 2;
			const endY = (currentPoint.y + nextPoint.y) / 2;

			ctx.quadraticCurveTo(controlX, controlY, endX, endY);
		}

		// Letzte Kurve zum Endpunkt
		ctx.quadraticCurveTo(points[points.length - 2].x, points[points.length - 2].y, points[points.length - 1].x, points[points.length - 1].y);
		ctx.stroke();
	}


	function drawGrid() {
		if (!ctx) return;

		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.strokeStyle = 'rgba(255, 139, 76, 0.15)';
		ctx.lineWidth = 0.5;

		// Vertikale Linien über die gesamte Höhe
		for (let x = -gridSize; x < canvas.width + gridSize; x += gridSize) {
			drawSegmentedGridLine(x, 0, x, canvas.height);
		}

		// Horizontale Linien über die gesamte Höhe
		for (let y = -gridSize; y < canvas.height + gridSize; y += gridSize) {
			drawSegmentedGridLine(0, y, canvas.width, y);
		}
	}

	function animate() {
		drawGrid();
		requestAnimationFrame(animate);
	}

	onMount(() => {
		if (canvas) {
			const updateCanvasSize = () => {
				const docHeight = document.documentElement.scrollHeight;
				canvas.width = window.innerWidth;
				canvas.height = docHeight;
			};

			// Initial size
			updateCanvasSize();
			ctx = canvas.getContext('2d');

			animate();

			// Update canvas size on window resize
			window.addEventListener('resize', updateCanvasSize);

			// Watch for content changes with ResizeObserver
			const resizeObserver = new ResizeObserver(() => {
				updateCanvasSize();
			});
			resizeObserver.observe(document.documentElement);

			// Also listen to scroll
			window.addEventListener('scroll', handleScroll);

			return () => {
				window.removeEventListener('resize', updateCanvasSize);
				window.removeEventListener('scroll', handleScroll);
				resizeObserver.disconnect();
			};
		}
	});
</script>

<svelte:window on:mousemove={handleMouseMove} />

<div class="grid-overlay">
	<canvas bind:this={canvas} class="grid-canvas"></canvas>

	<!-- Radial glow effect around cursor -->
	<div
		class="grid-glow"
		style="background: radial-gradient(circle 300px at {mouseClientX}px {mouseClientY}px, rgba(255, 139, 76, 0.15) 0%, transparent 70%);"
	></div>

	<!-- Cursor dot -->
	<div class="cursor-dot" style="left: {mouseClientX}px; top: {mouseClientY}px;"></div>
</div>

<style>
	.grid-overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
		z-index: 1;
	}

	.grid-canvas {
		position: absolute;
		top: 0;
		left: 0;
	}

	.grid-glow {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
		transition: background 0.1s ease;
	}

	.cursor-dot {
		position: fixed;
		width: 25px;
		height: 25px;
		background-color: #ff8b4c;
		border-radius: 50%;
		transform: translate(-50%, -50%);
		pointer-events: none;
		box-shadow: 0 0 15px rgba(255, 139, 76, 0.6);
		z-index: 9999;
	}
</style>
