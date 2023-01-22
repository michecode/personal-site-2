import CheseDemo from './images/chese-demo.mp4';
import LahvahGif from './images/lahvahscreencap.gif';
import AltoGif from './images/altoscreencap.gif';

export const projects = {
	alto: {
		title: 'alto',
		link: 'https://alto.earth',
		image: AltoGif,
		isVideo: false,
		body: `Alto was my original inspiration to pursue web development. 
		When I first started expanding my indoor array of plants I kept forgetting how to care for them and searching 
		for multiple different plants caused a lot of friction. 
		I decided to take it on as a project, simplify and reduce as much of that annoying friction as possible. 
		I succeeded in that task, I loved the user flow and design. I was able to get back in touch my illustration skills 
		and add those as I went along development. However, I got distracted and never filled out the database how I originally wanted 
		to. Recently, I rekindled the inspiration and decided to rebuild it from the ground up with an entire new tech stack now 
		that I have become much more experienced. I chose to use this as an opportunity to learn Svelte and Astro, also using 
		my usual favorites, Tailwind and Typescript.
		`,
		techStack: [
			{
				name: 'Svelte',
				logoKey: 'svelteLogo',
			},
			{
				name: 'Astro',
				logoKey: 'astroLogo',
			},
			{
				name: 'tailwind',
				logoKey: 'tailwindLogo',
			},
			{
				name: 'TypeScript',
				logoKey: 'typescriptLogo',
			},
			{
				name: 'Sanity',
				logoKey: 'package',
			},
		],
	},
	chese: {
		title: 'chese',
		link: 'https://chese.onrender.com',
		image: CheseDemo,
		isVideo: true,
		body: 'nfts!!',
		techStack: [
			{
				name: 'React',
				logoKey: 'reactLogo',
			},
			{
				name: 'TypeScript',
				logoKey: 'typescriptLogo',
			},
			{
				name: 'Tailwind',
				logoKey: 'tailwindLogo',
			},
			{
				name: 'Gatsby',
				logoKey: 'gatsbyLogo',
			},
			{
				name: 'Solidity',
				logoKey: 'solidityLogo',
			},
			{
				name: 'Hardhat',
				logoKey: 'package',
			},
			{
				name: 'Alchemy',
				logoKey: 'api',
			},
			{
				name: 'Infura',
				logoKey: 'api',
			},
			{
				name: 'IPFS',
				logoKey: 'api',
			},
			{
				name: 'Pinata',
				logoKey: 'api',
			},
		],
	},
	lahvah: {
		title: 'lahvah',
		link: 'https://lahvah.onrender.com',
		image: LahvahGif,
		isVideo: false,
		body: 'mdoels!!',
		techStack: [
			{
				name: 'React',
				logoKey: 'reactLogo',
			},
			{
				name: 'NextJS',
				logoKey: 'nextjsLogo',
			},
			{
				name: 'Tailwind',
				logoKey: 'tailwindLogo',
			},
			{
				name: 'TypeScript',
				logoKey: 'typescriptLogo',
			},
		],
	},
};
