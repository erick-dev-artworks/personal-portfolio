'use client';

import { motion } from 'framer-motion';
import {
	Code2, Layout, Server, Database, MessageSquare, Lightbulb, Users, Brain,
	Cloud, Terminal, Wrench,
} from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';
import {
	CppLogo, PythonLogo, JavaScriptLogo, HTML5Logo,
	CSSLogo, ReactLogo, TypeScriptLogo, NodeLogo, MySQLLogo,
	MongoDBLogo, VSCodeLogo, GitLogo, TailwindLogo, ShadCNLogo, NextjsLogo,
	VirtualBoxLogo, VercelLogo, BashLogo
} from '@/components/TechLogos';

const skills = [
	{
		category: 'Programming Languages',
		icon: <Code2 className="w-6 h-6" />,
		items1: [
			{ name: 'C++', icon: <CppLogo /> },
			{ name: 'Python', icon: <PythonLogo /> }
		],
		items2: [
			{ name: 'JavaScript', icon: <JavaScriptLogo /> },
			{ name: 'TypeScript', icon: <TypeScriptLogo /> },
			{ name: 'Bash', icon: <BashLogo /> }
		]
	}, 
	{
		category: 'Databases & Cloud Storage',
		icon: <Database className="w-6 h-6" />,
		items1: [
			{ name: 'Cloudinary', icon: <Cloud className="w-4 h-4" /> }
		],
		items2: [
			{ name: 'MySQL', icon: <MySQLLogo /> },
			{ name: 'MongoDB', icon: <MongoDBLogo /> }, 
			{ name: 'NoSQL', icon: <Database className="w-4 h-4" /> }
		]
	}, 
	{
		category: 'Back-End Development',
		icon: <Server className="w-6 h-6" />,
		items1: [
			{ name: 'Next.js', icon: <NextjsLogo /> } 
		],
		items2: [
			{ name: 'React.js', icon: <ReactLogo /> },
			{ name: 'Node.js', icon: <NodeLogo /> },
			{ name: 'Express.js', icon: <NextjsLogo /> } 
		]
	},
	{
		category: 'Front-End Development',
		icon: <Layout className="w-6 h-6" />,
		items1: [
			{ name: 'Tailwind', icon: <TailwindLogo /> },
			{ name: 'ShadCN', icon: <ShadCNLogo /> },
			{ name: 'HTML5', icon: <HTML5Logo /> },
			{ name: 'CSS3', icon: <CSSLogo /> }
		],
		items2: [
			{ name: 'Antd', icon: <TailwindLogo /> },
			{ name: 'AntV', icon: <TailwindLogo /> },
			{ name: 'Antd X6', icon: <TailwindLogo /> },
			{ name: 'Bootstrap', icon: <ShadCNLogo /> },
			{ name: 'Material-UI', icon: <ShadCNLogo /> },
		]
	}, 
	{
		category: 'Tools & Platforms',
		icon: <Wrench className="w-6 h-6" />,
		items1: [
			{ name: 'Workbench', icon: <MySQLLogo /> },
			{ name: 'Compass', icon: <MongoDBLogo /> },
		],
		items2: [
			{ name: 'VS Code', icon: <VSCodeLogo /> }, 
			{ name: 'VirtualBox', icon: <VirtualBoxLogo /> },
			{ name: 'Npm', icon: <VirtualBoxLogo /> },
			{ name: 'CodeSandbox', icon: <MongoDBLogo /> },
			{ name: 'Codepen', icon: <MongoDBLogo /> },
		]
	},
	{
		category: 'Operating Systems',
		icon: <Terminal className="w-6 h-6" />,
		items1: [
			{ name: 'Kali Linux', icon: <CppLogo /> } 
		],
		items2: [
			{ name: 'Windows', icon: <Terminal className="w-4 h-4" /> },
			{ name: 'Ubuntu', icon: <Terminal className="w-4 h-4" /> },
			{ name: 'Linux', icon: <Terminal className="w-4 h-4" /> }
		]
	}, 
	{
		category: 'Version Control',
		icon: <GitLogo />,
		items1: [
			{ name: 'Vercel', icon: <VercelLogo /> } 

		],
		items2: [
			{ name: 'Git', icon: <GitLogo /> },
			{ name: 'Bitbucket', icon: <GitLogo /> }
		]
	},
	{
		category: 'Payment Systems',
		icon: <GitLogo />,
		items1: [
			{ name: 'Visa API', icon: <VercelLogo /> },
			{ name: 'Mastercard API', icon: <VercelLogo /> } 


		],
		items2: [
			{ name: 'Binance Pay', icon: <GitLogo /> },
			{ name: 'Crypto', icon: <GitLogo /> }
		]
	},
	{
		category: 'Network Protocols',
		icon: <Brain className="w-6 h-6" />,
		items1: [
			{ name: 'JSON-RPC', icon: <CppLogo /> } 
		],
		items2: [
			{ name: 'Websockets', icon: <Users className="w-4 h-4" /> },
			{ name: 'REST-API', icon: <Users className="w-4 h-4" /> } 
		]
	},
	{
		category: 'Testing Tools',
		icon: <Brain className="w-6 h-6" />,
		items1: [
			{ name: 'Cypress', icon: <CppLogo /> },
			{ name: 'Playwright', icon: <PythonLogo /> } 
		],
		items2: [
			{ name: 'Selenium', icon: <Users className="w-4 h-4" /> },
			{ name: 'Postman', icon: <Users className="w-4 h-4" /> },
			{ name: 'Bash', icon: <Wrench className="w-4 h-4" /> },
			{ name: 'Node.js', icon: <Lightbulb className="w-4 h-4" /> } 
		]
	},
	{
		category: 'Cloud Platforms',
		icon: <Brain className="w-6 h-6" />,
		items1: [
			{ name: 'AWS', icon: <CppLogo /> },
			{ name: 'Ngrok', icon: <CppLogo /> } 
		],
		items2: [
			{ name: 'Google', icon: <Users className="w-4 h-4" /> },
			{ name: 'Vultr', icon: <Users className="w-4 h-4" /> },
			{ name: 'IBM Cloud', icon: <Wrench className="w-4 h-4" /> } 
		]
	},
	{
		category: 'Network Protocols',
		icon: <Brain className="w-6 h-6" />,
		items1: [
			{ name: 'JSON-RPC', icon: <CppLogo /> } 
		],
		items2: [
			{ name: 'Websockets', icon: <Users className="w-4 h-4" /> },
			{ name: 'REST-API', icon: <Users className="w-4 h-4" /> } 
		]
	},
	{
		category: 'Website Defence',
		icon: <Brain className="w-6 h-6" />,
		items1: [
			{ name: 'SQL Injection', icon: <CppLogo /> },
			{ name: 'XSS', icon: <CppLogo /> },

		],
		items2: [
			{ name: 'DOS', icon: <Users className="w-4 h-4" /> },
			{ name: 'DDOS', icon: <Users className="w-4 h-4" /> },
			{ name: 'Phishing', icon: <Users className="w-4 h-4" /> },
			{ name: 'Bruteforce', icon: <Users className="w-4 h-4" /> },
			{ name: 'Tailgaiting', icon: <Users className="w-4 h-4" /> },
			{ name: 'Malware', icon: <Users className="w-4 h-4" /> }

		]
	}
];

