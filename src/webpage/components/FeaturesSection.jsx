export function FeaturesSection() {
    const features = [
        {
            title: "Fast Delivery",
            description: "Get your products delivered to your doorstep in record time with our express shipping.",
            icon: "🚚",
            gradient: "from-jade-green to-bright-sky",
        },
        {
            title: "Premium Quality",
            description: "We source only the finest materials to ensure our products meet the highest standards.",
            icon: "✨",
            gradient: "from-bright-sky to-yale-blue",
        },
        {
            title: "24/7 Support",
            description: "Our dedicated support team is available around the clock to assist you with any questions.",
            icon: "🎧",
            gradient: "from-yale-blue to-jade-green",
        },
    ];

    return (
        <section className="py-24 bg-gradient-to-b from-ghost-white to-white relative overflow-hidden">

            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-jade-green/5 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 bg-jade-green/10 text-jade-green rounded-full text-sm font-semibold mb-4">
                        Why Choose Us
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-yale-blue mb-4">
                        Built for <span className="bg-gradient-to-r from-jade-green to-bright-sky bg-clip-text text-transparent">Excellence</span>
                    </h2>
                    <p className="text-grey text-lg max-w-2xl mx-auto">
                        We're committed to providing you with the best shopping experience possible.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="group relative">

                            <div className={`absolute -inset-0.5 bg-gradient-to-r ${feature.gradient} rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500`}></div>

                            <div className="relative bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-white/50 h-full flex flex-col items-center text-center transition-all duration-500 group-hover:-translate-y-2">

                                <div className={`w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                    <span className="text-4xl">{feature.icon}</span>
                                </div>

                                <h3 className="text-xl font-bold text-yale-blue mb-3">{feature.title}</h3>
                                <p className="text-grey leading-relaxed">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
