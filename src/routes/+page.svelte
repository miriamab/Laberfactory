<script>
	import Header from '$lib/Header.svelte';
	import TitleSection from '$lib/TitleSection.svelte';
	import TextSection1 from '$lib/TextSection1.svelte';
	import ImageSection from '$lib/ImageSection.svelte';
	import TextSection2 from '$lib/TextSection2.svelte';
	import PodcastEpisodes from '$lib/PodcastEpisodes.svelte';
	import IntroAnimation from '$lib/IntroAnimation.svelte';
	import { onMount } from 'svelte';

	let isDarkSection = false;

	function scrollToNext(sectionIndex) {
		const sections = document.querySelectorAll('.snap-section');
		if (sectionIndex < sections.length - 1) {
			sections[sectionIndex + 1].scrollIntoView({ behavior: 'smooth' });
		}
	}

	function updateHeaderState() {
		const darkSections = document.querySelectorAll('.section-dark');
		const section0 = document.getElementById('section-0');
		
		isDarkSection = false;
		let showTitle = false;
		
		darkSections.forEach((section) => {
			const rect = section.getBoundingClientRect();
			if (rect.top <= 100 && rect.bottom >= 100) {
				isDarkSection = true;
			}
		});

		if (section0) {
			const rect = section0.getBoundingClientRect();
			if (rect.bottom <= 100) {
				showTitle = true;
			}
		}

		// Update header class
		const header = document.querySelector('header');
		if (header) {
			if (isDarkSection) {
				header.classList.add('dark-header');
			} else {
				header.classList.remove('dark-header');
			}

			if (showTitle) {
				header.classList.add('show-title');
			} else {
				header.classList.remove('show-title');
			}
		}
	}

	onMount(() => {
		const container = document.querySelector('.page-container');
		if (container) {
			container.addEventListener('scroll', updateHeaderState);
		}
		window.addEventListener('resize', updateHeaderState);
		updateHeaderState(); // Initial check

		return () => {
			if (container) {
				container.removeEventListener('scroll', updateHeaderState);
			}
			window.removeEventListener('resize', updateHeaderState);
		};
	});
</script>

<IntroAnimation />

<Header />

<div class="page-container">
	<div class="snap-section" id="section-0">
		<TitleSection />
		<button class="nav-arrow" on:click={() => scrollToNext(0)}>
			<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
				<path d="M12 16l-6-6h12l-6 6z"/>
			</svg>
		</button>
	</div>

	<div class="snap-section section-dark" id="section-1">
		<TextSection1 />
		<button class="nav-arrow dark-arrow" on:click={() => scrollToNext(1)}>
			<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
				<path d="M12 16l-6-6h12l-6 6z"/>
			</svg>
		</button>
	</div>

	<div class="snap-section" id="section-2">
		<ImageSection />
		<button class="nav-arrow" on:click={() => scrollToNext(2)}>
			<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
				<path d="M12 16l-6-6h12l-6 6z"/>
			</svg>
		</button>
	</div>

	<div class="snap-section section-dark" id="section-3">
		<TextSection2 />
		<button class="nav-arrow dark-arrow" on:click={() => scrollToNext(3)}>
			<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
				<path d="M12 16l-6-6h12l-6 6z"/>
			</svg>
		</button>
	</div>

	<div class="snap-section" id="section-4">
		<div class="final-section">
			<section class="episodes">
				<h2>Episodenliste</h2>
				<PodcastEpisodes />
			</section>
			<footer>
				<div class="footer-content">
					<div class="footer-line">
						<span class="logo">Laberfactory</span>
						<span class="divider">·</span>
						<p>Der Podcast. Zufällig. Relevant. Ohne Themenlimits.</p>
					</div>
					<div class="footer-links">
						<a href="mailto:podcast@laberfactory.de">Kontakt</a>
						<span class="divider">·</span>
						<a href="#">Privacy Policy</a>
					</div>
				</div>
			</footer>
		</div>
	</div>
</div>

<style>
	.page-container {
		scroll-snap-type: y mandatory;
		overflow-y: scroll;
		height: 100vh;
	}

	.snap-section {
		scroll-snap-align: start;
		height: 100vh;
		position: relative;
		display: flex;
		flex-direction: column;
	}

	.final-section {
		height: 100vh;
		scroll-snap-type: none;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.nav-arrow {
		position: absolute;
		bottom: 2rem;
		left: 50%;
		transform: translateX(-50%);
		background: none;
		border: none;
		width: 60px;
		height: 60px;
		color: #050510;
		cursor: pointer;
		transition: all 0.3s ease;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 100;
	}

	.nav-arrow:hover {
		color: rgba(5, 5, 16, 0.6);
		transform: translateX(-50%) translateY(5px);
	}

	.dark-arrow {
		color: #f0ecec;
	}

	.dark-arrow:hover {
		color: rgba(240, 236, 236, 0.6);
		transform: translateX(-50%) translateY(5px);
	}

	.episodes {
		padding: 4rem 2rem 2rem;
		max-width: 1200px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		flex: 1;
		overflow-y: auto;
	}

	h2 {
		font-size: 1.5rem;
		font-weight: 500;
		color: #050510;
		margin-bottom: 3rem;
		text-align: center;
	}

	footer {
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

	@media (min-width: 768px) {
		.episodes {
			padding: 6rem 4rem 3rem;
		}

		h2 {
			font-size: 1.5rem;
		}

		.footer-content {
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
		}
	}
</style>
