import { useState, useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)


const SearchIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
)

const CartIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
)

const CloseIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
)

const GridIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
)

// Category Icons
const FireIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
    </svg>
)

const SmartphoneIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
    </svg>
)

const LaptopIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
    </svg>
)

const HeadphonesIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 18v-6a9 9 0 0118 0v6" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3v5zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3v5z" />
    </svg>
)

const GamepadIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.035 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.007-1.875 2.25-1.875s2.25.84 2.25 1.875c0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" />
    </svg>
)

const WatchIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
)

const CableIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.636 5.636a9 9 0 1012.728 0M12 3v9" />
    </svg>
)

const categories = [
    { id: 'all', name: 'Todos', Icon: FireIcon },
    { id: 'smartphones', name: 'Smartphones', Icon: SmartphoneIcon },
    { id: 'laptops', name: 'Laptops', Icon: LaptopIcon },
    { id: 'audio', name: 'Audio', Icon: HeadphonesIcon },
    { id: 'gaming', name: 'Gaming', Icon: GamepadIcon },
    { id: 'accessories', name: 'Accesorios', Icon: CableIcon },
    { id: 'wearables', name: 'Wearables', Icon: WatchIcon },
]

const products = [
    {
        id: 1,
        name: 'iPhone 15 Pro Max',
        category: 'smartphones',
        price: 1199,
        originalPrice: 1299,
        description: 'Chip A17 Pro, Titanio, Cámara 48MP',
        image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=400&fit=crop',
        isNew: true,
        discount: 10,
    },
    {
        id: 2,
        name: 'MacBook Air M3',
        category: 'laptops',
        price: 1299,
        originalPrice: 1299,
        description: '15" Liquid Retina, 18h batería',
        image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop',
        isNew: true,
        discount: 0,
    },
    {
        id: 3,
        name: 'AirPods Pro 2',
        category: 'audio',
        price: 212,
        originalPrice: 249,
        description: 'Cancelación de ruido adaptativa',
        image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=400&h=400&fit=crop',
        isNew: false,
        discount: 15,
    },
    {
        id: 4,
        name: 'PlayStation 5',
        category: 'gaming',
        price: 449,
        originalPrice: 499,
        description: 'Edición Digital, SSD Ultra Rápido',
        image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=400&fit=crop',
        isNew: false,
        discount: 10,
    },
    {
        id: 5,
        name: 'Samsung Galaxy S24 Ultra',
        category: 'smartphones',
        price: 1099,
        originalPrice: 1199,
        description: 'Galaxy AI, S Pen integrado',
        image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=400&fit=crop',
        isNew: true,
        discount: 8,
    },
    {
        id: 6,
        name: 'Sony WH-1000XM5',
        category: 'audio',
        price: 299,
        originalPrice: 349,
        description: 'Mejor cancelación de ruido',
        image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&h=400&fit=crop',
        isNew: false,
        discount: 14,
    },
    {
        id: 7,
        name: 'Apple Watch Ultra 2',
        category: 'wearables',
        price: 799,
        originalPrice: 799,
        description: 'GPS, 36h batería, Titanio',
        image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&h=400&fit=crop',
        isNew: true,
        discount: 0,
    },
    {
        id: 8,
        name: 'ASUS ROG Laptop',
        category: 'laptops',
        price: 1899,
        originalPrice: 2099,
        description: 'RTX 4080, i9 14900H, 32GB RAM',
        image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=400&fit=crop',
        isNew: false,
        discount: 10,
    },
    {
        id: 9,
        name: 'Nintendo Switch OLED',
        category: 'gaming',
        price: 349,
        originalPrice: 349,
        description: 'Pantalla OLED 7", Dock mejorado',
        image: 'https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=400&h=400&fit=crop',
        isNew: false,
        discount: 0,
    },
]

