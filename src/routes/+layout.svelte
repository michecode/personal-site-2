<script>
	import '../app.css';
	import Suminigashi from '$lib/images/background.png';
	// for animation im going do a slow scale from 1 > 1.2 on the image i think.
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<div class="bg-black absolute left-0 top-0 -z-50 h-screen w-screen overflow-hidden">
	<img src={Suminigashi} class="opacity-80 h-full w-full animate-breathe" />
</div>
<slot />
