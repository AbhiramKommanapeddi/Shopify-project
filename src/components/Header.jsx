import React from 'react';
import { Search, ShoppingBag, ChevronDown, Tag } from 'lucide-react';

const Header = ({ cartCount, onCartClick }) => {
    return (
        <header className="w-full bg-white">
            {/* Top Navigation */}
            <nav className="py-5 px-4 md:px-12 flex items-center justify-between border-b border-gray-100">
                {/* Left Side: Menus */}
                <div className="hidden lg:flex items-center gap-8">
                    <div className="flex items-center gap-1 font-bold text-[13px] cursor-pointer group hover:text-[#f59e0b] transition-colors">
                        Shop Now <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
                    </div>
                    <div className="flex items-center gap-1 font-bold text-[13px] cursor-pointer group hover:text-[#f59e0b] transition-colors">
                        About Us <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
                    </div>
                    <div className="font-bold text-[13px] cursor-pointer hover:text-[#f59e0b] transition-colors">Blog</div>
                </div>

                {/* Center: Logo */}
                <div className="text-2xl md:text-3xl font-black tracking-tighter cursor-pointer absolute left-1/2 -translate-x-1/2">
                    RUGGEDBEARD<span className="text-[10px] align-top">TM</span>
                </div>

                {/* Right Side: Account/Cart */}
                <div className="flex items-center gap-2 md:gap-5">
                    <div className="hidden sm:flex items-center gap-1.5 text-[11px] font-black uppercase text-[#f59e0b] cursor-pointer group">
                        <Tag size={14} fill="currentColor" /> GET £10
                    </div>
                    <div className="hidden sm:flex items-center gap-1 font-bold text-[13px] cursor-pointer group hover:text-[#f59e0b] transition-colors">
                        Accounts <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
                    </div>
                    <div className="hidden sm:flex items-center gap-1 font-bold text-[13px] cursor-pointer group hover:text-[#f59e0b] transition-colors">
                        Help <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
                    </div>
                    <div className="flex items-center gap-3 ml-2">
                        <Search size={20} className="cursor-pointer hover:text-[#f59e0b] transition-colors stroke-[2.5px]" />
                        <div className="h-6 w-[1px] bg-gray-300 mx-2 hidden md:block"></div>
                        <div className="relative" onClick={onCartClick}>
                            <div className="bg-black p-2 rounded-full cursor-pointer hover:scale-105 transition-transform shadow-lg group">
                                <ShoppingBag size={18} className="text-white group-hover:scale-110 transition-transform" />
                            </div>
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -right-1 bg-[#f59e0b] text-black text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center border-2 border-white shadow-sm scale-110 animate-in zoom-in duration-300">
                                    {cartCount}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Announcement Bar */}
            <div className="bg-[#f59e0b] text-black py-3 text-[12px] md:text-[13px] font-semibold border-t-[2px] border-[#8b5cf6]">
                <div className="flex justify-between items-center px-4 max-w-7xl mx-auto">
                    <div className="flex items-center gap-2">
                        <span className="text-sm">🚚</span>
                        <span>Free Shipping On Orders £30 GBP +</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-sm">🇬🇧</span>
                        <span>Handmade in the UK</span>
                    </div>
                    <div className="hidden lg:flex items-center gap-2">
                        <span className="text-sm">🚚</span>
                        <span>Free Shipping On Orders £30 GBP +</span>
                    </div>
                    <div className="hidden lg:flex items-center gap-2">
                        <span className="text-sm">🇬🇧</span>
                        <span>Handmade in the UK</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
