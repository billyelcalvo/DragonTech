import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ShippingIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 16h6v-6l-4-4h-6v10z" />
        <path d="M2 16h6V6H2z" />
        <circle cx="6.5" cy="16.5" r="2.5" />
        <circle cx="16.5" cy="16.5" r="2.5" />
        <path d="M8 16h2" />
    </svg>
);

const QualityIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
);

const SupportIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
    </svg>
);

export function FeaturesSection() {
    const sectionRef = useRef(null)
    const headerRef = useRef(null)
    const cardsRef = useRef(null)

    const features = [
        {
            title: "Envío Express",
            description: "Entrega rápida y segura a todo el país. Recibe tus productos tecnológicos en tiempo récord.",
            icon: <ShippingIcon />,
            iconBg: "bg-jade-green",
        },
        {
            title: "Garantía de Calidad",
            description: "Productos certificados de las mejores marcas mundiales. Alto rendimiento y durabilidad garantizada.",
            icon: <QualityIcon />,
            iconBg: "bg-bright-sky",
        },
        {
            title: "Soporte Especializado",
            description: "Equipo técnico disponible 24/7 para resolver todas tus consultas y brindarte asesoría experta.",
            icon: <SupportIcon />,
            iconBg: "bg-primary",
        },
    ];

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(headerRef.current.children,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                    stagger: 0.12,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: headerRef.current,
                        start: "top 80%",
                        toggleActions: "play none none none"
                    }
                }
            )

            gsap.fromTo(cardsRef.current.children,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    stagger: 0.15,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: cardsRef.current,
                        start: "top 75%",
                        toggleActions: "play none none none"
                    }
                }
            )
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={sectionRef} className="py-24 bg-ghost-white relative">
            <div className="max-w-7xl mx-auto px-6">
                <div ref={headerRef} className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 bg-primary/5 text-primary rounded-md text-sm font-medium tracking-wide uppercase mb-4 opacity-0">
                        Nuestras Ventajas
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 opacity-0">
                        ¿Por Qué Elegir Dragon-Tech?
                    </h2>
                    <p className="text-grey text-lg max-w-2xl mx-auto opacity-0">
                        Compromiso total con la excelencia en cada producto y servicio que ofrecemos.
                    </p>
                </div>

                <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="group bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-jade-green/30 transition-all duration-300 opacity-0">
                            <div className={`w-14 h-14 ${feature.iconBg} rounded-lg flex items-center justify-center mb-6 text-white group-hover:scale-105 transition-transform duration-300`}>
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-primary mb-3">{feature.title}</h3>
                            <p className="text-grey leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
