<script>
	import { onMount } from 'svelte';

	let episodes = [];
	let loading = true;
	let error = null;
	let expandedEpisode = null;
	let currentPage = 0;
	const episodesPerPage = 6;
	let selectedEpisode = null;

	$: totalPages = Math.ceil(episodes.length / episodesPerPage);
	$: currentEpisodes = episodes.slice(currentPage * episodesPerPage, (currentPage + 1) * episodesPerPage);

	onMount(async () => {
		try {
			const response = await fetch('/api/episodes');
			if (!response.ok) {
				throw new Error('Failed to fetch episodes');
			}
			episodes = await response.json();
			loading = false;
		} catch (err) {
			console.error('Error loading episodes:', err);
			error = err.message;
			loading = false;
		}
	});

	function nextPage() {
		if (currentPage < totalPages - 1) {
			currentPage++;
			expandedEpisode = null;
		}
	}

	function prevPage() {
		if (currentPage > 0) {
			currentPage--;
			expandedEpisode = null;
		}
	}

	function openModal(episode) {
		selectedEpisode = episode;
	}

	function closeModal() {
		selectedEpisode = null;
	}

	function nextEpisode() {
		if (selectedEpisode) {
			const currentIndex = episodes.findIndex(ep => ep.id === selectedEpisode.id);
			if (currentIndex < episodes.length - 1) {
				selectedEpisode = episodes[currentIndex + 1];
				// Scroll to top of modal
				setTimeout(() => {
					const modalContent = document.querySelector('.modal-content');
					if (modalContent) modalContent.scrollTop = 0;
				}, 0);
			}
		}
	}

	function prevEpisode() {
		if (selectedEpisode) {
			const currentIndex = episodes.findIndex(ep => ep.id === selectedEpisode.id);
			if (currentIndex > 0) {
				selectedEpisode = episodes[currentIndex - 1];
				// Scroll to top of modal
				setTimeout(() => {
					const modalContent = document.querySelector('.modal-content');
					if (modalContent) modalContent.scrollTop = 0;
				}, 0);
			}
		}
	}

	function formatDate(dateString) {
		const date = new Date(dateString);
		return date.toLocaleDateString('de-DE', { day: 'numeric', month: 'numeric', year: 'numeric' });
	}

	function toggleExpand(episodeId) {
		expandedEpisode = expandedEpisode === episodeId ? null : episodeId;
	}
</script>

