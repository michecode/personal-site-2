<script lang="ts">
	import Icon from './Icon.svelte';

	export let text: string;
	export let iconKey: string;
</script>

<div>
	<p>{text}</p>
	<Icon type={iconKey} />
</div>
