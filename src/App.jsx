import React, { useState, useEffect } from 'react';
import { ChevronRight, Zap, Cpu, Code, ArrowRight, Play, CheckCircle, Star, Users, Award, Menu, X } from 'lucide-react';

export default function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
            {/* Global Background Elements */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-10 left-10 w-96 h-96 bg-pink-500/8 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-40 right-20 w-80 h-80 bg-pink-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-96 left-1/4 w-64 h-64 bg-pink-600/6 rounded-full blur-3xl animate-pulse delay-2000"></div>
                <div className="absolute bottom-40 left-10 w-72 h-72 bg-pink-500/8 rounded-full blur-3xl animate-pulse delay-500"></div>
                <div className="absolute bottom-20 right-1/3 w-88 h-88 bg-pink-400/10 rounded-full blur-3xl animate-pulse delay-1500"></div>
                <div className="absolute top-1/3 right-10 w-56 h-56 bg-pink-300/12 rounded-full blur-3xl animate-pulse delay-3000"></div>
                <div className="absolute bottom-1/3 left-1/2 w-40 h-40 bg-pink-500/15 rounded-full blur-3xl animate-pulse delay-2500"></div>
            </div>

            {/* Navigation */}
            <nav className={`fixed w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-black/90 backdrop-blur-xl border-b border-gray-800' : 'bg-transparent'}`}>
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                                <Zap className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                Zippity AI
                            </span>
                        </div>

                        <div className="hidden md:flex items-center space-x-8">
                            <a href="#products" className="text-gray-300 hover:text-white transition-colors">Products</a>
                            <a href="#solutions" className="text-gray-300 hover:text-white transition-colors">Solutions</a>
                            <a href="#company" className="text-gray-300 hover:text-white transition-colors">Company</a>
                            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
                            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                                Get Started
                            </button>
                        </div>

                        <button
                            className="md:hidden text-white"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-gray-800">
                        <div className="px-6 py-4 space-y-4">
                            <a href="#products" className="block text-gray-300 hover:text-white transition-colors">Products</a>
                            <a href="#solutions" className="block text-gray-300 hover:text-white transition-colors">Solutions</a>
                            <a href="#company" className="block text-gray-300 hover:text-white transition-colors">Company</a>
                            <a href="#contact" className="block text-gray-300 hover:text-white transition-colors">Contact</a>
                            <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                                Get Started
                            </button>
                        </div>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Enhanced Animated Background */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20"></div>
                    <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
                    <div className="absolute top-32 right-1/3 w-64 h-64 bg-pink-400/12 rounded-full blur-3xl animate-pulse delay-1500"></div>
                    <div className="absolute bottom-32 left-1/4 w-80 h-80 bg-pink-600/8 rounded-full blur-3xl animate-pulse delay-2000"></div>
                    <div className="absolute top-3/4 right-10 w-48 h-48 bg-pink-500/18 rounded-full blur-3xl animate-pulse delay-2500"></div>
                </div>

                <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
                    <div className="mb-8 inline-flex items-center space-x-2 bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-full px-6 py-3">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span className="text-sm text-gray-300">Trusted by 500+ AI companies worldwide</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
                        <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                            Lightning-Fast
                        </span>
                        <br />
                        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                            AI Infrastructure
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                        Accelerate your machine learning workflows with our cutting-edge hardware and software solutions.
                        Built for speed, designed for scale.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                        <button className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                            <span>Start Building</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="group flex items-center space-x-2 text-white border border-gray-600 px-8 py-4 rounded-full text-lg font-semibold hover:border-gray-400 transition-all duration-300">
                            <Play className="w-5 h-5" />
                            <span>Watch Demo</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 border-y border-gray-800 relative">
                {/* Additional background elements for stats section */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
                    <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-pink-400/8 rounded-full blur-2xl animate-pulse delay-2000"></div>
                </div>
                <div className="max-w-7xl mx-auto px-6 relative">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                                10x
                            </div>
                            <div className="text-gray-400">Faster Training</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                                500+
                            </div>
                            <div className="text-gray-400">Enterprise Clients</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                                99.9%
                            </div>
                            <div className="text-gray-400">Uptime SLA</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                                50M+
                            </div>
                            <div className="text-gray-400">Models Deployed</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Products Section */}
            <section id="products" className="py-32 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent"></div>
                {/* Enhanced background elements for products section */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-20 left-10 w-56 h-56 bg-pink-500/12 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute top-1/2 right-20 w-72 h-72 bg-pink-400/8 rounded-full blur-3xl animate-pulse delay-1500"></div>
                    <div className="absolute bottom-20 left-1/3 w-48 h-48 bg-pink-600/15 rounded-full blur-3xl animate-pulse delay-2500"></div>
                    <div className="absolute top-1/3 left-1/2 w-36 h-36 bg-pink-300/18 rounded-full blur-2xl animate-pulse delay-3000"></div>
                </div>
                <div className="max-w-7xl mx-auto px-6 relative">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl md:text-6xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                Our Products
                            </span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Complete AI infrastructure stack designed for maximum performance and efficiency
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="group bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105">
                            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                                <Cpu className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-3xl font-bold mb-4">ZippityChip Pro</h3>
                            <p className="text-gray-400 text-lg mb-6">
                                Custom AI accelerator chips delivering unprecedented performance for deep learning workloads.
                                Built with our proprietary neural processing architecture.
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center space-x-3">
                                    <CheckCircle className="w-5 h-5 text-green-400" />
                                    <span className="text-gray-300">1000+ TOPS performance</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <CheckCircle className="w-5 h-5 text-green-400" />
                                    <span className="text-gray-300">Ultra-low power consumption</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <CheckCircle className="w-5 h-5 text-green-400" />
                                    <span className="text-gray-300">Seamless cloud integration</span>
                                </li>
                            </ul>
                            <button className="group/btn flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors">
                                <span>Learn More</span>
                                <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                            </button>
                        </div>

                        <div className="group bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-3xl p-8 hover:border-pink-500/50 transition-all duration-500 hover:transform hover:scale-105">
                            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                                <Code className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-3xl font-bold mb-4">ZippityOS</h3>
                            <p className="text-gray-400 text-lg mb-6">
                                Intelligent software platform that optimizes model training and inference across our hardware ecosystem.
                                Auto-scaling and resource management included.
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center space-x-3">
                                    <CheckCircle className="w-5 h-5 text-green-400" />
                                    <span className="text-gray-300">Auto-optimization algorithms</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <CheckCircle className="w-5 h-5 text-green-400" />
                                    <span className="text-gray-300">Multi-framework support</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <CheckCircle className="w-5 h-5 text-green-400" />
                                    <span className="text-gray-300">Real-time monitoring</span>
                                </li>
                            </ul>
                            <button className="group/btn flex items-center space-x-2 text-pink-400 hover:text-pink-300 transition-colors">
                                <span>Learn More</span>
                                <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-32 bg-gradient-to-r from-gray-900/50 to-gray-800/50 relative">
                {/* Enhanced background elements for testimonials */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-10 right-10 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-10 left-20 w-80 h-80 bg-pink-400/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 left-10 w-44 h-44 bg-pink-600/12 rounded-full blur-2xl animate-pulse delay-2000"></div>
                    <div className="absolute top-1/3 right-1/3 w-52 h-52 bg-pink-300/15 rounded-full blur-3xl animate-pulse delay-3000"></div>
                </div>
                <div className="max-w-7xl mx-auto px-6 relative">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                Trusted by Leaders
                            </span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
                            <div className="flex items-center space-x-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                ))}
                            </div>
                            <p className="text-gray-300 mb-6">
                                "Zippity's hardware reduced our training time by 10x. The performance gains are incredible."
                            </p>
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                                    <Users className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <div className="font-semibold">Sarah Chen</div>
                                    <div className="text-sm text-gray-400">CTO, TechCorp</div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
                            <div className="flex items-center space-x-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                ))}
                            </div>
                            <p className="text-gray-300 mb-6">
                                "The software platform is intuitive and powerful. Our ML team is more productive than ever."
                            </p>
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                                    <Award className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <div className="font-semibold">Marcus Rodriguez</div>
                                    <div className="text-sm text-gray-400">Head of AI, DataFlow</div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
                            <div className="flex items-center space-x-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                ))}
                            </div>
                            <p className="text-gray-300 mb-6">
                                "Best investment we've made in AI infrastructure. The ROI was immediate and substantial."
                            </p>
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                                    <Zap className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <div className="font-semibold">Emily Watson</div>
                                    <div className="text-sm text-gray-400">VP Engineering, NeuralNet</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-pink-900/20"></div>
                {/* Enhanced background elements for CTA section */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-20 left-1/4 w-60 h-60 bg-pink-500/14 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-1/4 w-88 h-88 bg-pink-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 left-10 w-40 h-40 bg-pink-600/16 rounded-full blur-2xl animate-pulse delay-2000"></div>
                    <div className="absolute bottom-1/3 right-10 w-56 h-56 bg-pink-300/12 rounded-full blur-3xl animate-pulse delay-1500"></div>
                </div>
                <div className="max-w-4xl mx-auto text-center px-6 relative">
                    <h2 className="text-5xl md:text-6xl font-bold mb-8">
                        <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                            Ready to Accelerate?
                        </span>
                    </h2>
                    <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                        Join hundreds of companies already using Zippity AI to power their AI initiatives.
                        Get started today with our free trial.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                        <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                            Start Free Trial
                        </button>
                        <button className="text-white border border-gray-600 px-10 py-4 rounded-full text-lg font-semibold hover:border-gray-400 transition-all duration-300">
                            Schedule Demo
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-gray-800 py-16 relative">
                {/* Background elements for footer */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-20 w-32 h-32 bg-pink-500/8 rounded-full blur-2xl animate-pulse"></div>
                    <div className="absolute bottom-0 right-20 w-44 h-44 bg-pink-400/6 rounded-full blur-2xl animate-pulse delay-1000"></div>
                </div>
                <div className="max-w-7xl mx-auto px-6 relative">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div>
                            <div className="flex items-center space-x-2 mb-6">
                                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                                    <Zap className="w-5 h-5 text-white" />
                                </div>
                                <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                    Zippity AI
                                </span>
                            </div>
                            <p className="text-gray-400 mb-6">
                                Accelerating the future of artificial intelligence with cutting-edge hardware and software solutions.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4">Products</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">ZippityChip Pro</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">ZippityOS</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Cloud Platform</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Developer Tools</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4">Company</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">News</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Research</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4">Support</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 pt-8 mt-12">
                        <div className="flex flex-col md:flex-row items-center justify-between">
                            <p className="text-gray-400 text-sm">
                                © 2025 Zippity AI. All rights reserved.
                            </p>
                            <div className="flex items-center space-x-6 mt-4 md:mt-0">
                                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Security</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
