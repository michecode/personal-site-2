<script>
	import '../app.css';
	import Suminigashi from '$lib/images/background.png';
	import SuminigashiMobile from '$lib/images/background-mobile.png';
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<div class="bg-black absolute left-0 top-0 -z-50 h-screen w-screen overflow-hidden">
	<!-- 2 components so i dont have an image flash on first render! too lazy to fix the roation -->
	<img src={Suminigashi} class="hidden lg:block opacity-80 h-full w-full animate-breathe" />
	<img
		src={SuminigashiMobile}
		class="block lg:hidden opacity-80 h-full w-full animate-mobileBreathe"
	/>
</div>
<slot />
