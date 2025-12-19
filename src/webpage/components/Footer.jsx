export function Footer() {
    return (
        <footer className="bg-yale-blue relative overflow-hidden">

            <div className="h-1 bg-gradient-to-r from-jade-green via-bright-sky to-jade-green"></div>

            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

                    <div className="md:col-span-1">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-jade-green to-bright-sky rounded-xl flex items-center justify-center">
                                <span className="text-white font-bold text-xl">M</span>
                            </div>
                            <span className="text-xl font-bold text-white">Dragon-Tech</span>
                        </div>
                        <p className="text-white/60 text-sm leading-relaxed">
                            Premium products for those who appreciate quality and style.
                        </p>
                    </div>


                    <div>
                        <h4 className="text-white font-semibold mb-4">Shop</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-white/60 hover:text-jade-green transition-colors text-sm">New Arrivals</a></li>
                            <li><a href="#" className="text-white/60 hover:text-jade-green transition-colors text-sm">Best Sellers</a></li>
                            <li><a href="#" className="text-white/60 hover:text-jade-green transition-colors text-sm">Sale</a></li>
                            <li><a href="#" className="text-white/60 hover:text-jade-green transition-colors text-sm">Collections</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Company</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-white/60 hover:text-jade-green transition-colors text-sm">About Us</a></li>
                            <li><a href="#" className="text-white/60 hover:text-jade-green transition-colors text-sm">Careers</a></li>
                            <li><a href="#" className="text-white/60 hover:text-jade-green transition-colors text-sm">Contact</a></li>
                            <li><a href="#" className="text-white/60 hover:text-jade-green transition-colors text-sm">Blog</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Connect</h4>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-jade-green transition-colors">
                                <span className="text-white">📷</span>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-jade-green transition-colors">
                                <span className="text-white">🐦</span>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-jade-green transition-colors">
                                <span className="text-white">💼</span>
                            </a>
                        </div>
                    </div>
                </div>


                <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/40 text-sm">© 2024 DragonTech. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="text-white/40 hover:text-white text-sm transition-colors">Privacy Policy</a>
                        <a href="#" className="text-white/40 hover:text-white text-sm transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
