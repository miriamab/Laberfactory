<script>
	import Header from '$lib/Header.svelte';
	import ImageSection from '$lib/ImageSection.svelte';
	import TextSection2 from '$lib/TextSection2.svelte';
	import Episodes from '$lib/Episodes.svelte';
	import News from '$lib/News.svelte';
	import PrivacyPolicy from '$lib/PrivacyPolicy.svelte';
	import NavigationFooter from '$lib/NavigationFooter.svelte';
	import IntroAnimation from '$lib/IntroAnimation.svelte';
	import { hasNavigated } from '$lib/stores.js';
	import { onMount } from 'svelte';

	let isDarkSection = false;
	let showIntroAnimation = false;
	let activeTab = 'episodes'; // Standard: Episodenliste

	function switchTab(tab) {
		activeTab = tab;
		// Zur aktuellen Sektion scrollen wenn Tab gewechselt wird
		setTimeout(() => {
			const section2 = document.getElementById('section-2');
			if (section2) {
				section2.scrollIntoView({ behavior: 'smooth' });
			}
		}, 50);
	}

	function scrollToNext(sectionIndex) {
		const sections = document.querySelectorAll('.snap-section');
		if (sectionIndex < sections.length - 1) {
			sections[sectionIndex + 1].scrollIntoView({ behavior: 'smooth' });
		}
	}

	function updateHeaderState() {
		const darkSections = document.querySelectorAll('.section-dark');
		const section1 = document.getElementById('section-1');
		
		isDarkSection = false;
		let showTitle = false;
		
		darkSections.forEach((section) => {
			const rect = section.getBoundingClientRect();
			if (rect.top <= 100 && rect.bottom >= 100) {
				isDarkSection = true;
			}
		});

		if (section1) {
			const rect = section1.getBoundingClientRect();
			if (rect.top <= 100) {
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
		// Bei jedem Reload/Laden der Seite: 
		// 1. hasNavigated zurücksetzen
		// 2. IntroAnimation immer zeigen 
		// 3. Zur Hero-Sektion scrollen
		// 4. Episodenliste als Standard setzen
		
		hasNavigated.set(false);
		showIntroAnimation = true;
		activeTab = 'episodes'; // Episodenliste als Standard
		
		// Zur Hero-Sektion (Section 0) scrollen
		setTimeout(() => {
			// Sicherstellen, dass die Seite ganz nach oben scrollt
			window.scrollTo(0, 0);
			const heroSection = document.getElementById('section-0');
			if (heroSection) {
				heroSection.scrollIntoView({ behavior: 'instant' });
			}
		}, 50);

		// Hash aus URL entfernen, damit bei Reload immer die Hero-Sektion gezeigt wird
		if (window.location.hash) {
			window.history.replaceState(null, '', window.location.pathname);
		}

		const container = document.querySelector('.page-container');
		if (container) {
			container.addEventListener('scroll', updateHeaderState);
		}
		window.addEventListener('resize', updateHeaderState);
		
		// Event-Listener für Tab-Wechsel vom Footer
		document.addEventListener('tabChange', (event) => {
			activeTab = event.detail.tab;
		});
		
		updateHeaderState(); // Initial check

		return () => {
			if (container) {
				container.removeEventListener('scroll', updateHeaderState);
			}
			window.removeEventListener('resize', updateHeaderState);
			document.removeEventListener('tabChange', () => {});
		};
	});
</script>

{#if showIntroAnimation}
	<IntroAnimation />
{/if}

<Header />

<div class="page-container">
	<div class="snap-section" id="section-0">
		<ImageSection />
		<button class="nav-arrow" on:click={() => scrollToNext(0)}>
			<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
				<path d="M12 16l-6-6h12l-6 6z"/>
			</svg>
		</button>
	</div>

	<div class="snap-section section-dark" id="section-1">
		<TextSection2 />
		<button class="nav-arrow dark-arrow" on:click={() => scrollToNext(1)}>
			<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
				<path d="M12 16l-6-6h12l-6 6z"/>
			</svg>
		</button>
	</div>

	<div class="snap-section" id="section-2">
		<div class="final-section">			
			<section class="tab-content">
				{#if activeTab === 'episodes'}
					<Episodes />
				{:else if activeTab === 'news'}
					<News />
				{:else if activeTab === 'privacy-policy'}
					<PrivacyPolicy />
				{/if}
			</section>
			
			<NavigationFooter {activeTab} />
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

	.tab-content {
		padding: 3rem 2rem 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		flex: 1;
		min-height: 0;
	}

	@media (max-width: 768px) {
		.tab-content {
			padding: 1.5rem 1rem 0;
		}
	}

	@media (min-width: 768px) {
		.tab-content {
			padding: 3rem 4rem 0;
		}
	}
</style>
