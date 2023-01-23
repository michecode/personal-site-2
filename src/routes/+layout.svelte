<script>
	import '../app.css';
	import { onMount } from 'svelte';
	import Suminigashi from '$lib/images/background.png';
	import SuminigashiMobile from '$lib/images/background-mobile.png';

	let isDesktop = true;
	onMount(() => {
		isDesktop = window.screen.availWidth >= 1024;
	});
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<div class="bg-black absolute left-0 top-0 -z-50 h-screen w-screen overflow-hidden">
	<img
		src={isDesktop ? Suminigashi : SuminigashiMobile}
		class="opacity-80 h-full w-full animate-breathe"
	/>
</div>
<slot />
