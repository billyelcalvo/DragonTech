

export function Header() {
    return (
        <header className="h-20 px-8 md:px-16 flex items-center justify-between sticky top-0 z-50 bg-gradient-to-r from-ghost-white/90 via-ghost-white/80 to-ghost-white/90 backdrop-blur-xl shadow-lg border-b border-white/20">


            <div className="flex items-center gap-3 cursor-pointer group">
                <div className="w-10 h-10 bg-gradient-to-br from-jade-green to-bright-sky rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-jade-green/50 transition-shadow duration-300">
                    <span className="text-white font-bold text-xl">M</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-yale-blue to-jade-green bg-clip-text text-transparent">Dragon-Tech</span>
            </div>


            <nav className="hidden md:block">
                <ul className="flex list-none gap-2 items-center m-0 p-0">
                    <li><a href="#" className="px-5 py-2.5 rounded-full text-yale-blue font-medium text-sm transition-all duration-300 hover:bg-jade-green hover:text-white hover:shadow-lg hover:shadow-jade-green/30 hover:-translate-y-0.5">Home</a></li>
                    <li><a href="#" className="px-5 py-2.5 rounded-full text-yale-blue font-medium text-sm transition-all duration-300 hover:bg-jade-green hover:text-white hover:shadow-lg hover:shadow-jade-green/30 hover:-translate-y-0.5">Products</a></li>
                    <li><a href="#" className="px-5 py-2.5 rounded-full text-yale-blue font-medium text-sm transition-all duration-300 hover:bg-jade-green hover:text-white hover:shadow-lg hover:shadow-jade-green/30 hover:-translate-y-0.5">Contact</a></li>
                    <li><a href="#" className="px-5 py-2.5 rounded-full text-yale-blue font-medium text-sm transition-all duration-300 hover:bg-jade-green hover:text-white hover:shadow-lg hover:shadow-jade-green/30 hover:-translate-y-0.5">Favorites</a></li>
                    <li><a href="#" className="ml-4 px-6 py-2.5 rounded-full bg-gradient-to-r from-jade-green to-bright-sky text-white font-semibold text-sm shadow-lg shadow-jade-green/30 transition-all duration-300 hover:shadow-xl hover:shadow-jade-green/40 hover:-translate-y-0.5">🛒 Cart</a></li>
                </ul>
            </nav>


            <button className="md:hidden p-2 rounded-lg hover:bg-ghost-white/50">
                <svg className="w-6 h-6 text-yale-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
        </header>
    )
}