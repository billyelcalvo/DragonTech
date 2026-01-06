import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'

export function Header() {

    const navItems = [
        { name: 'Inicio', path: '/' },
        { name: 'Productos', path: '/productos' },
        { name: 'Nosotros', path: '#' },
        { name: 'Contacto', path: '#' },
    ]
    const cartIconRef = useRef(null)

    useEffect(() => {
        const cartIcon = cartIconRef.current
        if (!cartIcon) return

        const ctx = gsap.context(() => {
            gsap.fromTo(cartIcon,
                { scale: 0.8, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 0.4,
                    ease: "power2.out",
                    delay: 0.3
                }
            )
        })

        return () => ctx.revert()
    }, [])

    return (
        <header className="h-16 px-6 md:px-12 flex items-center justify-between fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100">

            <Link to="/" className="flex items-center gap-2 cursor-pointer">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-jade-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="12 2 2 7 12 12 22 7 12 2" />
                        <polyline points="2 17 12 22 22 17" />
                        <polyline points="2 12 12 17 22 12" />
                    </svg>
                </div>
                <span className="text-lg font-bold text-primary">Dragon-Tech</span>
            </Link>

            <nav className="hidden md:block">
                <ul className="flex list-none gap-1 items-center m-0 p-0">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <Link to={item.path} className="px-4 py-2 rounded-md text-grey font-medium text-sm transition-all duration-200 hover:text-primary hover:bg-gray-50">
                                {item.name}
                            </Link>
                        </li>
                    ))}
                    <li className="ml-4">
                        <Link
                            to="#"
                            ref={cartIconRef}
                            className="px-5 py-2 rounded-lg bg-primary text-white font-semibold text-sm transition-all duration-200 hover:bg-primary/90 flex items-center gap-2"
                        >
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="9" cy="21" r="1" />
                                <circle cx="20" cy="21" r="1" />
                                <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
                            </svg>
                            Carrito
                        </Link>
                    </li>
                </ul>
            </nav>

            <button className="md:hidden p-2 rounded-md hover:bg-gray-50 transition-colors">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
        </header>
    )
}