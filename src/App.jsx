import React, { useState } from 'react';
import Header from './components/Header';
import Features from './components/Features';
import Footer from './components/Footer';
import { Star, Check, ChevronRight, Minus, Plus, ChevronDown, ArrowLeft, ShoppingBag } from 'lucide-react';

const ProductPage = () => {
    const [selectedPackage, setSelectedPackage] = useState(0); // 0, 1, 2
    const [isSubscription, setIsSubscription] = useState(true);
    const [frequency, setFrequency] = useState(2); // 1, 2, 3 months
    const [activeTab, setActiveTab] = useState('benefits'); // ingredients, benefits
    const [quantity, setQuantity] = useState(1);
    const [step, setStep] = useState(1);
    const [selectedScent, setSelectedScent] = useState(0);
    const [cart, setCart] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const addToCart = () => {
        const product = {
            id: Date.now(),
            name: "Roots Beard Oil",
            scent: scents[selectedScent].name,
            package: packages[selectedPackage].label,
            price: isSubscription ? packages[selectedPackage].price : packages[selectedPackage].oneTimePrice,
            isSubscription,
            frequency: isSubscription ? frequency : null,
            quantity: 1
        };
        setCart([...cart, product]);
        setIsCartOpen(true);
    };

    const packages = [
        { id: 0, label: '1 Oil: 100ML', price: '26.34', oneTimePrice: '30.99', discount: '15' },
        { id: 1, label: '2 Oil: 200ML', price: '23.24', oneTimePrice: '28.99', discount: '25', popular: true },
        { id: 2, label: '3 Oil: 300ML', price: '21.69', oneTimePrice: '26.99', discount: '30', bestValue: true },
    ];

    const scents = [
        { id: 0, name: 'Sweet Harmony Hollow', description: 'Woody & Sweet Blend', icon: '🪵' },
        { id: 1, name: 'Citrus Wilderness Whisper', description: 'Fresh & Zesty Citrus', icon: '🍊' },
        { id: 2, name: 'Fresh Highlander Haven', description: 'Cool Pine & Mountain Air', icon: '🌲' },
    ];

    return (
        <div className="min-h-screen bg-white selection:bg-orange-100 selection:text-orange-900">
            <Header cartCount={cart.length} onCartClick={() => setIsCartOpen(true)} />

            <main className="container max-w-7xl mx-auto px-4 pt-8 pb-12 md:pt-12 md:pb-20">
                {/* Breadcrumbs & Badge Row */}
                <div className="flex items-center justify-between mb-8 md:mb-12 px-4">
                    <div className="flex items-center gap-1.5 md:gap-3 text-[13px] md:text-[14px] font-medium text-gray-500">
                        <span>Home</span> <span className="text-gray-300 mx-0.5">&gt;</span> <span>All products</span> <span className="text-gray-300 mx-0.5">&gt;</span> <span className="text-black font-bold">Roots Beard Oil</span>
                    </div>
                    <div>
                        <span className="bg-[#f59e0b] text-black px-4 py-1.5 rounded-lg text-[11px] font-black uppercase shadow-sm">Best Seller</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Left Column: Image Gallery */}
                    <div className="space-y-6">
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="hidden md:flex flex-col gap-3 w-20 shrink-0">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className={`aspect-square bg-gray-50 rounded-xl overflow-hidden cursor-pointer border-2 transition-all ${i === 1 ? 'border-orange-500' : 'border-transparent hover:border-orange-200'}`}>
                                        <img src={`/assets/product-gallery.png`} alt="product thumbnail" className="w-full h-full object-cover origin-left" style={{ objectPosition: i === 1 ? '0% 0%' : i === 2 ? '0% 25%' : i === 3 ? '0% 50%' : '0% 75%' }} />
                                    </div>
                                ))}
                                <div className="flex justify-center mt-2 group cursor-pointer">
                                    <ChevronDown size={20} className="text-gray-300 group-hover:text-black transition-colors" />
                                </div>
                            </div>

                            <div className="flex-1 rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden relative shadow-2xl bg-[#f59e0b] border-4 border-white">
                                <img src="/assets/product-gallery.png" alt="Roots Beard Oil Full Gallery" className="w-full h-full object-contain" />
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Product Details */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black italic uppercase leading-[0.85] tracking-tight">Roots Beard Oil - 100ML</h1>
                            <div className="flex items-center gap-4 pt-1">
                                <div className="flex text-[#f59e0b]">
                                    {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={18} fill="currentColor" stroke="none" />)}
                                </div>
                                <span className="text-sm font-bold underline cursor-pointer hover:text-[#f59e0b] transition-colors">450 reviews</span>
                                <span className="text-sm text-gray-400 underline cursor-pointer hover:text-black transition-colors">Read Reviews</span>
                            </div>
                        </div>

                        <p className="text-gray-500 text-lg leading-relaxed font-medium max-w-xl">
                            Moisturizing Beard Oil deeply hydrates facial hair & the skin beneath reducing dryness, itchiness & flakiness.
                        </p>

                        <hr className="border-gray-100" />

                        {/* Why It Works Section */}
                        <div className="space-y-4">
                            <h3 className="font-black italic text-2xl uppercase tracking-tighter">WHY IT WORKS:</h3>
                            <div className="border border-gray-100 rounded-[2rem] overflow-hidden bg-white shadow-sm">
                                <div className="flex border-b border-gray-100 bg-black">
                                    <button
                                        onClick={() => setActiveTab('ingredients')}
                                        className={`flex-1 py-5 text-xs font-black uppercase tracking-widest transition-all ${activeTab === 'ingredients' ? 'bg-white text-black' : 'bg-black text-white hover:bg-gray-900'}`}
                                    >
                                        Key Ingredients
                                    </button>
                                    <button
                                        onClick={() => setActiveTab('benefits')}
                                        className={`flex-1 py-5 text-xs font-black uppercase tracking-widest transition-all ${activeTab === 'benefits' ? 'bg-white text-black' : 'bg-black text-white hover:bg-gray-900'}`}
                                    >
                                        Product Benefits
                                    </button>
                                </div>
                                <div className="p-8 bg-white space-y-6 min-h-[160px]">
                                    {activeTab === 'ingredients' ? (
                                        <div className="grid grid-cols-1 md:grid-cols-1 gap-4 animate-in fade-in duration-500">
                                            <div className="flex gap-4 group">
                                                <div className="shrink-0 mt-1 bg-green-500 rounded-full w-5 h-5 flex items-center justify-center group-hover:scale-110 transition-transform"><Check size={12} className="text-white" strokeWidth={4} /></div>
                                                <p className="text-sm font-medium leading-relaxed"><span className="font-black italic uppercase text-[10px] block text-gray-400 mb-1">Deep Hydration</span> Locks in moisture to prevent dryness, flakiness, and beard dandruff.</p>
                                            </div>
                                            <div className="flex gap-4 group">
                                                <div className="shrink-0 mt-1 bg-green-500 rounded-full w-5 h-5 flex items-center justify-center group-hover:scale-110 transition-transform"><Check size={12} className="text-white" strokeWidth={4} /></div>
                                                <p className="text-sm font-medium leading-relaxed"><span className="font-black italic uppercase text-[10px] block text-gray-400 mb-1">Nourishing & Strengthening</span> Packed with vitamins and essential fatty acids to support healthier, stronger beard growth.</p>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="space-y-4 animate-in fade-in duration-500">
                                            <div className="flex gap-4 group">
                                                <div className="shrink-0 mt-1 bg-green-500 rounded-full w-5 h-5 flex items-center justify-center group-hover:scale-110 transition-transform"><Check size={12} className="text-white" strokeWidth={4} /></div>
                                                <p className="text-sm font-medium leading-relaxed"><span className="font-black italic uppercase text-[10px] block text-gray-400 mb-1">Product Benefit 1</span> Description of the first product benefit.</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Pricing Component */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-6 md:gap-8">
                                <span
                                    onClick={() => step > 1 && setStep(1)}
                                    className={`flex items-center gap-2 font-black italic text-xl uppercase tracking-tighter shrink-0 cursor-pointer transition-colors ${step === 1 ? 'text-black' : 'text-gray-300 hover:text-gray-500'}`}
                                >
                                    <span className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs not-italic transition-colors ${step === 1 ? 'border-black' : 'border-gray-200'}`}>1</span>
                                    Choose Packages
                                    <span className="hidden sm:inline"> &gt;</span>
                                </span>
                                <span className={`flex items-center gap-2 font-black italic text-xl uppercase tracking-tighter shrink-0 transition-colors ${step === 2 ? 'text-black' : 'text-gray-300'}`}>
                                    <span className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs not-italic transition-colors ${step === 2 ? 'border-black' : 'border-gray-200'}`}>2</span>
                                    Choose Scent
                                </span>
                            </div>

                            <div className="flex bg-gray-50 p-1.5 rounded-full border border-gray-100">
                                <button
                                    onClick={() => setIsSubscription(true)}
                                    className={`flex-1 py-3.5 rounded-full font-black italic uppercase text-xs tracking-widest transition-all ${isSubscription ? 'bg-black text-white shadow-xl' : 'bg-transparent text-gray-400 hover:text-black'}`}
                                >
                                    Subscribe & Save
                                </button>
                                <button
                                    onClick={() => setIsSubscription(false)}
                                    className={`flex-1 py-3.5 rounded-full font-black italic uppercase text-xs tracking-widest transition-all ${!isSubscription ? 'bg-black text-white shadow-xl' : 'bg-transparent text-gray-400 hover:text-black'}`}
                                >
                                    One Time Purchase
                                </button>
                            </div>

                            {isSubscription ? (
                                <div className="space-y-6 bg-[#fcf9f5] p-6 md:p-8 rounded-[2.5rem] border border-orange-100/50 shadow-sm animate-in zoom-in-95 duration-500">
                                    <div className="flex flex-wrap items-center justify-between gap-4">
                                        <div className="flex flex-col gap-2">
                                            <div className="flex items-center gap-2">
                                                <div className="bg-orange-500 rounded-full p-1"><Check size={8} className="text-white" strokeWidth={4} /></div>
                                                <p className="text-[10px] font-black uppercase tracking-widest">Up to 30% off</p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-lg">🚚</span>
                                                <p className="text-[10px] font-black uppercase tracking-widest">Free Shipping <span className="text-[#f59e0b] italic ml-1">For Life</span></p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-gray-300 line-through text-xs font-bold mr-2">£30.99</span>
                                            <span className="text-[#22c55e] font-black italic text-4xl">£26.34</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">
                                        <Check size={14} className="text-blue-500" /> Skip, pause, or cancel <span className="text-gray-950 underline decoration-blue-500 underline-offset-4">anytime</span> - no contract
                                    </div>

                                    {step === 1 ? (
                                        <>
                                            <div className="space-y-3">
                                                {packages.map((pkg, idx) => (
                                                    <div
                                                        key={pkg.id}
                                                        onClick={() => setSelectedPackage(idx)}
                                                        className={`relative flex items-center justify-between p-5 rounded-2xl border-2 transition-all cursor-pointer ${selectedPackage === idx ? 'border-orange-500 bg-white ring-4 ring-orange-50' : 'border-white bg-white/50 hover:bg-white hover:border-gray-200 shadow-sm'}`}
                                                    >
                                                        <div className="flex items-center gap-4">
                                                            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${selectedPackage === idx ? 'border-orange-500' : 'border-gray-200'}`}>
                                                                {selectedPackage === idx && <div className="w-3.5 h-3.5 rounded-full bg-orange-500 shadow-sm" />}
                                                            </div>
                                                            <div>
                                                                <span className={`${selectedPackage === idx ? 'text-black' : 'text-gray-900'} font-black italic text-lg block leading-none mb-1`}>£{pkg.price}/ bottle</span>
                                                                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">{pkg.label}</span>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center gap-3">
                                                            <div className="text-right">
                                                                <span className="font-black italic text-xl block leading-none">{pkg.discount}%</span>
                                                                <span className="text-[8px] font-black uppercase tracking-widest text-gray-400">OFF</span>
                                                            </div>
                                                            {pkg.popular && <span className="bg-green-600 text-white text-[8px] font-black px-2.5 py-1.5 rounded-md uppercase tracking-tighter h-fit shadow-md shadow-green-100">Most Popular</span>}
                                                            {pkg.bestValue && <span className="bg-[#f59e0b] text-white text-[8px] font-black px-2.5 py-1.5 rounded-md uppercase tracking-tighter h-fit shadow-md shadow-orange-100">Best Value</span>}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="space-y-4 pt-4 border-t border-gray-100">
                                                <h4 className="font-black italic uppercase text-xs tracking-widest">Select Delivery frequency</h4>
                                                <p className="text-[10px] text-gray-400 italic font-bold -mt-3">*always flexible, Always in your control</p>
                                                <div className="flex gap-4">
                                                    {[1, 2, 3].map((m) => (
                                                        <button
                                                            key={m}
                                                            onClick={() => setFrequency(m)}
                                                            className={`flex-1 py-4 border-2 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all relative ${frequency === m ? 'border-black bg-white shadow-xl translate-y-[-2px]' : 'border-white bg-white/50 text-gray-400 hover:text-black hover:bg-white shadow-sm'}`}
                                                        >
                                                            {m === 2 && <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-black text-white text-[8px] px-3 py-1 rounded-full uppercase font-black italic shadow-lg z-10 whitespace-nowrap">Most Recommended</span>}
                                                            {m} month{m > 1 ? 's' : ''}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="bg-[#ffedd5] p-5 rounded-2xl flex items-center justify-center gap-3 border border-orange-100 shadow-sm">
                                                <span className="text-2xl animate-bounce">🎉</span>
                                                <p className="font-black italic text-sm tracking-tight uppercase text-[#431407]">Congrats, you're saving {packages[selectedPackage].discount}%</p>
                                            </div>

                                            <button
                                                onClick={() => setStep(2)}
                                                className="w-full bg-black text-white py-6 rounded-full font-black italic uppercase text-xl shadow-2xl shadow-gray-200 hover:shadow-orange-100 hover:translate-y-[-2px] transition-all flex items-center justify-center gap-3 group relative overflow-hidden"
                                            >
                                                <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                                                <span className="relative">Next Step {'>'}</span>
                                            </button>
                                        </>
                                    ) : (
                                        <div className="space-y-6 animate-in slide-in-from-right-8 duration-500">
                                            <button
                                                onClick={() => setStep(1)}
                                                className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-black transition-colors"
                                            >
                                                <ArrowLeft size={14} /> Back to packages
                                            </button>

                                            <div className="space-y-4">
                                                <h4 className="font-black italic uppercase text-sm tracking-widest">Select your scent</h4>
                                                <div className="grid grid-cols-1 gap-3">
                                                    {scents.map((scent) => (
                                                        <div
                                                            key={scent.id}
                                                            onClick={() => setSelectedScent(scent.id)}
                                                            className={`flex items-center justify-between p-5 rounded-2xl border-2 transition-all cursor-pointer ${selectedScent === scent.id ? 'border-orange-500 bg-white ring-4 ring-orange-50' : 'border-white bg-white/50 hover:bg-white hover:border-gray-200 shadow-sm'}`}
                                                        >
                                                            <div className="flex items-center gap-4">
                                                                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-2xl">
                                                                    {scent.icon}
                                                                </div>
                                                                <div>
                                                                    <span className="font-black italic text-lg block leading-none mb-1">{scent.name}</span>
                                                                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">{scent.description}</span>
                                                                </div>
                                                            </div>
                                                            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${selectedScent === scent.id ? 'border-orange-500' : 'border-gray-200'}`}>
                                                                {selectedScent === scent.id && <div className="w-3.5 h-3.5 rounded-full bg-orange-500 shadow-sm" />}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <button
                                                onClick={addToCart}
                                                className="w-full bg-black text-white py-6 rounded-full font-black italic uppercase text-xl shadow-2xl shadow-gray-200 hover:shadow-orange-100 hover:translate-y-[-2px] transition-all flex items-center justify-center gap-3 group relative overflow-hidden"
                                            >
                                                <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                                                <span className="relative">Add to Cart</span>
                                                <Check size={24} className="relative group-hover:scale-110 transition-transform" />
                                            </button>
                                        </div>
                                    )}

                                    <div className="flex flex-col items-center gap-4 pt-4">
                                        <div className="flex items-center gap-2 grayscale opacity-50 overflow-x-auto w-full justify-center scrollbar-hide">
                                            {['visa', 'mastercard', 'amex', 'paypal', 'googlepay', 'applepay'].map(p => (
                                                <div key={p} className="bg-white px-3 py-1.5 rounded-md border border-gray-100 shadow-sm shrink-0 font-black italic text-[8px] uppercase">{p}</div>
                                            ))}
                                        </div>
                                        <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400">
                                            <span className="text-green-500">🔒</span> All transactions secured and encrypted
                                        </div>
                                    </div>

                                    {/* Shipping Banner */}
                                    <div className="bg-black text-white p-6 rounded-[2rem] flex items-center gap-5 shadow-xl">
                                        <div className="text-3xl">🚚</div>
                                        <div>
                                            <h5 className="font-black italic uppercase text-sm leading-tight">Expected delivery in 3-4 business days</h5>
                                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Shipped from the British Isles</p>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="space-y-6 bg-white p-6 md:p-8 rounded-[2.5rem] border border-gray-100 shadow-sm animate-in fade-in duration-500">
                                    {step === 1 ? (
                                        <>
                                            <div className="space-y-3">
                                                {packages.map((pkg, idx) => (
                                                    <div
                                                        key={pkg.id}
                                                        onClick={() => setSelectedPackage(idx)}
                                                        className={`relative flex items-center justify-between p-5 rounded-2xl border-2 transition-all cursor-pointer ${selectedPackage === idx ? 'border-black bg-white ring-4 ring-gray-50' : 'border-white bg-white/50 hover:bg-white hover:border-gray-200 shadow-sm'}`}
                                                    >
                                                        <div className="flex items-center gap-4">
                                                            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${selectedPackage === idx ? 'border-black' : 'border-gray-200'}`}>
                                                                {selectedPackage === idx && <div className="w-3.5 h-3.5 rounded-full bg-black shadow-sm" />}
                                                            </div>
                                                            <div>
                                                                <span className={`${selectedPackage === idx ? 'text-black' : 'text-gray-900'} font-black italic text-lg block leading-none mb-1`}>£{pkg.oneTimePrice}/ bottle</span>
                                                                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">{pkg.label}</span>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center gap-3">
                                                            {pkg.popular && <span className="bg-green-600 text-white text-[8px] font-black px-2.5 py-1.5 rounded-md uppercase tracking-tighter h-fit shadow-md shadow-green-100">Most Popular</span>}
                                                            {pkg.bestValue && <span className="bg-[#f59e0b] text-white text-[8px] font-black px-2.5 py-1.5 rounded-md uppercase tracking-tighter h-fit shadow-md shadow-orange-100">Best Value</span>}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                            <button
                                                onClick={() => setStep(2)}
                                                className="w-full bg-black text-white py-6 rounded-full font-black italic uppercase text-xl shadow-2xl shadow-gray-200 hover:scale-[1.02] transition-all flex items-center justify-center gap-3 group"
                                            >
                                                <span>Choose Scent</span>
                                                <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
                                            </button>
                                        </>
                                    ) : (
                                        <div className="space-y-6 animate-in slide-in-from-right-8 duration-500">
                                            <button
                                                onClick={() => setStep(1)}
                                                className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-black transition-colors"
                                            >
                                                <ArrowLeft size={14} /> Back to packages
                                            </button>

                                            <div className="space-y-4">
                                                <h4 className="font-black italic uppercase text-sm tracking-widest">Select your scent</h4>
                                                <div className="grid grid-cols-1 gap-3">
                                                    {scents.map((scent) => (
                                                        <div
                                                            key={scent.id}
                                                            onClick={() => setSelectedScent(scent.id)}
                                                            className={`flex items-center justify-between p-5 rounded-2xl border-2 transition-all cursor-pointer ${selectedScent === scent.id ? 'border-orange-500 bg-white ring-4 ring-orange-50' : 'border-white bg-white/50 hover:bg-white hover:border-gray-200 shadow-sm'}`}
                                                        >
                                                            <div className="flex items-center gap-4">
                                                                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-2xl">
                                                                    {scent.icon}
                                                                </div>
                                                                <div>
                                                                    <span className="font-black italic text-lg block leading-none mb-1">{scent.name}</span>
                                                                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">{scent.description}</span>
                                                                </div>
                                                            </div>
                                                            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${selectedScent === scent.id ? 'border-orange-500' : 'border-gray-200'}`}>
                                                                {selectedScent === scent.id && <div className="w-3.5 h-3.5 rounded-full bg-orange-500 shadow-sm" />}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <button
                                                onClick={addToCart}
                                                className="w-full bg-black text-white py-6 rounded-full font-black italic uppercase text-xl shadow-2xl shadow-gray-200 hover:shadow-orange-100 hover:translate-y-[-2px] transition-all flex items-center justify-center gap-3 group relative overflow-hidden"
                                            >
                                                <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                                                <span className="relative">Add to Cart</span>
                                                <Check size={24} className="relative group-hover:scale-110 transition-transform" />
                                            </button>
                                        </div>
                                    )}

                                    <div className="flex flex-col items-center gap-4 pt-4 border-t border-gray-100">
                                        <div className="flex items-center gap-2 grayscale opacity-50 overflow-x-auto w-full justify-center scrollbar-hide">
                                            {['visa', 'mastercard', 'amex', 'paypal', 'googlepay', 'applepay'].map(p => (
                                                <div key={p} className="bg-white px-3 py-1.5 rounded-md border border-gray-100 shadow-sm shrink-0 font-black italic text-[8px] uppercase">{p}</div>
                                            ))}
                                        </div>
                                        <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400">
                                            <span className="text-green-500">🔒</span> All transactions secured and encrypted
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>

            <Features />
            <Footer />

            {/* Cart Drawer */}
            {isCartOpen && (
                <div className="fixed inset-0 z-50 overflow-hidden">
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onClick={() => setIsCartOpen(false)}></div>
                    <div className="absolute inset-y-0 right-0 max-w-full flex">
                        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col animate-in slide-in-from-right duration-500">
                            {cart.length > 0 && cart[0].isSuccess ? (
                                <div className="flex-1 flex flex-col items-center justify-center p-8 text-center space-y-6 animate-in zoom-in-95 duration-500">
                                    <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                        <Check size={48} className="text-green-600" strokeWidth={3} />
                                    </div>
                                    <h2 className="text-4xl font-black italic uppercase tracking-tighter">Order Placed!</h2>
                                    <p className="text-gray-500 font-medium">Thank you for your purchase. We've sent a confirmation email to your inbox.</p>
                                    <div className="w-full bg-gray-50 p-6 rounded-2xl border border-gray-100 space-y-3">
                                        <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-gray-400">
                                            <span>Order Number</span>
                                            <span className="text-black">#RB-82910</span>
                                        </div>
                                        <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-gray-400">
                                            <span>Est. Delivery</span>
                                            <span className="text-black">3-4 Business Days</span>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => {
                                            setCart([]);
                                            setIsCartOpen(false);
                                        }}
                                        className="w-full bg-black text-white py-5 rounded-full font-black italic uppercase text-xl"
                                    >
                                        Back to Store
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                                        <h2 className="text-2xl font-black italic uppercase tracking-tighter">Your Cart ({cart.length})</h2>
                                        <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-gray-100 rounded-full transition-colors"><Plus className="rotate-45" size={24} /></button>
                                    </div>

                                    <div className="flex-1 overflow-y-auto p-6 space-y-6">
                                        {cart.length === 0 ? (
                                            <div className="flex flex-col items-center justify-center h-full text-gray-400 space-y-4">
                                                <ShoppingBag size={64} strokeWidth={1} />
                                                <p className="font-bold uppercase tracking-widest text-xs">Your cart is empty</p>
                                                <button onClick={() => setIsCartOpen(false)} className="text-black underline font-black italic uppercase text-sm">Start Shopping</button>
                                            </div>
                                        ) : (
                                            cart.map((item) => (
                                                <div key={item.id} className="flex gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                                                    <div className="w-20 h-20 bg-white rounded-xl overflow-hidden shadow-sm shrink-0 border border-gray-100">
                                                        <img src="/assets/product-gallery.png" alt="" className="w-full h-full object-contain" />
                                                    </div>
                                                    <div className="flex-1 flex flex-col justify-between">
                                                        <div>
                                                            <div className="flex justify-between items-start">
                                                                <h3 className="font-black italic uppercase text-sm leading-tight">{item.name}</h3>
                                                                <span className="font-black italic text-lg text-[#22c55e]">£{item.price}</span>
                                                            </div>
                                                            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">Scent: {item.scent} • {item.package}</p>
                                                            {item.isSubscription && (
                                                                <div className="flex items-center gap-1 mt-1">
                                                                    <div className="bg-orange-100 text-orange-600 text-[8px] font-black px-1.5 py-0.5 rounded uppercase tracking-tighter flex items-center gap-1">
                                                                        <Check size={8} strokeWidth={4} /> Recurring (Every {item.frequency} mo)
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </div>
                                                        <div className="flex items-center justify-between mt-2">
                                                            <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden bg-white">
                                                                <button className="px-2 py-1 hover:bg-gray-50"><Minus size={12} /></button>
                                                                <span className="px-3 text-xs font-bold">{item.quantity}</span>
                                                                <button className="px-2 py-1 hover:bg-gray-50"><Plus size={12} /></button>
                                                            </div>
                                                            <button
                                                                onClick={() => setCart(cart.filter(c => c.id !== item.id))}
                                                                className="text-[10px] font-bold text-gray-400 underline hover:text-red-500 transition-colors"
                                                            >
                                                                Remove
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        )}
                                    </div>

                                    {cart.length > 0 && (
                                        <div className="p-6 border-t border-gray-100 bg-gray-50 space-y-4">
                                            <div className="flex justify-between items-center bg-green-50 p-4 rounded-xl border border-green-100">
                                                <div className="flex items-center gap-2">
                                                    <span className="text-xl">🚚</span>
                                                    <div>
                                                        <p className="text-[10px] font-black uppercase tracking-widest text-green-800">Free Shipping Applied</p>
                                                        <p className="text-[8px] font-bold text-green-600 uppercase">Worldwide delivery is on us!</p>
                                                    </div>
                                                </div>
                                                <Check size={20} className="text-green-500" />
                                            </div>
                                            <div className="space-y-2">
                                                <div className="flex justify-between text-gray-400 font-bold uppercase text-[10px] tracking-widest">
                                                    <span>Subtotal</span>
                                                    <span>£{cart.reduce((acc, item) => acc + (parseFloat(item.price) * item.quantity), 0).toFixed(2)}</span>
                                                </div>
                                                <div className="flex justify-between text-black font-black italic uppercase text-2xl tracking-tighter">
                                                    <span>Total Due</span>
                                                    <span className="text-[#22c55e]">£{cart.reduce((acc, item) => acc + (parseFloat(item.price) * item.quantity), 0).toFixed(2)}</span>
                                                </div>
                                            </div>
                                            <button
                                                onClick={() => setCart(cart.map(item => ({ ...item, isSuccess: true })))}
                                                className="w-full bg-black text-white py-5 rounded-full font-black italic uppercase text-xl shadow-xl hover:translate-y-[-2px] transition-all flex items-center justify-center gap-3 group"
                                            >
                                                <span>Checkout Now</span>
                                                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                            </button>
                                            <p className="text-center text-[8px] font-bold text-gray-400 uppercase tracking-widest">Secure checkout enabled • All major cards accepted</p>
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductPage;
