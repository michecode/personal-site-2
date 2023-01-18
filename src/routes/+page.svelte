<script lang="ts">
	import { fly } from 'svelte/transition';
	import Header from '$lib/Header.svelte';
</script>

<div class="flex flex-col min-h-screen min-w-screen justify-around">
	<!-- body glob! goppy woppy shop-->
	<div class="bg-offwhite text-offblack mx-12 rounded-xl shadow-2xl">
		<div class="p-8">
			<Header />
		</div>
	</div>
</div>
