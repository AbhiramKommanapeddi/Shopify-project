import React, { useState } from 'react';
import socialIconsImg from '../assets/social-icons.png';

const Footer = () => {
    const [openFaq, setOpenFaq] = useState(0);

    const faqs = [
        { q: "How do I start a beard care routine?", a: "Start with our Beard Wash to clean and refresh, follow with Beard Oil to hydrate and nourish, and finish with Beard Balm to lock in moisture and tame your beard." },
        { q: "What's the difference between beard oil and beard balm?", a: "Beard oil is for hydration and skin care, while balm provides hold and styling." },
        { q: "How often should I use beard oil?", a: "Daily use is recommended for best results." },
        { q: "Are your products safe for sensitive skin?", a: "Yes, our natural ingredients are gentle on all skin types." },
    ];

    return (
        <footer className="bg-white py-20 border-t border-gray-50">
            <div className="container mx-auto px-4 max-w-5xl space-y-16">
                {/* FAQ */}
                <div className="space-y-12">
                    <h2 className="text-4xl md:text-5xl font-black italic text-center">Frequently Asked Questions</h2>
                    <div className="space-y-2">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="border-b border-gray-100 last:border-none">
                                <button
                                    onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                                    className="w-full py-6 flex items-center justify-between text-left group"
                                >
                                    <span className={`font-bold text-lg md:text-xl transition-colors ${openFaq === idx ? 'text-black' : 'text-gray-900 group-hover:text-[#f59e0b]'}`}>{faq.q}</span>
                                    <span className="text-2xl font-light text-gray-400">{openFaq === idx ? '−' : '+'}</span>
                                </button>
                                {openFaq === idx && (
                                    <div className="pb-8 overflow-hidden animate-in fade-in slide-in-from-top-4 duration-300">
                                        <p className="text-gray-600 leading-relaxed max-w-2xl">{faq.a}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <hr className="border-gray-100" />

                {/* Newsletter & Links */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 pt-8">
                    <div className="space-y-8">
                        <h2 className="text-4xl font-black italic leading-tight">Join the tribe and get 10% off</h2>
                        <p className="text-gray-600">Receive a special offer against your first order and be the first to know about the latest launches and exclusive collections.</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <input
                                type="email"
                                placeholder="Enter Your Email"
                                className="flex-1 px-8 py-4 bg-white border border-gray-200 rounded-full focus:outline-none focus:border-black transition-colors"
                            />
                            <button className="bg-black text-white px-10 py-4 rounded-full font-bold hover:opacity-90 transition-opacity">Get Offer</button>
                        </div>
                        <div className="flex gap-4">
                            <img src={socialIconsImg} alt="Social Media" className="h-8 w-auto grayscale opacity-80" />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                        <div className="space-y-4 text-sm">
                            <h4 className="font-bold uppercase tracking-widest text-[10px] md:text-xs">Shop Now</h4>
                            <ul className="space-y-2 text-gray-500 font-medium">
                                <li className="hover:text-black cursor-pointer">Beard Oil</li>
                                <li className="hover:text-black cursor-pointer">Beard Balm</li>
                                <li className="hover:text-black cursor-pointer">Beard Soap Bars</li>
                                <li className="hover:text-black cursor-pointer">Beard Bundles</li>
                                <li className="hover:text-black cursor-pointer">Beard Comb</li>
                            </ul>
                        </div>
                        <div className="space-y-4 text-sm">
                            <h4 className="font-bold uppercase tracking-widest text-[10px] md:text-xs">Useful Links</h4>
                            <ul className="space-y-2 text-gray-500 font-medium">
                                <li className="hover:text-black cursor-pointer">Get in touch</li>
                                <li className="hover:text-black cursor-pointer">Shipping & Returns</li>
                                <li className="hover:text-black cursor-pointer">FAQs</li>
                            </ul>
                        </div>
                        <div className="space-y-4 text-sm">
                            <h4 className="font-bold uppercase tracking-widest text-[10px] md:text-xs">Policies</h4>
                            <ul className="space-y-2 text-gray-500 font-medium">
                                <li className="hover:text-black cursor-pointer">Privacy Policy</li>
                                <li className="hover:text-black cursor-pointer">Terms & Conditions</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 mt-20 text-center border-t border-gray-50 pt-10">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">© 2025, The Rugged Beard Co.</p>
            </div>
        </footer>
    );
};

export default Footer;
