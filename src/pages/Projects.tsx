'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';

const projects = [
	{
		title: 'DPOS Exchange',
		description: 'Real-time blockchain based distributed autonomous crypto currency exchange, on chain wallets, block explorer, payment system, order automation, mobile app',
		image: '/projects_img/shc.png', 
		tags: ["C++", "Javascript", "React.js", "Python"]
	},
	{
		title: 'Cryptocurrency Clone',
		description: 'Blockchain based digital currency project with wallet and integration tools, proof-of-stake algorithm based, project was named Shitcoin and was created for learning purposes, github profile is available',
		image: '/projects_img/shitcoin.png', 
		tags: ["C++", "C#", "Python", "Shell", "Javascript"]
	},
	{
		title: 'File Sharing Application',
		description: 'Drag and drop file sharing application for sharing any possible files over local network, files are encryped and decrypted by password',
		image: '/projects_img/files-1.png', 
		tags: ["Javascript", "Electron.js", "React.js"]
	},
	{
		title: 'Invenotry Managment Platform',
		description: 'Provides detailed information for sales, allows to effectively manage sellings',
		image: '/projects_img/colage2.png', 
		tags: ['React.js', 'Express.js', 'Electron.js', 'JavaScript']
	},
	{
		title: 'Personal Notes Application ',
		description: 'Application for explaining mathematical and programmatical definitions with real time data geathering and calculation, something similar to VScode, but simplier and automated ',
		image: '/projects_img/code-1.png', 
		tags: ['React.js', 'Electron.js']
	},
	{
		title: 'Image based encryption decryption algorithm',
		description: 'Drop the file, it randomizes most parts of file and splits them visually in blocks, each part of file is defined by blocks and colors',
		image: '/projects_img/decrypt.png', 
		tags: ['React.js', 'Electron.js' ]
	},
	{
		title: 'DB, PM2, configuration and script managment Platform',
		description: 'Every possible function that mongoDB provided with is converted to visual perspecitive for faster manual database managment',
		image: '/projects_img/vscode.png', 
		tags: ['React.js', 'Tailwind CSS', 'JavaScript', 'TypeScript']
	},
	{
		title: 'Machine-learning algorithm for analyzing news',
		description: 'Based on emotional and logical analyses, each words, letter, spelling sentiment is analysed',
		image: '/projects_img/vscode.png', 
		tags: ['React.js', 'Electron.js', 'Express.js']
	},
	{
		title: 'Vehicle bidding and sales platform',
		description: 'Auction platform for any kind selling vehicles simillar to cars and bids',
		image: '/projects_img/colage3.png', 
		tags: ['React.js', 'Electron.js', 'Express.js']
	},
	{ 
		title: 'Automated Crypto Trading Platform',
		description: 'A platform that automates cryptocurrency trading strategies in real-time, leveraging APIs and custom algorithms.', 
		image: '/projects_img/tradingview-x.png', 
		tags: ['React.js', 'Electron.js', 'Express.js']
	},
	{
		title: 'Real-Time Team Tracking Application',
		description: 'Tracks team activities and progress in real-time, providing dashboards and analytics for better collaboration, map based project.', 
		image: '/projects_img/colage4.png', 
		tags: ['React.js', 'Electron.js', 'Express.js']
	},
	{
		title: 'Self-made OAuth and 2FA System',
		description: 'A secure authentication system implementing OAuth 2.0 and two-factor authentication for enhanced account security.', 
		image: '/projects_img/vscode.png', 
		tags: ['React.js', 'Electron.js', 'Express.js']
	},
	{
		title: 'Factory Production Tracking Platform',
		description: 'Monitors factory production lines, logs outputs, and provides real-time reports for efficiency optimization.', 
		image: '/projects_img/vscode.png', 
		tags: ['React.js', 'Electron.js', 'Express.js']
	},
	{
		title: 'Instagram Bot',
		description: 'An automated Instagram bot for scheduling posts, managing interactions, automating tasks and analyzing engagement metrics.', 
		image: '/projects_img/vscode.png', 
		tags: ['React.js', 'Electron.js', 'Express.js']
	},
	{
		title: 'Bank-to-Crypto Payment System',
		description: 'Facilitates seamless transactions from bank accounts to cryptocurrency wallets with secure processing.', 
		image: '/projects_img/vscode.png', 
		tags: ['React.js', 'Electron.js', 'Express.js']
	},
	{
		title: 'COVID-19 Certificate Encoder and Decoder App',
		description: 'A tool to generate and verify COVID-19 certificates with QR codes for secure health record management.', 
		image: '/projects_img/vscode.png', 
		tags: ['React.js', 'Electron.js', 'Express.js']
	},
	{
		title: 'Find Local Photographers App',
		description: 'Connects users with local photographers, allowing booking, portfolio viewing, and direct communication.', 
		image: '/projects_img/vscode.png', 
		tags: ['React.js', 'Electron.js', 'Express.js']
	},
	{
		title: 'Crypto Sentiment Analysis Tool',
		description: 'Analyzes cryptocurrency market sentiment from news, social media, and forums to support trading decisions.', 
		image: '/projects_img/vscode.png', 
		tags: ['React.js', 'Electron.js', 'Express.js']
	}
];

const Projects = () => {
	return (
		<div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto">
			<ScrollAnimation>
				<h2 className="text-4xl font-bold mb-12 gradient-text">Projects</h2>
			</ScrollAnimation>


			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
				{projects.map((project, index) => (
					<ScrollAnimation key={project.title}>
						<div className="bg-gray-800/50 rounded-lg overflow-hidden backdrop-blur-sm">
							<img
								src={project.image}
								alt={project.title}
								className="w-full h-48 object-contain"
							/>
							<div className="p-6">
								<h3 className="text-xl font-semibold mb-2">{project.title}</h3>
								<p className="text-gray-400 mb-4">{project.description}</p>
								<div className="flex flex-wrap gap-2 mb-4">
									{project.tags.map(tag => (
										<span key={tag} className="px-2 py-1 text-sm bg-purple-500/20 rounded">
											{tag}
										</span>
									))}
								</div>
								 
							</div>
						</div>
					</ScrollAnimation>
				))}
			</div>
		</div>
	);
};

export default Projects;