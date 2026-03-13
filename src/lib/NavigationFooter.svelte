<script>
	export let activeTab = 'episodes';
	
	function switchTab(tab) {
		// Dispatch ein Event, das von der Parent-Komponente gehört wird
		const event = new CustomEvent('tabChange', {
			detail: { tab }
		});
		document.dispatchEvent(event);
		
		// URL Hash setzen
		window.history.replaceState(null, '', `#${tab}`);
	}
</script>

<footer>
	<div class="footer-content">
		<div class="footer-line">
			<span class="logo">Laberfactory</span>
			<span class="divider">·</span>
			<p>Der Podcast. Zufällig. Relevant. Ohne Themenlimits.</p>
		</div>
		<div class="footer-links">
			<button class="footer-link" class:active={activeTab === 'episodes'} on:click={() => switchTab('episodes')}>Episodenliste</button>
			<span class="divider">·</span>
			<button class="footer-link" class:active={activeTab === 'news'} on:click={() => switchTab('news')}>News</button>
			<span class="divider">·</span>
			<a href="mailto:info@laberfactory.de">Kontakt</a>
			<span class="divider">·</span>
			<button class="footer-link" class:active={activeTab === 'privacy-policy'} on:click={() => switchTab('privacy-policy')}>Privacy Policy</button>
		</div>
	</div>
</footer>

<style>
	footer {
		background: #f0ecec;
		padding: 1.5rem 0.5rem; /* Weniger Padding seitlich für mehr Platz auf Mobile */
	}

	.footer-content {
		display: flex;
		flex-direction: column-reverse; /* Links oben, Text unten auf Mobile */
		gap: 1rem; /* Etwas kompakter */
		margin-bottom: 0rem;
	}

	.footer-line {
		display: flex;
		align-items: center;
		justify-content: center; /* Zentriert auf Mobile */
		gap: 0.3rem; /* Tighter für sehr kleine Handys */
		flex-wrap: wrap; /* Notfalls umbrechen, sollte aber passen */
	}

	.logo {
		font-size: clamp(0.6rem, 2.5vw, 0.7rem); /* Kleiner und dynamisch auf Mobile */
		font-weight: 400;
		color: #050510;
		opacity: 0.6;
		margin: 0;
		white-space: nowrap;
	}

	.divider {
		opacity: 0.3;
		color: #050510;
		font-size: clamp(0.6rem, 2.5vw, 0.7rem);
	}

	.footer-line p {
		font-size: clamp(0.55rem, 2vw, 0.7rem); /* Text noch etwas kleiner */
		opacity: 0.6;
		margin: 0;
		color: #050510;
		text-align: center;
	}

	.footer-links {
		display: flex;
		align-items: center;
		justify-content: center; /* Zentriert auf Mobile */
		gap: 0.2rem; /* Enger zusammen für sehr kleine Handys */
		flex-wrap: wrap; 
	}

	.footer-link {
		color: #050510;
		text-decoration: none;
		font-size: clamp(0.65rem, 2.8vw, 0.8rem); /* Passt sich an kleine Bildschirme an */
		transition: all 0.2s ease;
		background: none;
		border: none;
		font-family: inherit;
		cursor: pointer;
		padding: 0.2rem;
		border-radius: 4px;
		opacity: 0.6;
		white-space: nowrap; /* Button-Text bleibt auf einer Zeile */
	}

	.footer-links a:not(.footer-link) {
		color: #050510;
		text-decoration: none;
		font-size: clamp(0.65rem, 2.8vw, 0.8rem);
		transition: opacity 0.2s ease;
		opacity: 0.6;
		padding: 0.2rem;
		white-space: nowrap;
	}

	.footer-link:hover {
		opacity: 1;
	}

	.footer-links a:not(.footer-link):hover {
		opacity: 1;
	}

	.footer-link.active {
		opacity: 1;
		background: rgba(5, 5, 16, 0.1);
		font-weight: 500;
	}
	@media (max-width: 400px) {
		footer {
			padding: 1rem 0.25rem;
		}
		.footer-content {
			gap: 0.5rem;
		}
		.footer-line {
			gap: 0.2rem;
		}
		.logo, .divider {
			font-size: 0.55rem;
		}
		.footer-line p {
			font-size: 0.5rem;
		}
		.footer-links {
			gap: 0.1rem;
		}
		.footer-link, .footer-links a:not(.footer-link) {
			font-size: 0.55rem;
			padding: 0.15rem;
		}
	}
@media (max-width: 390px) {
footer {
padding: 1rem 0.25rem;
}
.footer-content {
gap: 0.5rem;
}
.logo, .divider {
font-size: 0.55rem;
}
.footer-line p {
font-size: 0.5rem;
}
.footer-link, .footer-links a:not(.footer-link) {
font-size: 0.55rem;
padding: 0.15rem;
}
}

	@media (min-width: 768px) {
		footer {
			padding: 2rem;
		}

		.footer-content {
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			gap: 1rem;
		}

		.footer-line {
			justify-content: flex-start;
			gap: 1rem;
		}

		.logo {
			font-size: 0.9rem;
		}

		.divider {
			font-size: 0.9rem;
		}

		.footer-line p {
			font-size: 0.9rem;
			text-align: left;
		}

		.footer-links {
			justify-content: flex-end;
			gap: 1rem;
		}

		.footer-link {
			font-size: 0.9rem;
		}

		.footer-links a:not(.footer-link) {
			font-size: 0.9rem;
		}
	}
</style>