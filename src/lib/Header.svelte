<script lang="ts">
	import HeaderLink from './HeaderLink.svelte';
	import Resume from './resume-current.pdf';
</script>

<div>
	<h1 class="font-bold text-6xl">Madison Fries</h1>
	<h2 class="inline text-3xl font-bold">Front End Engineer</h2>
	<h6 class="inline">at Charged Particles</h6>
	<div class="flex space-x-2 items-center transition-all">
		<HeaderLink name="GitHub" iconKey="github" link="https://github.com/michecode" />
		<HeaderLink name="LinkedIn" iconKey="linkedin" link="https://linkedin.com/in/madisonfries" />
		<HeaderLink name="Resume" iconKey="file" link={Resume} />
		<HeaderLink name="Email" iconKey="mail" link="mailto:madisonfries@protonmail.com" />
	</div>
</div>
