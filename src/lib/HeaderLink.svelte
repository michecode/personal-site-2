<script lang="ts">
	import { cubicInOut } from 'svelte/easing';
	import Icon from './Icon.svelte';

	export let name: string;
	export let link: string;
	export let iconKey: string;

	function slideHorizontal(node: Element) {
		const style = getComputedStyle(node);
		const opacity = +style.opacity;
		const width = parseFloat(style.width);
		const padding_top = parseFloat(style.paddingTop);
		const padding_bottom = parseFloat(style.paddingBottom);
		const margin_top = parseFloat(style.marginTop);
		const margin_bottom = parseFloat(style.marginBottom);
		const border_top_width = parseFloat(style.borderTopWidth);
		const border_bottom_width = parseFloat(style.borderBottomWidth);

		return {
			duration: 500,
			easing: cubicInOut,
			css: (t: number) =>
				'overflow: hidden;' +
				`opacity: ${Math.min(t * 20, 1) * opacity};` +
				`width: ${t * width}px;` +
				`padding-top: ${t * padding_top}px;` +
				`padding-bottom: ${t * padding_bottom}px;` +
				`margin-top: ${t * margin_top}px;` +
				`margin-bottom: ${t * margin_bottom}px;` +
				`border-top-width: ${t * border_top_width}px;` +
				`border-bottom-width: ${t * border_bottom_width}px;`,
		};
	}

	let state = false;

	const handleState = (e: MouseEvent | FocusEvent) => {
		if (e.type !== 'mouseleave') {
			state = true;
		} else {
			state = false;
		}
	};
</script>

<a
	href={link}
	target="_blank"
	rel="noreferrer"
	class="flex items-center"
	on:mouseenter={handleState}
	on:mouseleave={handleState}
	on:blur={handleState}
>
	<Icon type={iconKey} class="mr-2" />
	{#if state}
		<p transition:slideHorizontal>{name}</p>
	{/if}
</a>
