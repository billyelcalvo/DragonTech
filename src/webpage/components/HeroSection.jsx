import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import heroBackground from '../assets/heroSectionBackground.gif'

export function HeroSection() {
    const heroRef = useRef(null)
    const badgeRef = useRef(null)
    const titleRef = useRef(null)
    const subtitleRef = useRef(null)
    const descriptionRef = useRef(null)
    const buttonsRef = useRef(null)

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power2.out" } })

            tl.fromTo(badgeRef.current,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.6 }
            )
                .fromTo(titleRef.current,
                    { opacity: 0, y: 30 },
                    { opacity: 1, y: 0, duration: 0.7 },
                    "-=0.3"
                )
                .fromTo(subtitleRef.current,
                    { opacity: 0, y: 30 },
                    { opacity: 1, y: 0, duration: 0.7 },
                    "-=0.4"
                )
                .fromTo(descriptionRef.current,
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 0.6 },
                    "-=0.3"
                )
                .fromTo(buttonsRef.current.children,
                    { opacity: 0, y: 15 },
                    { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 },
                    "-=0.2"
                )
        }, heroRef)

        return () => ctx.revert()
    }, [])

    return (
        <div ref={heroRef} className="min-h-[calc(100vh-5rem)] w-full relative bg-cover bg-center bg-no-repeat flex items-center justify-center overflow-hidden" style={{ backgroundImage: `url(${heroBackground})` }}>

            <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/85 to-secondary/80 z-10"></div>

            <div className="relative z-20 text-center px-6 max-w-4xl">
                <span ref={badgeRef} className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-md text-white/90 text-sm font-medium mb-6 border border-white/10 opacity-0">

                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    Nueva Colección 2025
                </span>

                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                    <span ref={titleRef} className="text-white inline-block opacity-0">Tecnología de</span>
                    <br />
                    <span ref={subtitleRef} className="text-jade-green inline-block opacity-0">Alto Rendimiento</span>
                </h1>

                <p ref={descriptionRef} className="text-lg md:text-xl mb-10 text-white/80 font-normal max-w-2xl mx-auto leading-relaxed opacity-0">
                    Equipos y componentes de última generación para profesionales y entusiastas. Calidad certificada, precios competitivos.
                </p>

                <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button className="px-8 py-3.5 bg-jade-green text-white font-semibold text-base rounded-lg shadow-lg hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300 cursor-pointer border-none opacity-0 flex items-center gap-2">
                        Explorar Catálogo
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                        </svg>
                    </button>
                    <button className="px-8 py-3.5 bg-transparent text-white font-semibold text-base rounded-lg border border-white/30 hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer opacity-0 flex items-center gap-2">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                        </svg>
                        Contactar Ventas
                    </button>
                </div>
            </div>
        </div>
    )
}