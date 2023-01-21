<script lang="ts">
	import { slide } from 'svelte/transition';
	import Header from '$lib/Header.svelte';
	import Alto from '$lib/Alto.svelte';

	let activeProject: 'alto' | 'chese' | 'lahvah' | undefined;

	const handleProjectClick = (project: 'alto' | 'chese' | 'lahvah') => {
		if (activeProject === project) {
			activeProject = undefined;
			return;
		}
		activeProject = project;
	};

	const handleClose = () => {
		activeProject = undefined;
	};
</script>

<div class={`flex flex-col min-h-screen min-w-screen ${activeProject ? '' : 'justify-around'}`}>
	<!-- body glob! goppy woppy shop-->
	{#if !activeProject}
		<div transition:slide class="bg-offwhite text-offblack mx-12 rounded-xl shadow-2xl">
			<div class="p-8">
				<div class="flex flex-col lg:flex-row items-center justify-between">
					<Header />
					<div>
						<h6>projects:</h6>
						<div class="flex flex-col lg:flex-row lg:space-x-8 lg:mr-8">
							<button
								on:click={(e) => handleProjectClick('alto')}
								class="p-4 rounded-lg font-bold text-3xl hover:shadow-2xl transition-shadow"
								>alto</button
							>
							<button class="p-4 rounded-lg font-bold text-3xl hover:shadow-2xl transition-shadow"
								>chese</button
							>
							<button class="p-4 rounded-lg font-bold text-3xl hover:shadow-2xl transition-shadow"
								>lahvah</button
							>
						</div>
					</div>
				</div>
			</div>
		</div>
	{/if}
	{#if activeProject === 'alto'}
		<div transition:slide>
			<Alto {handleClose} />
		</div>
	{/if}
</div>
