<script lang="ts">
	import Icon from './Icon.svelte';

	export let title: string;
	export let body: string;
	export let techStack: string[];
	export let handleClose: () => void;
</script>

<div class="bg-offwhite mt-[10vh] h-[90vh] text-offblack mx-12 rounded-t-2xl shadow-2xl">
	<div class="flex items-center px-6 pt-4 justify-between">
		<h2 class="font-bold text-4xl">{title}</h2>
		<button on:click={handleClose}>
			<Icon type="close" />
		</button>
	</div>
	<div>pic here</div>
	<div>
		<p>{body}</p>
		<div>ugh tech stack</div>
	</div>
</div>
