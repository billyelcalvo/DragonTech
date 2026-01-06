export function Footer() {
    const socialLinks = [
        {
            name: "Instagram",
            href: "#",
            icon: (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
            )
        },
        {
            name: "LinkedIn",
            href: "#",
            icon: (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                </svg>
            )
        },
        {
            name: "Twitter",
            href: "#",
            icon: (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
            )
        }
    ]

    return (
        <footer className="bg-primary">
            <div className="h-1 bg-gradient-to-r from-jade-green to-bright-sky"></div>

            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

                    <div className="md:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 bg-jade-green/20 rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5 text-jade-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polygon points="12 2 2 7 12 12 22 7 12 2" />
                                    <polyline points="2 17 12 22 22 17" />
                                    <polyline points="2 12 12 17 22 12" />
                                </svg>
                            </div>
                            <span className="text-lg font-bold text-white">Dragon-Tech</span>
                        </div>
                        <p className="text-white/50 text-sm leading-relaxed">
                            Tu fuente confiable de tecnología de alto rendimiento. Productos certificados y soporte especializado.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Productos</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-white/50 hover:text-jade-green transition-colors text-sm">Computadoras</a></li>
                            <li><a href="#" className="text-white/50 hover:text-jade-green transition-colors text-sm">Componentes</a></li>
                            <li><a href="#" className="text-white/50 hover:text-jade-green transition-colors text-sm">Periféricos</a></li>
                            <li><a href="#" className="text-white/50 hover:text-jade-green transition-colors text-sm">Accesorios</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Empresa</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-white/50 hover:text-jade-green transition-colors text-sm">Sobre Nosotros</a></li>
                            <li><a href="#" className="text-white/50 hover:text-jade-green transition-colors text-sm">Carreras</a></li>
                            <li><a href="#" className="text-white/50 hover:text-jade-green transition-colors text-sm">Contacto</a></li>
                            <li><a href="#" className="text-white/50 hover:text-jade-green transition-colors text-sm">Blog</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Contacto</h4>
                        <div className="space-y-3 text-sm text-white/50">
                            <p className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-jade-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                                ventas@dragon-tech.com
                            </p>
                            <p className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-jade-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                                </svg>
                                +1 (800) 123-4567
                            </p>
                        </div>

                        <div className="flex gap-3 mt-4">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    aria-label={link.name}
                                    className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white/50 hover:bg-jade-green hover:text-white transition-all duration-200"
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/30 text-sm">© 2025 Dragon-Tech. Todos los derechos reservados.</p>
                    <div className="flex gap-6">
                        <a href="#" className="text-white/30 hover:text-white/60 text-sm transition-colors">Privacidad</a>
                        <a href="#" className="text-white/30 hover:text-white/60 text-sm transition-colors">Términos</a>
                        <a href="#" className="text-white/30 hover:text-white/60 text-sm transition-colors">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
