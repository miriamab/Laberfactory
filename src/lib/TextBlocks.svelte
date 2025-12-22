<script>
	const blocks = [
		'My practice explores the intersection of movement and architecture, finding choreographic potential in everyday spaces and gestures.',
		'Each project begins with observation—watching how bodies navigate, hesitate, and transform within their environments.',
		'I collaborate across disciplines, working with architects, musicians, and visual artists to create immersive kinetic experiences.',
		'Currently developing new work examining collective memory through site-specific performance.'
	];
</script>

<section id="about">
	<div class="blocks">
		{#each blocks as text, index}
			<div
				class="block animate-fade-in"
				style="animation-delay: {index * 0.15}s; padding-left: {index * 2}rem;"
			>
				<p>{text}</p>
			</div>
		{/each}
	</div>
</section>

<style>
	section {
		padding: 4rem 1.5rem;
	}

	.blocks {
		max-width: 64rem;
	}

	.block {
		border-top: 1px solid rgba(255, 139, 76, 0.2);
		padding-top: 1.5rem;
		padding-bottom: 1.5rem;
	}

	p {
		font-size: 0.875rem;
		line-height: 1.6;
		opacity: 0.8;
		transition: opacity 0.3s ease;
		max-width: 42rem;
	}

	.block:hover p {
		opacity: 1;
	}

	@media (min-width: 768px) {
		section {
			padding: 6rem 3rem;
		}

		.block {
			padding-top: 2rem;
			padding-bottom: 2rem;
		}

		p {
			font-size: 1rem;
		}
	}
</style>
