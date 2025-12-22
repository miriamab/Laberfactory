<section>
	<svg
		viewBox="0 0 1200 400"
		class="svg-lines"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<!-- Main organic lines representing movement paths -->
		<path
			d="M0 300 Q100 250 200 280 T400 260 T600 200 T800 220 T1000 180 T1200 200"
			stroke="#ff8b4c"
			stroke-width="1.5"
			class="animate-line-draw"
			style="stroke-dasharray: 1000; animation-delay: 0s;"
		/>
		<path
			d="M0 320 Q150 280 300 300 T500 240 T700 260 T900 200 T1100 220 T1200 180"
			stroke="#ff8b4c"
			stroke-width="1"
			class="animate-line-draw"
			style="stroke-dasharray: 1000; animation-delay: 0.3s;"
		/>
		<path
			d="M0 280 Q200 320 350 260 T550 280 T750 180 T950 240 T1200 160"
			stroke="#ff8b4c"
			stroke-width="1"
			class="animate-line-draw"
			style="stroke-dasharray: 1000; animation-delay: 0.6s;"
		/>

		<!-- Intersection node -->
		<circle cx="600" cy="230" r="4" fill="#ff8b4c" class="animate-pulse" />
		<circle
			cx="600"
			cy="230"
			r="8"
			stroke="#ff8b4c"
			stroke-width="0.5"
			fill="none"
			class="animate-pulse"
			style="animation-delay: 0.5s;"
		/>

		<!-- Secondary branching lines -->
		<path
			d="M600 230 Q620 280 700 320 T850 350 T1000 380"
			stroke="#ff8b4c"
			stroke-width="0.8"
			class="animate-line-draw"
			style="stroke-dasharray: 1000; animation-delay: 0.9s;"
		/>
		<path
			d="M600 230 Q550 290 450 340 T300 370 T100 390"
			stroke="#ff8b4c"
			stroke-width="0.8"
			class="animate-line-draw"
			style="stroke-dasharray: 1000; animation-delay: 1.2s;"
		/>
		<path
			d="M600 230 Q580 300 520 350 T400 380"
			stroke="#ff8b4c"
			stroke-width="0.5"
			class="animate-line-draw"
			style="stroke-dasharray: 1000; animation-delay: 1.5s;"
		/>

		<!-- Grid reference lines - subtle -->
		{#each [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100] as x}
			<line
				x1={x}
				y1="0"
				x2={x}
				y2="400"
				stroke="#ff8b4c"
				stroke-width="0.1"
				opacity="0.3"
			/>
		{/each}
		{#each [100, 200, 300] as y}
			<line
				x1="0"
				y1={y}
				x2="1200"
				y2={y}
				stroke="#ff8b4c"
				stroke-width="0.1"
				opacity="0.3"
			/>
		{/each}

		<!-- Small detail nodes -->
		<circle cx="300" cy="280" r="2" fill="#ff8b4c" opacity="0.6" />
		<circle cx="450" cy="260" r="2" fill="#ff8b4c" opacity="0.6" />
		<circle cx="750" cy="220" r="2" fill="#ff8b4c" opacity="0.6" />
		<circle cx="900" cy="210" r="2" fill="#ff8b4c" opacity="0.6" />
	</svg>
</section>

<style>
	section {
		padding: 4rem 1.5rem;
		overflow: hidden;
	}

	.svg-lines {
		width: 100%;
		height: auto;
		opacity: 0.6;
	}

	@media (min-width: 768px) {
		section {
			padding: 6rem 3rem;
		}
	}
</style>
