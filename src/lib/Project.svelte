<script lang="ts">
	import { onMount } from 'svelte';
	import Icon from './Icon.svelte';
	import TechChip from './TechChip.svelte';
	import { projects } from './projectDetails';

	export let key: 'alto' | 'chese' | 'puffer';
	export let handleClose: () => void;

	const { title, body, image, techStack, link } = projects[key];

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

<div
	class="bg-offwhite mt-[10vh] h-[90vh] text-offblack lg:mx-12 rounded-t-2xl shadow-2xl overflow-scroll scrollbar-hide"
>
	<div class="px-6 pt-4">
		<!-- header -->
		<div class="flex items-center justify-between mb-2">
			<a href={link} target="_blank" rel="noreferrer" class="flex items-center">
				<h2 class="font-bold text-4xl underline">{title}</h2>
				<Icon type="link" size="32px" />
			</a>
			<button
				on:click={handleClose}
				class="flex items-center border-2 border-offblack py-1 px-2 rounded-xl"
			>
				<kbd class="hidden lg:block">esc</kbd>
				<Icon type="close" />
			</button>
		</div>
		<!-- body -->
		<div class="grid grid-cols-1 lg:grid-cols-2">
			<!-- article -->
			<article class="mx-4 order-last lg:order-1">{body}</article>
			<!-- image + tags -->
			<div class="flex flex-col">
				<div class="shadow-xl">
					<!-- svelte-ignore a11y-missing-attribute -->
					<img src={image} />
				</div>
				<div class="flex space-x-2 space-y-2 my-4 flex-wrap items-end">
					{#each techStack as tech}
						<TechChip text={tech.name} iconKey={tech.logoKey} />
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>
