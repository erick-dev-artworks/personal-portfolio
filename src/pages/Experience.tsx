'use client';

import { Briefcase, Building2} from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';


const Experience = () => {
	return (
		<div className="min-h-screen pt-16 sm:pt-20 px-4 max-w-5xl mx-auto pb-16 sm:pb-20">
			<ScrollAnimation>
				<h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 gradient-text flex items-center gap-3">
					<Briefcase className="w-7 h-7 sm:w-8 sm:h-8" />
					Experience
				</h2>
			</ScrollAnimation>

			<div className="space-y-8 sm:space-y-12">
				<div className="group relative bg-gray-800/50 rounded-xl sm:rounded-2xl overflow-hidden backdrop-blur-sm hover:bg-gray-800/70 transition-all border border-white/5">
					<div className="grid grid-cols-1 md:grid-cols-[1fr,300px]">
						<div className="p-6 sm:p-8">
							<div className="flex items-center gap-3 mb-4 sm:mb-6">
								<div className="p-2 sm:p-3 bg-white/10 rounded-lg sm:rounded-xl group-hover:bg-white/20 transition-colors">
									<Building2 className="w-6 h-6 sm:w-7 sm:h-7" />
								</div>
								<div>
									<h3 className="text-xl sm:text-2xl font-bold mb-1">A cursory review </h3>
									<p className="text-gray-400 text-base sm:text-lg"></p>
								</div>
							</div>
							<span className="leading-relaxed">
								So far, as a programmer, my main focus has been on developing complete web architectures. 
								My goal has always been to deliver both simple and complex ideas to clients in the most efficient and streamlined way possible. 
								I have concentrated on building a unified architecture equipped with useful tools that simplify and accelerate the development process — creating everything necessary 
								to manage and scale the system effectively.
								My core focus has been on automation processes within the system’s core engine. 
								Up to this point, I have built one central project that integrates multiple platforms and tools. 
								This project relies on only two external services: one for 2FA authentication via SMS and another API endpoint for monitoring transactions. 
								The project currently includes at least 30 independently operating services across five platforms.
								Client-side performance is managed through both static and weight-based limits to optimize power distribution and, most importantly, 
								cost-efficiency — which has been a top priority in my work.
								The architecture I developed was designed to ensure that clients can access their selected services from any device with an internet connection. 
								The system supports Windows, Linux, macOS, OSX, and Android environments. It includes both free-use products and paid services that depend on server communication. 
							</span>
							<div className="flex items-center gap-3 mb-4 sm:mb-6 mt-5">
								<div className="p-2 sm:p-3 bg-white/10 rounded-lg sm:rounded-xl group-hover:bg-white/20 transition-colors">
									<Building2 className="w-6 h-6 sm:w-7 sm:h-7" />
								</div>
								<div>
									<h3 className="text-xl sm:text-2xl font-bold mb-1">Tasks I can perform</h3>
									<p className="text-gray-400 text-base sm:text-lg"></p>
								</div>
							</div>
							<span className="leading-relaxed">
							* Development of web interfaces<br/>
							* Building inter-system support and integration layers<br/>
							* Creation of internal tools and utilities<br/>
							* Setup of private communication servers<br/>
							* Database optimization, configuration, and management<br/>
							* Design and automation of instance communication networks<br/>
							* Code optimization and code-quality maintenance<br/>
							* Development of work schedules and project timelines<br/>
							* Integration of technical and client security functions<br/>
							* Automation of setup, deployment, and maintenance processes<br/>
							* Calculation and forecasting of costs and performance capacity<br/>
							* Product architecture design and implementation<br/>
							* Testing and quality assurance<br/>
							* Installation and maintenance of cloud management panels<br/>
							* Creation of full product documentation, including user instructions, terms, client and company rights, licensing documents (if applicable), legal limitations, and tax-related submission or reimbursement forms<br/>
							* End-to-end project completion and delivery<br/>
							</span>
						</div>
					</div>
				</div>
				
			</div>
		</div>
	);
};

export default Experience;