<script>
	let isOpen = $state(false);

	function toggleMenu() {
		isOpen = !isOpen;
	}

	function closeMenu() {
		isOpen = false;
	}
</script>

<!-- Header mit Logo/Menu Button -->
<header>
	<button class="menu-button" onclick={toggleMenu}>
		MIRIAM ABBAS
	</button>
</header>

<!-- Menu Overlay -->
{#if isOpen}
	<div class="menu-overlay" onclick={closeMenu}></div>
{/if}

<!-- Menu Panel -->
<nav class="menu-panel" class:open={isOpen}>
	<button class="close-button" onclick={closeMenu}>
		×
	</button>
	<div class="menu-content">
		<!-- Menu items kommt später -->
	</div>
</nav>

<style>
	header {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		padding: 24px 32px;
		display: flex;
		justify-content: flex-end;
		z-index: 100;
	}

	.menu-button {
		background: none;
		border: none;
		color: #ff8b4c;
		font-family: 'Inter', sans-serif;
		font-size: 18px;
		font-weight: 600;
		letter-spacing: -0.5px;
		cursor: pointer;
		transition: opacity 0.3s ease;
		padding: 0;
	}

	.menu-button:hover {
		opacity: 0.8;
	}

	.menu-overlay {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.4);
		z-index: 99;
		animation: fadeIn 0.3s ease;
	}

	.menu-panel {
		position: fixed;
		top: 0;
		right: -100%;
		width: 100%;
		max-width: 400px;
		height: 100vh;
		background-color: #0f0f0f;
		border-left: 1px solid #ff8b4c;
		transition: right 0.3s ease;
		z-index: 101;
		padding: 24px 32px;
		display: flex;
		flex-direction: column;
	}

	.menu-panel.open {
		right: 0;
	}

	.close-button {
		align-self: flex-end;
		background: none;
		border: none;
		color: #ff8b4c;
		font-size: 36px;
		cursor: pointer;
		padding: 0;
		width: 40px;
		height: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: opacity 0.3s ease;
		margin-bottom: 32px;
	}

	.close-button:hover {
		opacity: 0.8;
	}

	.menu-content {
		flex: 1;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
