import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export function Header() {

    const tittles = ['Inicio', 'Productos', 'Contacto', 'Favoritos']
    const cartIconRef = useRef(null)

    useEffect(() => {
        const cartIcon = cartIconRef.current
        if (!cartIcon) return

        const ctx = gsap.context(() => {
            // Animación de entrada con bounce
            gsap.fromTo(cartIcon,
                { scale: 0, rotation: -180, opacity: 0 },
                {
                    scale: 1,
                    rotation: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "back.out(1.7)",
                    delay: 0.5
                }
            )

            // Animación de "latido" continua para llamar la atención
            gsap.to(cartIcon, {
                scale: 1.1,
                duration: 0.6,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut",
                delay: 1.5
            })
        })

        // Efecto hover con GSAP
        const handleMouseEnter = () => {
            gsap.to(cartIcon, {
                scale: 1.3,
                rotation: 15,
                duration: 0.3,
                ease: "power2.out"
            })
        }

        const handleMouseLeave = () => {
            gsap.to(cartIcon, {
                scale: 1,
                rotation: 0,
                duration: 0.3,
                ease: "power2.out"
            })
        }

        cartIcon.addEventListener('mouseenter', handleMouseEnter)
        cartIcon.addEventListener('mouseleave', handleMouseLeave)

        return () => {
            ctx.revert()
            cartIcon.removeEventListener('mouseenter', handleMouseEnter)
            cartIcon.removeEventListener('mouseleave', handleMouseLeave)
        }
    }, [])

    return (
        <header className="h-20 px-8 md:px-16 flex items-center justify-between sticky top-0 z-50 bg-gradient-to-r from-ghost-white/90 via-ghost-white/80 to-ghost-white/90 backdrop-blur-xl shadow-lg border-b border-white/20">


            <div className="flex items-center gap-3 cursor-pointer group">
                <span className="text-xl font-bold bg-gradient-to-r from-yale-blue to-jade-green bg-clip-text text-transparent">Dragon-Tech</span>
            </div>


            <nav className="hidden md:block">
                <ul className="flex list-none gap-2 items-center m-0 p-0">
                    {tittles.map((itemString) => <li><a href="#" className="px-5 py-2.5 rounded-full text-yale-blue font-medium text-sm transition-all duration-300 hover:bg-jade-green hover:text-white hover:shadow-lg hover:shadow-jade-green/30 hover:-translate-y-0.5">{itemString}</a></li>)}
                    <li>
                        <a href="#" className="ml-4 px-6 py-2.5 rounded-full bg-gradient-to-r from-jade-green to-bright-sky text-white font-semibold text-sm shadow-lg shadow-jade-green/30 transition-all duration-300 hover:shadow-xl hover:shadow-jade-green/40 hover:-translate-y-0.5 flex items-center gap-2">
                            <svg
                                ref={cartIconRef}
                                className="w-5 h-5 cursor-pointer drop-shadow-lg"
                                viewBox="0 0 122.43 122.88"
                                fill="currentColor"
                                style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))' }}
                            >
                                <path d="M22.63,12.6h93.3c6.1,0,5.77,2.47,5.24,8.77l-3.47,44.23c-0.59,7.05-0.09,5.34-7.56,6.41l-68.62,8.73 l3.63,10.53c29.77,0,44.16,0,73.91,0c1,3.74,2.36,9.83,3.36,14h-12.28l-1.18-4.26c-24.8,0-34.25,0-59.06,0 c-13.55-0.23-12.19,3.44-15.44-8.27L11.18,8.11H0V0h19.61C20.52,3.41,21.78,9.15,22.63,12.6L22.63,12.6z M53.69,103.92 c5.23,0,9.48,4.25,9.48,9.48c0,5.24-4.24,9.48-9.48,9.48c-5.24,0-9.48-4.24-9.48-9.48C44.21,108.17,48.45,103.92,53.69,103.92 L53.69,103.92z M92.79,103.92c5.23,0,9.48,4.25,9.48,9.48c0,5.24-4.25,9.48-9.48,9.48c-5.24,0-9.48-4.24-9.48-9.48 C83.31,108.17,87.55,103.92,92.79,103.92L92.79,103.92z M30.8,43.07H45.9l-5.48-22.91c-5.4,0-10.72-0.01-15.93-0.01l1.84,6.86 L26.39,27L30.8,43.07L30.8,43.07L30.8,43.07z M48.31,20.17l5.48,22.9h14.54l-5.5-22.88L48.31,20.17L48.31,20.17L48.31,20.17z M70.74,20.2l5.5,22.87h13.91l-5.48-22.85L70.74,20.2L70.74,20.2L70.74,20.2z M92.58,20.23l5.48,22.85l13.92,0l1.54-18.36 c0.43-5.12,1.33-4.47-3.63-4.47C104.23,20.24,98.44,20.23,92.58,20.23L92.58,20.23L92.58,20.23z M111.49,48.89H99.45l3.97,16.56 l0.98-0.13c6.07-0.87,5.67,0.52,6.15-5.21L111.49,48.89L111.49,48.89z M95.77,66.5l-4.22-17.61h-13.9l4.67,19.44L95.77,66.5 L95.77,66.5L95.77,66.5z M74.66,69.37l-4.93-20.49l-14.55,0l5.37,22.41L74.66,69.37L74.66,69.37L74.66,69.37z M52.9,72.34 l-5.61-23.45H32.4l6.96,25.3L52.9,72.34L52.9,72.34z" />
                            </svg>
                            Carrito
                        </a>
                    </li>
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