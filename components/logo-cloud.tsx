"use client"

import { motion } from "framer-motion"

const logos = [
    { name: "BCA Auction", color: "text-[#002f6c]" },
    { name: "AUTO1.com", color: "text-[#f39c12]" },
    { name: "Autobid.de", color: "text-[#d32f2f]" },
    { name: "CarOnSale", color: "text-[#2c3e50]" },
    { name: "OpenLane", color: "text-[#27ae60]" },
    { name: "Alcopa Auction", color: "text-[#004a99]" },
    { name: "Arval", color: "text-[#00965e]" },
    { name: "Alphabet", color: "text-[#003399]" },
    { name: "Athlon", color: "text-[#ff6600]" },
    { name: "Autorola", color: "text-[#003366]" },
    { name: "AutoProff", color: "text-[#1a1a1a]" },
]

export function LogoCloud() {
    return (
        <section className="py-12 border-y border-border bg-background overflow-hidden">
            <div className="container mx-auto px-4 md:px-8 mb-8">
                <p className="text-center text-sm font-black text-muted-foreground uppercase tracking-[0.2em]">
                    Dostęp do największych platform aukcyjnych w Europie
                </p>
            </div>

            <div className="relative flex overflow-x-hidden">
                <motion.div
                    className="flex whitespace-nowrap gap-16 md:gap-24 py-4"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        duration: 30,
                        ease: "linear"
                    }}
                >
                    {/* Double the logos for seamless loop */}
                    {[...logos, ...logos].map((logo, idx) => (
                        <div
                            key={idx}
                            className={`text-2xl md:text-4xl font-black tracking-tighter opacity-70 hover:opacity-100 transition-opacity flex items-center gap-2 ${logo.color}`}
                        >
                            <span className="w-2 h-2 rounded-full bg-primary" />
                            {logo.name}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
