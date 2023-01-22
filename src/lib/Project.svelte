<script lang="ts">
	import { onMount } from 'svelte';
	import Icon from './Icon.svelte';
	import { projects } from './projectDetails';

	export let key: 'alto' | 'chese' | 'lahvah';
	export let handleClose: () => void;

	const { title, body, image, isVideo, techStack } = projects[key];

	const handleKey = (e: KeyboardEvent) => {
		if (e.key !== 'Escape') {
			return;
		}
		handleClose();
	};

	onMount(() => {
		document.addEventListener('keydown', handleKey);

		return () => {
			document.removeEventListener('keydown', handleKey);
		};
	});
</script>

<div class="bg-offwhite mt-[10vh] h-[90vh] text-offblack mx-12 rounded-t-2xl shadow-2xl">
	<div class="px-6 pt-4">
		<!-- header -->
		<div class="flex items-center justify-between">
			<h2 class="font-bold text-4xl">{title}</h2>
			<button on:click={handleClose}>
				<Icon type="close" />
			</button>
		</div>
		<!-- body -->
		<div class="grid grid-cols-1 lg:grid-cols-2">
			<!-- article -->
			<article>{body}</article>
			<!-- image + tags -->
			<div class="flex flex-col">
				<div class="shadow-xl">
					{#if isVideo}
						<!-- svelte-ignore a11y-media-has-caption -->
						<video src={image} autoplay muted controls />
					{:else}
						<!-- svelte-ignore a11y-missing-attribute -->
						<img src={image} />
					{/if}
				</div>
				<div>
					{#each techStack as tech}
						<p>{tech}</p>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>
