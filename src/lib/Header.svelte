<header>
	<div class="header-content">
		<h1>Laberfactory</h1>
	</div>
</header>

<style>
	header {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		background: rgba(240, 236, 236, 0.95);
		backdrop-filter: blur(10px);
		border-bottom: 1px solid rgba(5, 5, 16, 0.1);
		z-index: 1000;
	}

	.header-content {
		max-width: 1200px;
		margin: 0 auto;
		padding: 1.25rem 2rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	h1 {
		font-size: 1.5rem;
		font-weight: 500;
		color: #050510;
		margin: 0;
	}

	@media (max-width: 768px) {
		.header-content {
			padding: 1rem 1.5rem;
		}

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
