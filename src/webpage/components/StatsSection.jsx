export function StatsSection() {
    const stats = [
        { value: "50K+", label: "Happy Customers", icon: "👥" },
        { value: "99%", label: "Satisfaction Rate", icon: "⭐" },
        { value: "24/7", label: "Support Available", icon: "💬" },
        { value: "150+", label: "Products", icon: "📦" },
    ];

    return (
        <section className="py-20 bg-gradient-to-r from-yale-blue via-yale-blue to-jade-green relative overflow-hidden">

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Trusted by Thousands</h2>
                    <p className="text-white/70 text-lg">Numbers that speak for themselves</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center group">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-all duration-300 border border-white/20">
                                <span className="text-3xl">{stat.icon}</span>
                            </div>
                            <div className="text-4xl md:text-5xl font-black text-white mb-2">{stat.value}</div>
                            <div className="text-white/70 font-medium">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    );
}
