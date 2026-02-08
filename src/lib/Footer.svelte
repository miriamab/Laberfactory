<footer>
	<div class="footer-content">
		<div class="footer-brand">
			<span class="logo">Laberfactory</span>
			<p>Zufällig. Relevant. Ohne Themenlimits.</p>
		</div>
		<div class="footer-links">
			<a href="mailto:podcast@laberfactory.de">Kontakt</a>
			<span class="divider">·</span>
			<a href="#">Spotify</a>
			<span class="divider">·</span>
			<a href="#">Apple Podcasts</a>
		</div>
	</div>
	<div class="footer-bottom">
		<span>© 2026 Laberfactory</span>
	</div>
</footer>

<style>
	footer {
		padding: 4rem 2rem 2rem;
		border-top: 1px solid rgba(5, 5, 16, 0.15);
		max-width: 1200px;
		margin: 0 auto;
	}

	.footer-content {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		margin-bottom: 3rem;
	}

	.footer-brand .logo {
		font-size: 1.25rem;
		font-weight: 700;
		color: #050510;
		display: block;
		margin-bottom: 0.5rem;
	}

	.footer-brand p {
		font-size: 0.9rem;
		opacity: 0.6;
		margin: 0;
		color: #050510;
	}

	.footer-links {
		display: flex;
		align-items: center;
		gap: 1rem;
		flex-wrap: wrap;
	}

	.footer-links a {
		color: #050510;
		text-decoration: none;
		font-size: 0.9rem;
		transition: color 0.2s;
	}

	.footer-links a:hover {
		opacity: 0.6;
	}

	.divider {
		opacity: 0.3;
	}

	.footer-bottom {
		font-size: 0.8rem;
		opacity: 0.5;
		color: #050510;
	}

	@media (min-width: 768px) {
		footer {
			padding: 5rem 4rem 2rem;
		}

		.footer-content {
			flex-direction: row;
			justify-content: space-between;
			align-items: flex-start;
		}
	}
</style>
