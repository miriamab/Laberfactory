<script>
	import ProjectCard from './ProjectCard.svelte';

	const projects = [
		{ title: 'Temporal Drift', year: '2024', category: 'Performance' },
		{ title: 'Urban Pulse', year: '2024', category: 'Installation' },
		{ title: 'Kinetic Dialogues', year: '2023', category: 'Dance Film' },
		{ title: 'Breath & Structure', year: '2023', category: 'Workshop' },
		{ title: 'Nocturnal Maps', year: '2023', category: 'Performance' },
		{ title: 'Movement Atlas', year: '2022', category: 'Research' }
	];
</script>

<section id="work">
	<div class="section-label">
		<span>Selected Work</span>
	</div>
	<div class="grid">
		{#each projects as project, index}
			<ProjectCard {...project} {index} />
		{/each}
	</div>
</section>

<style>
	section {
		padding: 4rem 1.5rem;
	}

	.section-label {
		margin-bottom: 2rem;
	}

	.section-label span {
		font-size: 0.625rem;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		opacity: 0.5;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1rem;
	}

	@media (min-width: 768px) {
		section {
			padding: 6rem 3rem;
		}

		.section-label {
			margin-bottom: 3rem;
		}

		.section-label span {
			font-size: 0.75rem;
		}

		.grid {
			grid-template-columns: repeat(3, 1fr);
			gap: 1.5rem;
		}
	}

	@media (min-width: 1024px) {
		.grid {
			grid-template-columns: repeat(6, 1fr);
		}
	}
</style>
