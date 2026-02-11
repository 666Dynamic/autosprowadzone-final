"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { AnimatePresence, motion } from "framer-motion"

export function CookieBanner() {
    const [show, setShow] = useState(false)

    useEffect(() => {
        const consented = localStorage.getItem("cookie-consent")
        if (!consented) {
            setShow(true)
        }
    }, [])

    const handleAccept = () => {
        localStorage.setItem("cookie-consent", "accepted")
        setShow(false)
        // Initialize Google Analytics after consent
        if (typeof window !== 'undefined') {
            const s = document.createElement('script')
            s.src = 'https://www.googletagmanager.com/gtag/js?id=G-VPZB549MMW'
            s.async = true
            document.head.appendChild(s)
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const w = window as any
            w.dataLayer = w.dataLayer || []
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            function gtag(...args: any[]) { w.dataLayer.push(args) }
            gtag('js', new Date())
            gtag('config', 'G-VPZB549MMW')
        }
    }

    const handleReject = () => {
        localStorage.setItem("cookie-consent", "rejected")
        setShow(false)
    }

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="fixed bottom-4 left-4 right-4 md:left-8 md:bottom-8 z-50 max-w-lg"
                >
                    <div className="bg-slate-950/90 backdrop-blur-md border border-slate-800 p-6 rounded-2xl shadow-2xl flex flex-col md:flex-row gap-4 items-center md:items-start text-center md:text-left">
                        <div className="flex-1 space-y-2">
                            <h4 className="font-bold text-white text-sm uppercase tracking-wider">Ciasteczka 🍪</h4>
                            <p className="text-xs text-slate-400 leading-relaxed">
                                Używamy plików cookies, aby zapewnić najlepszą jakość korzystania z naszej strony.
                                <a href="/polityka-prywatnosci" className="text-primary hover:underline ml-1">Polityka Prywatności</a>.
                            </p>
                        </div>
                        <div className="flex gap-2 shrink-0">
                            <Button onClick={handleReject} variant="ghost" className="text-slate-400 hover:text-white hover:bg-slate-800 font-bold text-sm">
                                Odrzuć
                            </Button>
                            <Button onClick={handleAccept} className="bg-primary text-primary-foreground font-bold hover:bg-primary/90">
                                Akceptuję
                            </Button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