const Skills = () => {
	return (
		<div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
			<ScrollAnimation>
				<h2 className="text-4xl font-bold mb-4 gradient-text">Technical Skills</h2>
			</ScrollAnimation>

			<ScrollAnimation>
				<p className="text-gray-400 mb-12 max-w-2xl">
					A comprehensive overview of my technical expertise and tools I work with
				</p>
			</ScrollAnimation>

			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
				{skills.map((skillGroup, index) => (
					<ScrollAnimation key={skillGroup.category}>
						<div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition-all border border-white/5">
							<div className="flex items-center space-x-3 mb-6">
								<div className="p-2 bg-white/10 rounded-lg">
									{skillGroup.icon}
								</div>
								<h3 className="text-lg font-semibold">{skillGroup.category}</h3>
							</div>
							<p className="text-gray-400 mb-4 max-w-2xl">
							Minimum Experience
							</p>
							<div className="grid grid-cols-2 gap-4">
								{skillGroup.items1.map((skill, skillIndex) => (
									<div
										key={skill.name}
										className="bg-gray-700/50 px-4 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-white/10 transition-all group"
									>
										<div className="text-gray-400 group-hover:text-white transition-colors">
											{skill.icon}
										</div>
										<span className="text-gray-400 group-hover:text-white transition-colors text-sm">
											{skill.name}
										</span>
									</div>
								))}
							</div>
							<p className="text-gray-400 mb-4 max-w-2xl mt-12">
							Most Experience
							</p>
							<div className="grid grid-cols-2 gap-4">
								{skillGroup.items2.map((skill, skillIndex) => (
									<div
										key={skill.name}
										className="bg-gray-700/50 px-4 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-white/10 transition-all group"
									>
										<div className="text-gray-400 group-hover:text-white transition-colors">
											{skill.icon}
										</div>
										<span className="text-gray-400 group-hover:text-white transition-colors text-sm">
											{skill.name}
										</span>
									</div>
								))}
							</div>
						</div>
					</ScrollAnimation>
				))}
			</div>
		</div>
	);
};

export default Skills;