<div class="episodes-container">
	{#if loading}
		<div class="loading">Lade Episoden...</div>
	{:else if error}
		<div class="error">Fehler beim Laden der Episoden: {error}</div>
	{:else if episodes.length === 0}
		<div class="empty">Keine Episoden verfügbar.</div>
	{:else}
		<div class="episodes-grid">
			{#each currentEpisodes as episode, i}
				<article 
					class="episode-card" 
					on:click={() => openModal(episode)}
					style="animation-delay: {i * 0.1}s;"
				>
					<div class="episode-number">
						<span>#{episode.id}</span>
					</div>
					<div class="episode-content">
						<h3>{episode.title}</h3>
						<div class="episode-meta">
							<span>{formatDate(episode.releaseDate)}</span>
							<span class="dot">·</span>
							<span>{episode.duration}</span>
						</div>
					</div>
				</article>
			{/each}
		</div>
		
		{#if totalPages > 1}
			<div class="navigation">
				<button class="nav-btn" class:disabled={currentPage === 0} on:click={prevPage}>
					<svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
						<path d="M15 18l-6-6 6-6v12z"/>
					</svg>
				</button>
				<span class="page-indicator">{currentPage + 1} / {totalPages}</span>
				<button class="nav-btn" class:disabled={currentPage === totalPages - 1} on:click={nextPage}>
					<svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
						<path d="M9 18l6-6-6-6v12z"/>
					</svg>
				</button>
			</div>
		{/if}
	{/if}
</div>

{#if selectedEpisode}
	<div class="modal-overlay" on:click={closeModal}>
		<button class="modal-nav modal-nav-left" on:click|stopPropagation={prevEpisode} disabled={episodes.findIndex(ep => ep.id === selectedEpisode.id) === 0}>
			<svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
				<path d="M15 18l-6-6 6-6v12z"/>
			</svg>
		</button>
		
		<button class="modal-nav modal-nav-right" on:click|stopPropagation={nextEpisode} disabled={episodes.findIndex(ep => ep.id === selectedEpisode.id) === episodes.length - 1}>
			<svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
				<path d="M9 18l6-6-6-6v12z"/>
			</svg>
		</button>
		
		<div class="modal-content" on:click|stopPropagation>
			<button class="modal-close" on:click={closeModal}>
				<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
					<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
				</svg>
			</button>
			
			<div class="modal-body">
				<div class="modal-episode-number">
					<span>#{selectedEpisode.id}</span>
				</div>
				<h3>{selectedEpisode.title}</h3>
				<div class="modal-meta">
					<span>{formatDate(selectedEpisode.releaseDate)}</span>
					<span class="dot">·</span>
					<span>{selectedEpisode.duration}</span>
					<span class="dot">·</span>
					<div class="modal-meta-links">
						<a href="https://youtube.com/playlist?list=PLWPtrHZlfcFhVg55CDHb5uQZIzCf8LHHq&si=6AQbbRoHOGpP6ZxG" target="_blank" rel="noopener noreferrer" aria-label="YouTube" title="YouTube">
							<img src="/icons8-youtube.svg" alt="YouTube" />
						</a>
						<a href="https://open.spotify.com/show/7aBtsmon2ffPWEqEr8cB88" target="_blank" rel="noopener noreferrer" aria-label="Spotify" title="Spotify">
							<img src="/icons8-spotify.svg" alt="Spotify" />
						</a>
						<a href="https://podcasts.apple.com/us/podcast/laberfactory/id1856938434" target="_blank" rel="noopener noreferrer" aria-label="Apple Podcasts" title="Apple Podcasts">
							<img src="/icons8-apple-podcasts-96.png" alt="Apple Podcasts" />
						</a>
					</div>
				</div>
				<p class="modal-description description-with-paragraphs">{selectedEpisode.fullDescription}</p>
				<div class="modal-links">
					<a href="https://youtube.com/playlist?list=PLWPtrHZlfcFhVg55CDHb5uQZIzCf8LHHq&si=6AQbbRoHOGpP6ZxG" target="_blank" rel="noopener noreferrer" aria-label="YouTube" title="YouTube">
						<img src="/icons8-youtube.svg" alt="YouTube" />
					</a>
					<a href="https://open.spotify.com/show/7aBtsmon2ffPWEqEr8cB88" target="_blank" rel="noopener noreferrer" aria-label="Spotify" title="Spotify">
						<img src="/icons8-spotify.svg" alt="Spotify" />
					</a>
					<a href="https://podcasts.apple.com/us/podcast/laberfactory/id1856938434" target="_blank" rel="noopener noreferrer" aria-label="Apple Podcasts" title="Apple Podcasts">
						<img src="/icons8-apple-podcasts-96.png" alt="Apple Podcasts" />
					</a>
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	.episodes-container {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	.episodes-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(2, 1fr);
		gap: 1.5rem;
		max-width: 1200px;
		width: 100%;
		margin: 0 auto;
		flex: 1;
		min-height: 0;
	}

	.episode-card {
		display: flex;
		flex-direction: column;
		background: #f0ecec;
		border: 2px solid rgba(5, 5, 16, 0.1);
		border-radius: 12px;
		padding: 1.5rem;
		transition: all 0.3s ease;
		animation: fade-in 0.6s ease-out forwards;
		opacity: 0;
		cursor: pointer;
		height: 100%;
	}

	.episode-card:hover {
		border-color: rgba(5, 5, 16, 0.3);
		transform: translateY(-2px);
		box-shadow: 0 8px 25px rgba(5, 5, 16, 0.1);
	}

	.episode-card.expanded {
		border-color: #050510;
		background: rgba(5, 5, 16, 0.02);
		min-height: auto;
	}

	.modal-overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(5, 5, 16, 0.8);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 2000;
		padding: 2rem;
	}

	.modal-content {
		background: #f0ecec;
		border-radius: 16px;
		max-width: 900px;
		width: 100%;
		max-height: 90vh;
		overflow-y: auto;
		position: relative;
		box-shadow: 0 20px 60px rgba(5, 5, 16, 0.3);
	}

	.modal-close {
		position: fixed;
		top: calc(5vh + 1.5rem);
		right: calc(50% - 450px + 1.5rem);
		background: none;
		border: none;
		cursor: pointer;
		color: #050510;
		padding: 0.5rem;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: opacity 0.3s ease;
		z-index: 2001;
	}

	.modal-close:hover {
		opacity: 0.6;
	}

	.modal-close svg {
		pointer-events: none;
	}

	.modal-nav {
		position: fixed;
		top: 50%;
		transform: translateY(-50%);
		background: none;
		border: none;
		cursor: pointer;
		color: #f0ecec;
		padding: 2rem;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all 0.3s ease;
		z-index: 1002;
		min-width: 80px;
		min-height: 80px;
	}

	.modal-nav:hover:not(:disabled) {
		color: rgba(240, 236, 236, 0.7);
		transform: translateY(-50%) scale(1.1);
	}

	.modal-nav:disabled {
		opacity: 0.3;
		cursor: not-allowed;
	}

	.modal-nav svg {
		pointer-events: none;
	}

	.modal-nav-left {
		left: calc(50% - 450px - 80px);
	}

	.modal-nav-right {
		right: calc(50% - 450px - 80px);
	}

	.modal-body {
		padding: 3rem 5rem;
	}

	.modal-episode-number {
		width: 60px;
		height: 60px;
		background: #050510;
		border-radius: 12px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 500;
		font-size: 1rem;
		color: #f0ecec;
		margin-bottom: 1.5rem;
	}

	.modal-body h3 {
		font-size: 1.5rem;
		font-weight: 500;
		color: #050510;
		margin: 0 0 1rem 0;
		line-height: 1.3;
	}

	.modal-meta {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.9rem;
		color: #050510;
		opacity: 0.6;
		margin-bottom: 1.5rem;
	}

	.modal-meta-links {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		margin-left: 0.25rem;
	}

	.modal-meta-links a {
		display: flex;
		align-items: center;
		justify-content: center;
		transition: opacity 0.3s ease;
		opacity: 0.6;
	}

	.modal-meta-links a:hover {
		opacity: 1;
	}

	.modal-meta-links img {
		width: 18px;
		height: 18px;
		object-fit: contain;
	}

	.modal-description {
		font-size: 1.05rem;
		color: #050510;
		opacity: 0.8;
		line-height: 1.8;
		margin: 0 0 2.5rem 0;
	}

	.description-with-paragraphs {
		white-space: pre-line;
	}

	.modal-links {
		display: flex;
		gap: 1.5rem;
		align-items: center;
		justify-content: center;
		padding-top: 1.5rem;
		border-top: 2px solid rgba(5, 5, 16, 0.1);
	}

	.modal-links a {
		color: #050510;
		text-decoration: none;
		transition: opacity 0.2s ease;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.modal-links a:hover {
		opacity: 0.6;
	}

	.modal-links img {
		width: 32px;
		height: 32px;
		object-fit: contain;
	}

	.loading,
	.error,
	.empty {
		text-align: center;
		padding: 3rem;
		color: #050510;
		opacity: 0.7;
		font-size: 1rem;
	}

	.error {
		color: #d32f2f;
	}

	.episode-number {
		width: 50px;
		height: 50px;
		background: #050510;
		border-radius: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 500;
		font-size: 0.9rem;
		color: #f0ecec;
		margin-bottom: 1rem;
		flex-shrink: 0;
	}

	.episode-content {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		min-height: 0;
	}

	.episode-meta {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.75rem;
		color: #050510;
		opacity: 0.6;
		margin-top: auto;
		flex-shrink: 0;
	}

	.dot {
		opacity: 0.4;
	}

	h3 {
		font-size: 1rem;
		font-weight: 500;
		color: #050510;
		margin: 0 0 1rem 0;
		line-height: 1.3;
		flex-shrink: 0;
	}

	.episode-description {
		font-size: 0.85rem;
		color: #050510;
		opacity: 0.7;
		margin: 0;
		line-height: 1.5;
		transition: all 0.4s ease;
		order: 3;
		flex: 1;
	}

	.episode-links {
		display: flex;
		gap: 1rem;
		align-items: center;
		justify-content: center;
		margin-top: 1rem;
		padding-top: 1rem;
		border-top: 1px solid rgba(5, 5, 16, 0.1);
		order: 4;
	}

	.episode-links a {
		color: #050510;
		text-decoration: none;
		transition: opacity 0.2s ease;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.episode-links a:hover {
		opacity: 0.6;
	}

	.episode-links img {
		width: 24px;
		height: 24px;
		object-fit: contain;
	}

	@keyframes fade-in {
		from { opacity: 0; transform: translateY(10px); }
		to { opacity: 1; transform: translateY(0); }
	}

	.navigation {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		margin-top: 2rem;
		padding: 0 2rem;
	}

	.nav-btn {
		background: none;
		border: none;
		padding: 1.5rem;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		transition: all 0.3s ease;
		color: #050510;
	}

	.nav-btn svg {
		pointer-events: none;
	}

	.nav-btn:hover:not(.disabled) {
		color: rgba(5, 5, 16, 0.6);
	}

	.nav-btn.disabled {
		opacity: 0.3;
		cursor: not-allowed;
	}

	.page-indicator {
		font-size: 0.9rem;
		color: #050510;
		opacity: 0.7;
		font-weight: 500;
		min-width: 60px;
		text-align: center;
	}

	@media (max-width: 768px) {
		.episodes-grid {
			grid-template-columns: repeat(2, 1fr);
			grid-template-rows: repeat(3, 1fr);
			gap: 1rem;
			max-width: 600px;
		}

		.episode-card {
			padding: 1.25rem;
			min-height: 180px;
		}

		.episode-number {
			width: 45px;
			height: 45px;
			font-size: 0.8rem;
		}

		h3 {
			font-size: 0.95rem;
		}

		.episode-description {
			font-size: 0.8rem;
		}

		.modal-close {
			right: calc(50% - 300px + 1.5rem);
		}

		.modal-body {
			padding: 2rem 2.5rem;
		}

		.modal-body h3 {
			font-size: 1.25rem;
		}

		.modal-description {
			font-size: 0.95rem;
		}
	}

	@media (max-width: 640px) {
		.episodes-grid {
			grid-template-columns: repeat(2, 1fr);
			grid-template-rows: repeat(3, 1fr);
			max-width: 500px;
		}

		.episode-card {
			padding: 1rem;
			min-height: 160px;
		}

		.nav-btn {
			width: 44px;
			height: 44px;
		}

		.modal-overlay {
			padding: 1rem;
		}

		.modal-close {
			right: calc(1rem + 1.5rem);
		}

		.modal-body {
			padding: 2rem 1.5rem;
		}

		.modal-body h3 {
			font-size: 1.1rem;
		}

		.modal-nav {
			display: none;
		}
	}
</style>