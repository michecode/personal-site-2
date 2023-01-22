import CheseDemo from './images/chese-demo.mp4';
import LahvahGif from './images/lahvahscreencap.gif';
import AltoGif from './images/altoscreencap.gif';

export const projects = {
	alto: {
		title: 'alto',
		link: 'https://alto.earth',
		image: AltoGif,
		isVideo: false,
		body: 'plants!!',
		techStack: ['Svelte', 'Astro', 'Tailwind', 'Sanity'],
	},
	chese: {
		title: 'chese',
		link: 'https://chese.onrender.com',
		image: CheseDemo,
		isVideo: true,
		body: 'nfts!!',
		techStack: [
			'React',
			'TypeScript',
			'Tailwind',
			'Gatsby',
			'Solidity',
			'Hardhat',
			'Alchemy',
			'Infura',
			'Pinata',
		],
	},
	lahvah: {
		title: 'lahvah',
		link: 'https://lahvah.onrender.com',
		image: LahvahGif,
		isVideo: false,
		body: 'mdoels!!',
		techStack: ['React', 'NextJS', 'Tailwind', 'TypeScript'],
	},
};
