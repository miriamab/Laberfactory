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
		padding: 2rem;
	}

	.footer-content {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		margin-bottom: 0rem;
	}

	.footer-line {
		display: flex;
		align-items: center;
		gap: 1rem;
		flex-wrap: wrap;
	}

	.logo {
		font-size: 0.9rem;
		font-weight: 400;
		color: #050510;
		opacity: 0.6;
		margin: 0;
	}

	.divider {
		opacity: 0.3;
		color: #050510;
	}

	.footer-line p {
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

	.footer-link {
		color: #050510;
		text-decoration: none;
		font-size: 0.9rem;
		transition: all 0.2s ease;
		background: none;
		border: none;
		font-family: inherit;
		cursor: pointer;
		padding: 0.25rem 0.5rem;
		border-radius: 4px;
		opacity: 0.6;
	}

	.footer-links a:not(.footer-link) {
		color: #050510;
		text-decoration: none;
		font-size: 0.9rem;
		transition: opacity 0.2s ease;
		opacity: 0.6;
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

	@media (min-width: 768px) {
		.footer-content {
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
		}
	}
</style>