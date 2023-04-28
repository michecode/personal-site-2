import CheseDemo from './images/chese-demo.gif';
import LahvahGif from './images/lahvahscreencap.gif';
import AltoGif from './images/altov2screencap.gif';
import PufferGif from './images/puffer-v0.11.gif';

export const projects = {
	alto: {
		title: 'alto',
		link: 'https://alto.earth',
		image: AltoGif,
		body: `Alto was my original inspiration to pursue web development. When I started to expand my indoor collection of plants 
		I had so many different varieties that I struggled to keep track of their care. I decided a project on houseplants would be 
		my aim. My goals were to simplify the wealth of information on plants and to make the basics of plant care easily accessible 
		with just the facts. It has become one of my favorite projects and I love the user flow and design. I was able to get back 
		in touch with my illustration skills and add my own graphics as I progressed with development. Since, I have become distracted 
		by my job at Charged Particles and ran out of time to build out the database how I originally planned. Recently though, I 
		rekindled the inspiration and decided to redesign the UI and basics of Alto from the ground up with an entirely new tech 
		stack now that I have learned so much from my work experience. I also chose to use this project as an opportunity to learn 
		Svelte and SvelteKit (previously Astro), in addition to using my usual favorites, Tailwind and Typescript. Although I'm still working on this site I 
		already love where it is headed and I am so excited to finish building and start filling out the database how I imagined it 
		in the first place.
		`,
		techStack: [
			{
				name: 'Svelte',
				logoKey: 'svelteLogo',
			},
			{
				name: 'SvelteKit',
				logoKey: 'svelteLogo',
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
		body: `This is my NFT marketplace dApp. I created this as my first project in Web3 and I'm quite proud of it. I kept the front 
		end simple because my major focus was on learning the back end. Working with Web3, you must completely rethink how you design 
		websites and this was a new way of thinking for me. The first hurdle was learning Solidity, Ethereum's native smart contract 
		language. It's similar to JavaScript syntactically, however, it operates more akin to lower-level languages like C. It took 
		me a while to scavenge the web to find any learning materials at the time of writing the contracts, it took a lot of trial 
		and error, and diving into odd forums across the internet. Once I conquered the back end, I needed to interface with it using 
		a package called "ethers", this was my second largest challenge. Getting to know how to use ABIs, BigNumbers, and other 
		Ethereum paradigms really slowed me down on this portion but I was able to get in the groove. The rest of the site was the 
		fun part: building out the UI, incorporating API sources like Alchemy, and setting up IPFS integration for NFT minting was 
		trivial compared to learning the earlier tech.
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
	puffer: {
		title: 'puffer',
		link: 'https://puffer-bzj.pages.dev',
		image: PufferGif,
		body: `My first project into generative art / creative coding! I was inspired to implement the "generalized smoking" algorithm
		from a youtube video and set off to learn something completely new. P5.js admittedly took me a while wrap my ahead around, I
		spent days trying to optimize where really I was limited by the frame rate. Although I lost some days, I learned about
		many topics from performance profiling to new data structures. At first, I developed my own algorithm to search through the RGB
		colorspace, which I was never really able to benchmark fully, instead I opted early on to switch to using a K-D Trees to further
		speed up my color sampling. I was able to get the generation of a 512x512 piece down from 2 hours to just a couple seconds and 
		now I'm progressing towards adding more features, a new sampling method, and image restructuring.
		`,
		techStack: [
			{
				name: 'Svelte',
				logoKey: 'svelteLogo',
			},
			{
				name: 'P5.js',
				logoKey: 'package',
			},
			{
				name: 'Tailwind',
				logoKey: 'tailwindLogo',
			},
		],
	},
};
