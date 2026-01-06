import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)


const UsersIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
    </svg>
)

const StarIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
)

const HeadphonesIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 18v-6a9 9 0 0118 0v6" />
        <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3v5z" />
        <path d="M3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3v5z" />
    </svg>
)

const PackageIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="16.5" y1="9.4" x2="7.5" y2="4.21" />
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
)

export function StatsSection() {
    const sectionRef = useRef(null)
    const headerRef = useRef(null)
    const statsRef = useRef(null)
    const cardRefs = useRef([])

    const stats = [
        {
            value: "50K+",
            label: "Clientes Activos",
            Icon: UsersIcon,
            color: "text-jade-green"
        },
        {
            value: "99%",
            label: "Satisfacción",
            Icon: StarIcon,
            color: "text-bright-sky"
        },
        {
            value: "24/7",
            label: "Soporte Técnico",
            Icon: HeadphonesIcon,
            color: "text-jade-green"
        },
        {
            value: "500+",
            label: "Productos",
            Icon: PackageIcon,
            color: "text-bright-sky"
        },
    ];

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(headerRef.current.children,
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: headerRef.current,
                        start: "top 85%",
                        toggleActions: "play none none none"
                    }
                }
            )

            gsap.fromTo(cardRefs.current,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    stagger: 0.1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: statsRef.current,
                        start: "top 80%",
                        toggleActions: "play none none none"
                    }
                }
            )
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={sectionRef} className="py-20 bg-primary relative">
            <div className="max-w-7xl mx-auto px-6">
                <div ref={headerRef} className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 opacity-0">
                        Resultados que Hablan
                    </h2>
                    <p className="text-white/60 text-lg opacity-0">
                        La confianza de miles de clientes nos respalda
                    </p>
                </div>

                <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => {
                        const Icon = stat.Icon
                        return (
                            <div
                                key={index}
                                ref={el => cardRefs.current[index] = el}
                                className="text-center opacity-0"
                            >
                                <div className="mb-4 flex justify-center">
                                    <Icon className={`w-8 h-8 ${stat.color}`} />
                                </div>
                                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-white/60 font-medium">{stat.label}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}
