<footer id="contact">
	<div class="footer-content">
		<div class="contact-section">
			<span class="section-label">Get in touch</span>
			<a href="mailto:miriam.abbas@hm.edu" class="email line-decoration">
				miriam.abbas@hm.edu
			</a>
		</div>

		<div class="social-links">
			<a href="#" class="line-decoration">Instagram</a>
			<a href="#" class="line-decoration">Vimeo</a>
			<a href="#" class="line-decoration">LinkedIn</a>
		</div>
	</div>

	<div class="footer-bottom">
		<span>© 2025 Miriam Abbas</span>
		<span>Duration · Distance · Endurance · Pace · Force</span>
	</div>
</footer>

<style>
	footer {
		padding: 3rem 1.5rem;
		border-top: 1px solid rgba(255, 139, 76, 0.2);
	}

	.footer-content {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.contact-section {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.section-label {
		font-size: 0.625rem;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		opacity: 0.5;
		display: block;
	}

	.email {
		font-size: 1.125rem;
		letter-spacing: 0.025em;
		color: var(--foreground);
		text-decoration: none;
		transition: var(--transition-smooth);
		display: inline-block;
	}

	.email:hover {
		text-shadow: var(--glow-orange);
	}

	.social-links {
		display: flex;
		gap: 1.5rem;
		font-size: 0.75rem;
		letter-spacing: 0.1em;
		text-transform: uppercase;
	}

	.social-links a {
		opacity: 0.5;
		transition: opacity 0.3s ease;
		color: var(--foreground);
		text-decoration: none;
	}

	.social-links a:hover {
		opacity: 1;
	}

	.footer-bottom {
		margin-top: 4rem;
		padding-top: 1.5rem;
		border-top: 1px solid rgba(255, 139, 76, 0.1);
		display: flex;
		flex-direction: column;
		gap: 1rem;
		font-size: 0.625rem;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		opacity: 0.4;
	}

	@media (min-width: 768px) {
		footer {
			padding: 4rem 3rem;
		}

		.section-label {
			font-size: 0.75rem;
		}

		.footer-content {
			flex-direction: row;
			align-items: flex-end;
			justify-content: space-between;
		}

		.email {
			font-size: 1.25rem;
		}

		.footer-bottom {
			margin-top: 6rem;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
		}
	}
</style>
