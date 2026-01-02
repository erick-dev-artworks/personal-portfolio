'use client';

import { motion } from 'framer-motion';
import { ScrollAnimation } from '@/components/ScrollAnimation';
import {
    Cpu, Link, Github, Linkedin, MessageCircle, Info
} from 'lucide-react';

const IOTDevelopment = () => { 

    const socialLinks = [
            {
                icon: <Github className="w-5 h-5" />,
                label: 'GitHub',
                link: 'https://github.com/erick-dev-artworks'
            },
            {
                icon: <Linkedin className="w-5 h-5" />,
                label: 'LinkedIn',
                link: 'https://linkedin.com/in/eriks-filipovs-800844288'
            },
            {
                icon: <MessageCircle className="w-5 h-5" />,
                label: 'WhatsApp',
                link: 'https://wa.me/+37127727393'
            }
    ];  

    const plan = [
        {
            icon: <Cpu className="w-6 h-6" />,
            title: "Planning",
            description: "Before a single line of code is written, I help you define your project’s purpose, technical goals, and system requirements."
        },
        {
            icon: <Cpu className="w-6 h-6" />,
            title: "Designing",
            description: "Once the idea is clear, I design the full architecture of your IoT solution"
        },
        {
            icon: <Cpu className="w-6 h-6" />,
            title: "Development",
            description: "This is where your idea comes to life. I handle both the hardware setup and the software integration."
        }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <div className="relative overflow-hidden pt-20 pb-32">
                <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
                </div>

                <div className="relative max-w-4xl mx-auto px-4">
                    <ScrollAnimation>
                        <div className="text-center mb-12">

                            <h1 className="text-4xl md:text-6xl font-bold mt-6 mb-16 gradient-text">IoT Solutions</h1>
 

                            <p className="text-xl text-gray-400 mt-6 mb-8">
                                Connecting the Physical World with the Digital One
                                In today’s world, smart technology is everywhere — from homes and offices to factories and logistics systems. The Internet of Things (IoT) connects physical devices to the digital space, allowing them to communicate, analyze, and act automatically.
                                With the right IoT solution, you can monitor, control, and optimize your operations in real time — saving time, reducing costs, and unlocking powerful new insights.
                                I offer custom IoT development and integration services that turn your ideas into real, working systems.
                            </p>

                            <motion.a
								href="/skills"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 text-white rounded-xl font-medium hover:bg-white/20 transition-all group"
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
							>
								<Link className="w-5 h-5" />
								Suggested Tehnologies
							</motion.a>
                    <ScrollAnimation>
                        <div className="grid md:grid-cols-3 gap-6 mb-16 mt-7">
                            {plan.map((feature, index) => (
                                <motion.div
                                    key={feature.title}
                                    className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/5"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <div className="text-white/60 mb-4 flex items-center justify-center">{feature.icon}</div>
                                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                                    <p className="text-gray-400 text-sm">{feature.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </ScrollAnimation>
                         <div className="grid md:grid  gap-8 mb-12">  
                            <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-white/5">
                                <h3 className="text-xl font-semibold mb-4">Typical examples:</h3>
                                <div className="grid gap-3"> 
                                    <div className="mt-2 text-sm text-left text-gray-400">
                                        <Info className="w-4 h-4 inline mr-2 text-white/60" />
                                        Smart home or office automation systems<br/>
                                        <Info className="w-4 h-4 inline mr-2 text-white/60" />
                                        Production and logistics counters (like warehouse item trackers)<br/>
                                        <Info className="w-4 h-4 inline mr-2 text-white/60" />
                                        Environmental monitoring (temperature, humidity, CO₂ sensors)<br/>
                                        <Info className="w-4 h-4 inline mr-2 text-white/60" />
                                        Access control or security systems<br/>
                                        <Info className="w-4 h-4 inline mr-2 text-white/60" />
                                        Custom Raspberry Pi projects with touchscreen interfaces<br/>
                                    </div>
                                </div>
                            </div>
                        </div>
                             

                            <p className="text-xl text-gray-400 mt-6 mb-8">
                                Behind every great IoT system, there’s a lot more happening than what meets the eye — secure data connections, stable device communication, reliable hosting, and scalable cloud infrastructure. Each component plays a crucial role in keeping everything running smoothly.
                                A setup with well-built devices but a weak backend? The data becomes unreliable.
                                A cloud service without proper security? Sensitive information can be at risk.
                                An IoT network that’s not optimized? The system becomes slow, unstable, and frustrating to use.
                                That’s why I approach every project as a complete ecosystem — not just sensors or dashboards, but the entire foundation that keeps them connected, protected, and performing at their best.
                                If it sounds complicated, don’t worry — that’s my job. I’ll take care of the technical side so your system runs efficiently, securely, and without interruptions.
                                Curious about the cost of an IoT solution? Let’s find out!</p>
                        </div>
                    </ScrollAnimation>
 
                    <h3 className="text-4xl font-semibold mb-8 gradient-text text-center">Things that are important</h3>
 
                    <ScrollAnimation>
                        <div className="grid md:grid  gap-8 mb-12">  
                            <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-white/5">
                                <h3 className="text-xl font-semibold mb-4">Security and Stability</h3>
                                <div className="grid gap-3"> 
                                    <div className="mt-2 text-sm text-gray-400">
                                            IoT devices need to be as secure as they are smart.<br/>
                                            I implement:<br/><br/>
                                            <Info className="w-4 h-4 inline mr-2 text-white/60" />Encrypted communication (SSL/TLS, MQTT over SSL)<br/>
                                            <Info className="w-4 h-4 inline mr-2 text-white/60" />Secure API endpoints<br/>
                                            <Info className="w-4 h-4 inline mr-2 text-white/60" />Regular data backups<br/>
                                            <Info className="w-4 h-4 inline mr-2 text-white/60" />Access control and authentication layers<br/> 
                                    </div>
                                </div>
                            </div>
                        </div> 
                        <div className="grid md:grid  gap-8 mb-12">  
                            <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-white/5">
                                <h3 className="text-xl font-semibold mb-4">Analytics & Visualization</h3>
                                <div className="grid gap-3"> 
                                    <div className="mt-2 text-sm text-gray-400"> 
                                            Every smart device generates data — but data is only useful when you can understand it. I connect your system with powerful analytics dashboards that show real-time and historical data, trends, and usage patterns.<br/>
                                            You’ll always know:<br/><br/>
                                            <Info className="w-4 h-4 inline mr-2 text-white/60" />How your devices are performing<br/>
                                            <Info className="w-4 h-4 inline mr-2 text-white/60" />When maintenance is needed<br/>
                                            <Info className="w-4 h-4 inline mr-2 text-white/60" />How your system improves efficiency over time<br/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid md:grid  gap-8 mb-12">  
                            <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-white/5">
                                <h3 className="text-xl font-semibold mb-4">Maintenance & Support</h3>
                                <div className="grid gap-3"> 
                                    <div className="mt-2 text-sm text-gray-400"> 
                                            IoT systems evolve — and I’m here to support you long-term.<br/>
                                            After the project delivery, I offer continuous maintenance, updates, and remote support. Whether it’s adding new sensors, improving performance, or integrating new features, I’ll make sure your system keeps running smoothly.<br/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>

                    <h3 className="text-4xl font-semibold mb-8 gradient-text text-center">What Do i Offer ?</h3>
                    <ScrollAnimation>
                        <div className="grid md:grid  gap-8 mb-12">  
                            <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-white/5">
                                <h3 className="text-xl font-semibold mb-4">Custom IoT Development</h3>
                                <div className="grid gap-3"> 
                                    <div className="mt-2 text-sm text-gray-400">
                                        From concept to prototype to final deployment — I’ll help you build your own IoT solution tailored to your needs.<br/>
                                    </div>
                                </div>
                            </div>
                        </div> 
                        <div className="grid md:grid  gap-8 mb-12">  
                            <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-white/5">
                                <h3 className="text-xl font-semibold mb-4">Hardware Prototyping</h3>
                                <div className="grid gap-3"> 
                                    <div className="mt-2 text-sm text-gray-400"> 
                                        Assembly, wiring, testing, and firmware development for your physical devices.<br/>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid md:grid  gap-8 mb-12">  
                            <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-white/5">
                                <h3 className="text-xl font-semibold mb-4">Web & Mobile Integration</h3>
                                <div className="grid gap-3"> 
                                    <div className="mt-2 text-sm text-gray-400"> 
                                            Custom dashboards and interfaces for controlling and monitoring your IoT devices anywhere, anytime.<br/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid md:grid  gap-8 mb-12">  
                            <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-white/5">
                                <h3 className="text-xl font-semibold mb-4">Cloud Connectivity</h3>
                                <div className="grid gap-3"> 
                                    <div className="mt-2 text-sm text-gray-400"> 
                                        Setup of secure cloud databases, data synchronization, and remote access.<br/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid md:grid  gap-8 mb-12">  
                            <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-white/5">
                                <h3 className="text-xl font-semibold mb-4">Automation Systems</h3>
                                <div className="grid gap-3"> 
                                    <div className="mt-2 text-sm text-gray-400"> 
                                        Develop logic that reacts automatically to sensor inputs — turning data into intelligent actions.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>

                    <h3 className="text-4xl font-semibold mb-8 gradient-text text-center">Have a Project in Mind?</h3>
                    <h3 className="text-4xl font-semibold mb-8 gradient-text text-center">Whether you want to automate a process, visualize live data, or create your first IoT prototype — I’ll help you make it happen.</h3>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="bg-gray-800/50 p-5 sm:p-6 rounded-xl backdrop-blur-sm"
                        >
                            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Connect with Me</h3>
                            <div className="flex flex-wrap gap-3 sm:gap-4">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={social.label}
                                        href={social.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                                        className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors group flex-1 sm:flex-none justify-center sm:justify-start"
                                    >
                                        <span className="text-gray-400 group-hover:text-white transition-colors">
                                            {social.icon}
                                        </span>
                                        <span className="text-gray-400 group-hover:text-white transition-colors text-sm">
                                            {social.label}
                                        </span>
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                </div>
            </div>
        </div>
    );
};

export default IOTDevelopment;