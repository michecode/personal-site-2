<script lang="ts">
	import { slide } from 'svelte/transition';
	import Header from '$lib/Header.svelte';
	import Project from '$lib/Project.svelte';

	let showMain = true;
	let activeProject: 'alto' | 'chese' | 'lahvah' | undefined;

	const handleProjectClick = (project: 'alto' | 'chese' | 'lahvah') => {
		if (activeProject === project) {
			handleClose();
			return;
		}
		showMain = false;
		setTimeout(() => (activeProject = project), 500);
	};

	const handleClose = () => {
		activeProject = undefined;
		setTimeout(() => (showMain = true), 500);
	};
</script>

<div class={`flex flex-col min-h-screen min-w-screen ${activeProject ? '' : 'justify-around'}`}>
	<!-- body glob! goppy woppy shop-->
	{#if showMain}
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
							<button
								on:click={(e) => handleProjectClick('chese')}
								class="p-4 rounded-lg font-bold text-3xl hover:shadow-2xl transition-shadow"
								>chese</button
							>
							<button
								on:click={(e) => handleProjectClick('lahvah')}
								class="p-4 rounded-lg font-bold text-3xl hover:shadow-2xl transition-shadow"
								>lahvah</button
							>
						</div>
					</div>
				</div>
			</div>
		</div>
	{:else if activeProject}
		<div transition:slide>
			<Project key={activeProject} {handleClose} />
		</div>
	{/if}
</div>