export function ProductsSection() {
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('all')

    const sectionRef = useRef(null)
    const headerRef = useRef(null)
    const sidebarRef = useRef(null)
    const productsGridRef = useRef(null)


    const filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.description.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
        return matchesSearch && matchesCategory
    })

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {

            gsap.fromTo(headerRef.current.children,
                { opacity: 0, y: 30 },
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


            gsap.fromTo(sidebarRef.current.querySelectorAll('.category-item'),
                { opacity: 0, x: -20 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.4,
                    stagger: 0.06,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sidebarRef.current,
                        start: "top 80%",
                        toggleActions: "play none none none"
                    }
                }
            )


            gsap.fromTo(productsGridRef.current.querySelectorAll('.product-card'),
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    stagger: 0.08,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: productsGridRef.current,
                        start: "top 75%",
                        toggleActions: "play none none none"
                    }
                }
            )
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={sectionRef} id="products" className="py-20 bg-ghost-white relative">
            <div className="max-w-7xl mx-auto px-6">

                <div ref={headerRef} className="text-center mb-10">
                    <span className="inline-block px-4 py-1.5 bg-primary/5 text-primary rounded-md text-sm font-medium tracking-wide uppercase mb-4 opacity-0">
                        Catálogo
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 opacity-0">
                        Explora Nuestros Productos
                    </h2>
                    <p className="text-grey text-lg max-w-2xl mx-auto mb-8 opacity-0">
                        Encuentra los mejores productos tecnológicos con ofertas exclusivas.
                    </p>

                    <div className="max-w-xl mx-auto opacity-0">
                        <div className="relative flex items-center bg-white rounded-lg shadow-sm border border-gray-200">
                            <div className="pl-4 text-grey">
                                <SearchIcon />
                            </div>
                            <input
                                type="text"
                                placeholder="Buscar productos..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full py-3 px-4 bg-transparent text-primary placeholder-grey/60 focus:outline-none"
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery('')}
                                    className="pr-4 text-grey hover:text-primary transition-colors"
                                >
                                    <CloseIcon />
                                </button>
                            )}
                        </div>
                    </div>
                </div>


                <div className="flex flex-col lg:flex-row gap-8">

                    <aside ref={sidebarRef} className="lg:w-64 flex-shrink-0">
                        <div className="sticky top-20">
                            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                                <h3 className="text-sm font-semibold text-primary mb-4 flex items-center gap-2 uppercase tracking-wide">
                                    <GridIcon />
                                    Categorías
                                </h3>
                                <nav className="space-y-1">
                                    {categories.map((category) => {
                                        const Icon = category.Icon
                                        return (
                                            <button
                                                key={category.id}
                                                onClick={() => setSelectedCategory(category.id)}
                                                className={`category-item w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all duration-200 cursor-pointer ${selectedCategory === category.id
                                                    ? 'bg-primary text-white'
                                                    : 'text-grey hover:text-primary hover:bg-gray-50'
                                                    }`}
                                            >
                                                <Icon />
                                                <span className="font-medium text-sm">{category.name}</span>
                                            </button>
                                        )
                                    })}
                                </nav>
                            </div>
                        </div>
                    </aside>


                    <main ref={productsGridRef} className="flex-1">
                        {filteredProducts.length === 0 ? (
                            <div className="text-center py-16">
                                <p className="text-grey text-lg">No se encontraron productos.</p>
                                <button
                                    onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                                    className="mt-4 text-jade-green hover:underline font-medium"
                                >
                                    Limpiar filtros
                                </button>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                {filteredProducts.map((product) => (
                                    <div key={product.id} className="product-card group opacity-0">
                                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-jade-green/30">

                                            <div className="relative h-48 bg-gray-50 overflow-hidden">
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                                />

                                                <div className="absolute top-3 left-3 flex gap-2">
                                                    {product.isNew && (
                                                        <span className="px-2.5 py-1 bg-jade-green text-white text-xs font-semibold rounded">
                                                            NUEVO
                                                        </span>
                                                    )}
                                                    {product.discount > 0 && (
                                                        <span className="px-2.5 py-1 bg-primary text-white text-xs font-semibold rounded">
                                                            -{product.discount}%
                                                        </span>
                                                    )}
                                                </div>
                                            </div>


                                            <div className="p-5">
                                                <h4 className="text-base font-semibold text-primary mb-1 group-hover:text-jade-green transition-colors">
                                                    {product.name}
                                                </h4>
                                                <p className="text-grey text-sm mb-4 line-clamp-2">
                                                    {product.description}
                                                </p>


                                                <div className="flex items-center gap-3 mb-4">
                                                    <span className="text-xl font-bold text-primary">
                                                        ${product.price}
                                                    </span>
                                                    {product.discount > 0 && (
                                                        <span className="text-grey line-through text-sm">
                                                            ${product.originalPrice}
                                                        </span>
                                                    )}
                                                </div>


                                                <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-white font-medium text-sm rounded-lg hover:bg-primary/90 transition-all duration-200 cursor-pointer">
                                                    <CartIcon />
                                                    Agregar al Carrito
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </main>
                </div>
            </div>
        </section>
    )
}
