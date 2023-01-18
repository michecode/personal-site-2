<script lang="ts">
	import Icon from './Icon.svelte';
	import Resume from './resume-p.pdf';
</script>

<div>
	<h1 class="font-bold text-6xl">Madison Fries</h1>
	<h2 class="inline text-3xl font-bold">Front End Engineer</h2>
	<h6 class="inline">at Charged Particles</h6>
	<div class="flex space-x-4 items-center">
		<a href="https://github.com/michecode" target="_blank" rel="noreferrer">
			<Icon type="github" />
		</a>
		<a href="https://linkedin.com/in/madisonfries" target="_blank" rel="noreferrer">
			<Icon type="linkedin" />
		</a>
		<a href={Resume} target="_blank" rel="noreferrer">
			<Icon type="file" />
		</a>
		<a href="mailto:madisonfries@protonmail.com" target="_blank" rel="noreferrer">
			<Icon type="mail" />
		</a>
	</div>
</div>
