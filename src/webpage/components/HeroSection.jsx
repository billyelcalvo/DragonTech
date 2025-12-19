import heroBackground from '../assets/heroSectionBackground.gif'

export function HeroSection() {
    return (
        <div className="min-h-[calc(100vh-5rem)] w-full relative bg-cover bg-center bg-no-repeat flex items-center justify-center overflow-hidden" style={{ backgroundImage: `url(${heroBackground})` }}>

            <div className="absolute inset-0 bg-gradient-to-br from-yale-blue/80 via-yale-blue/60 to-jade-green/40 z-10"></div>


            <div className="absolute top-20 left-10 w-72 h-72 bg-jade-green/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-bright-sky/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>


            <div className="relative z-20 text-center px-6 max-w-4xl">
                <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6 border border-white/20">
                    ✨ New Collection Available
                </span>

                <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                    <span className="text-white drop-shadow-2xl">Elevate Your</span>
                    <br />
                    <span className="bg-gradient-to-r from-jade-green via-bright-sky to-jade-green bg-clip-text text-transparent">Lifestyle</span>
                </h1>

                <p className="text-xl md:text-2xl mb-10 text-white/80 font-light max-w-2xl mx-auto leading-relaxed">
                    Discover premium products crafted for those who appreciate quality and style.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button className="px-10 py-4 bg-gradient-to-r from-jade-green to-bright-sky text-white font-bold text-lg rounded-full shadow-2xl shadow-jade-green/40 hover:-translate-y-1 hover:shadow-3xl hover:shadow-jade-green/50 transition-all duration-300 cursor-pointer border-none">
                        Shop Now →
                    </button>
                    <button className="px-10 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold text-lg rounded-full border-2 border-white/30 hover:bg-white/20 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                        Explore Collection
                    </button>
                </div>
            </div>
        </div>
    )
}