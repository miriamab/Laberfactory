<script>
	let { title, year, category, index } = $props();
	
	// Generate random dots pattern
	const dots = Array.from({ length: 36 }, () => ({
		opacity: Math.random() > 0.5 ? 1 : 0.3,
		scale: 0.5 + Math.random() * 0.5
	}));
</script>

<article class="project-card animate-fade-in" style="animation-delay: {index * 0.1}s;">
	<div class="image-placeholder">
		<div class="dot-grid">
			{#each dots as dot}
				<div class="dot" style="opacity: {dot.opacity}; transform: scale({dot.scale});"></div>
			{/each}
		</div>
	</div>
	<div class="info">
		<span class="meta">{year} / {category}</span>
		<h3>{title}</h3>
	</div>
</article>

<style>
	.project-card {
		border: 1px solid rgba(255, 139, 76, 0.2);
		padding: 1rem;
		cursor: pointer;
		transition: var(--transition-smooth);
	}

	.project-card:hover {
		border-color: var(--foreground);
		box-shadow: var(--glow-orange);
	}

	.image-placeholder {
		aspect-ratio: 1;
		margin-bottom: 1rem;
		border: 1px solid rgba(255, 139, 76, 0.1);
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
	}

	.dot-grid {
		width: 100%;
		height: 100%;
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		grid-template-rows: repeat(6, 1fr);
		gap: 0.25rem;
		padding: 0.5rem;
		opacity: 0.4;
		transition: opacity 0.3s ease;
	}

	.project-card:hover .dot-grid {
		opacity: 0.7;
	}

	.dot {
		background-color: var(--foreground);
		border-radius: 50%;
	}

	.info {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.meta {
		font-size: 0.625rem;
		opacity: 0.5;
		letter-spacing: 0.1em;
		text-transform: uppercase;
	}

	h3 {
		font-size: 0.75rem;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		transition: var(--transition-smooth);
	}

	.project-card:hover h3 {
		text-shadow: var(--glow-orange);
	}

	@media (min-width: 768px) {
		.project-card {
			padding: 1.5rem;
		}

		.meta {
			font-size: 0.75rem;
		}

		h3 {
			font-size: 0.875rem;
		}
	}
</style>
