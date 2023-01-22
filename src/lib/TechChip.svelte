<script lang="ts">
	import Icon from './Icon.svelte';

	export let text: string;
	export let iconKey: string;
</script>

<div class="flex items-center space-x-2 p-2 w-fit h-fit border-2 border-offblack rounded-xl">
	<p class="font-bold">{text}</p>
	<Icon type={iconKey} size="24px" />
</div>
