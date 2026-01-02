'use client';

import { motion } from 'framer-motion';
import { ScrollAnimation } from '@/components/ScrollAnimation';
import {
    Cpu, Link, Github, Linkedin, MessageCircle, Info
} from 'lucide-react';

const Development = () => { 

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
            description: "Set project foundation, define goals, create roadmap"
        },
        {
            icon: <Cpu className="w-6 h-6" />,
            title: "Designing",
            description: "Create website visuals, layout, and user interface"
        },
        {
            icon: <Cpu className="w-6 h-6" />,
            title: "Development",
            description: "Bring design to life using coding and technologies"
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

                            <h1 className="text-4xl md:text-6xl font-bold mt-6 mb-16 gradient-text">Web Development</h1>

                            {/* Logo Section */}

                            <p className="text-xl text-gray-400 mt-6 mb-8">Your website is the face of your company on the Internet. It is very often the thing that gives the first impression of you and your company. So that it is not the last impression, it is very important to make sure that the visit to your website is able to maintain interest and create a pleasant atmosphere and experience from all aspects. Eye-catching and unique design, easy-to-use and easy-to-understand navigation, as well as page loading speed. If these things are not paid special attention, it is almost impossible to be competitive in today's rapidly changing and demanding Internet environment.</p>
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
                            
                             

                            <p className="text-xl text-gray-400 mt-6 mb-8">
                                Of course, we must not forget everything that happens behind the scenes – site security, strong hosting, SEO, customer analytics, the ability to edit content. These things are just as important as the ones mentioned above. One cannot work fully without the other, so the site must be strong in all aspects.
                                A website with excellent design and functionality, but poor SEO – result: low traffic.
                                A very popular website with high traffic, but with poor hosting – result: the site crashes
                                A website that is excellent in all aspects, but with poor security – result: it simply gets hacked 
                                As you can see, there are a lot of aspects that require close attention. Don’t worry if you feel confused and overwhelmed with information right now. After all, are here to advise you and make sure that your website functions and runs like a well-oiled machine – fast, secure and stable.<br/>
                                Find out how much a website costs!</p>
                        </div>
                    </ScrollAnimation>
 
                    <h3 className="text-4xl font-semibold mb-8 gradient-text text-center">What do i offer ?</h3>
 
                    <ScrollAnimation>
                        <div className="grid md:grid  gap-8 mb-12">  
                            <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-white/5">
                                <h3 className="text-xl font-semibold mb-4">UI/UX design/branding</h3>
                                <div className="grid gap-3"> 
                                    <div className="mt-2 text-sm text-gray-400">
                                        <Info className="w-4 h-4 inline mr-2 text-white/60" />
                                            Well-crafted design looks good. The best design delivers results.<br/>
                                            I will turn your ideas into amazing websites.<br/>
                                            Do you want a beautiful, customized, unique design that will reflect you and your company from the best side? Or do you want to create or renew your brand so that it is modern, unique and able to fully reflect what your company exists for? Maybe both?<br/>
                                            I'll give my best advice and will visualize your idea in the most attractive website design.<br/>
                                    </div>
                                </div>
                            </div>
                        </div> 
                        <div className="grid md:grid  gap-8 mb-12">  
                            <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-white/5">
                                <h3 className="text-xl font-semibold mb-4">Functionality</h3>
                                <div className="grid gap-3"> 
                                    <div className="mt-2 text-sm text-gray-400">
                                        <Info className="w-4 h-4 inline mr-2 text-white/60" />
                                            Websites with different purposes require different functionality. <br/>
                                            I can develop full-cycle websites and e-commerce solutions! 
                                            Contact forms and constructors of various complexity, chat with visitors, multilingualism, the ability to edit the text, images and sections of the page yourself.<br/>
                                            Whether it is a standardized landing page or a highly complex interactive, individually customized website, contact me with your wishes and ideas, and i will make sure that your website is developed to the highest standards.<br/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid md:grid  gap-8 mb-12">  
                            <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-white/5">
                                <h3 className="text-xl font-semibold mb-4">SEO</h3>
                                <div className="grid gap-3"> 
                                    <div className="mt-2 text-sm text-gray-400">
                                        <Info className="w-4 h-4 inline mr-2 text-white/60" />
                                            Your website is up and running but you have no visitors? <br/>
                                            I can also help with SEO (search engine optimization) i'll will give you advice and help your website rank as high as possible in search engine results.<br/>
                                            I will conduct keyword research and find the most suitable text so that your website appears in search engines to exactly those people who are looking for the information and services you offer.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid md:grid  gap-8 mb-12">  
                            <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-white/5">
                                <h3 className="text-xl font-semibold mb-4">Hosting</h3>
                                <div className="grid gap-3"> 
                                    <div className="mt-2 text-sm text-gray-400">
                                        <Info className="w-4 h-4 inline mr-2 text-white/60" />
                                           In order for your website to be as secure, fast, stable and able to function, even with a huge influx of visitors, it is very important to choose a hosting service that is able to provide you with a place on the most secure and powerful servers. <br/>
                                           Choose my best cost efficient hosting services.<br/>
                                           I have specially selected the strongest, best-functioning and most secure servers available to ensure not only that you have a great website, but also that it has a great home to live in!
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid md:grid  gap-8 mb-12">  
                            <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-white/5">
                                <h3 className="text-xl font-semibold mb-4">Analytics</h3>
                                <div className="grid gap-3"> 
                                    <div className="mt-2 text-sm text-gray-400">
                                        <Info className="w-4 h-4 inline mr-2 text-white/60" />
                                        Analytics are very important so that you always know the status of your page visitors and can track as accurately as possible which actions you have taken have attracted the most visitors and what improvements need to be made to increase this number.<br/>
                                        Do you want to always be up to date on how many visits your website regularly receives, from what sources they came to your website, know their location and what the entire visit process looks like? Connect your website with various analytics systems that will provide you with this information, and even more.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid md:grid  gap-8 mb-12">  
                            <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-white/5">
                                <h3 className="text-xl font-semibold mb-4">Support</h3>
                                <div className="grid gap-3"> 
                                    <div className="mt-2 text-sm text-gray-400">
                                        <Info className="w-4 h-4 inline mr-2 text-white/60" />
                                       I'm all about long-term support and cooperation with our clients, so even after the website is handed over to you, i will not disappear anywhere. <br/>
                                       Take advantage of the opportunity and join our support system, and feel safe knowing that there is a strong support by your side, always ready to quickly help you solve any problems that may ever arise with your website.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>

                    <h3 className="text-4xl font-semibold mb-8 gradient-text text-center">Have any questions ?</h3>
                    <h3 className="text-4xl font-semibold mb-8 gradient-text text-center">Contact Me</h3>

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

export default Development;