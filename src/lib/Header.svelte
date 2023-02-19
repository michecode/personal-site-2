<script lang="ts">
	import HeaderLink from './HeaderLink.svelte';
	import Resume from './resume-standard.pdf';
</script>

<div>
	<h1 class="font-bold text-4xl lg:text-6xl">Madison Fries</h1>
	<h2 class="inline text-xl lg:text-3xl font-bold">Front End Engineer</h2>
	<h6 class="lg:inline">at Charged Particles</h6>
	<div class="flex space-x-2 items-center justify-around lg:justify-start my-4 lg:my-0">
		<HeaderLink name="GitHub" iconKey="github" link="https://github.com/michecode" />
		<HeaderLink name="LinkedIn" iconKey="linkedin" link="https://linkedin.com/in/madisonfries" />
		<HeaderLink name="Resume" iconKey="file" link={Resume} />
		<HeaderLink name="Email" iconKey="mail" link="mailto:madisonfries@protonmail.com" />
	</div>
</div>
