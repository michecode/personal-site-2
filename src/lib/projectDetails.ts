import CheseDemo from './images/chese-demo.mp4';
import LahvahGif from './images/lahvahscreencap.gif';
import AltoGif from './images/altov2screencap.gif';

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
		that I have become much more experienced. I chose to use this as an opportunity to learn Svelte and Astro, in addition to  
		my usual favorites, Tailwind and Typescript. When I finally revisited it, I realized how poorly I constructed the site the 
		first time. I spent a lot of time grappling with a new design and framework but now that I'm up to speed I'm faster than I 
		was before. Although I'm still working on this site I already love where it is and I am so excited to finish building and 
		start filling out the database how I imagined it in the first place.
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
				name: 'Tailwind',
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
		body: `My NFT marketplace dApp. I created this as my first project in Web3 and I'm quite proud of it. I kept the front end 
		simple because my major focus was on learning the back end. Working with Web3, you must completely rethink how you design 
		your sites and trying to cram so many new ways of thinking into my brain made this one of my more challenging sites to build at 
		the time. The first hurdle was learning Solidity, Ethereum's native smart contract langauge. It's similar to JavaScript 
		syntactically, however it operates more akin to lower level languages like C. It took me a while to scavenge the web to find 
		any learning materials at the time of writing the contracts, it took a lot of trial and error and diving into odd 
		forums across the internet. Once I conquered the back end, I needed to interface with it using a package called "ethers", this was 
		my second largest challenge. Getting to know how to use ABIs, BigNumbers, and other Ethereum paradigms really slowed me down on 
		this portion but I was able to get in the groove. The rest of the site was the fun part: building out the UI, incorporating 
		API sources like Alchemy, and setting up IPFS integration for NFT minting was trivial compared to learning the earlier tech. 
		`,
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
		body: `One of my simpler projects :) This was primarily an experiment into learning some tech that I was eyeing. Tailwind, 
		TypeScript, and NextJS. My primary focus for this was getting the basics of NextJS and using Tailwind to create a website that 
		would have amazing responsive design. So I took an old UI mockup that I had created and used it as a lens to explore the
		aforementioned tech. 
		`,
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
