"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { motion, AnimatePresence } from "framer-motion"
import { Logo } from "@/components/logo"

const navItems = [
    { name: "Strona Główna", href: "/" },
    { name: "Kalkulator", href: "/kalkulator" },
    { name: "Aukcje B2B", href: "/aukcje" },
    { name: "Weryfikacja", href: "/weryfikacja" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
    { name: "Kontakt", href: "/kontakt" },
]

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false)
    const pathname = usePathname()
    const router = useRouter()

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 shadow-sm">
            <div className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/">
                    <Logo />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-primary",
                                pathname === item.href ? "text-primary" : "text-muted-foreground"
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <ModeToggle />
                    <button
                        onClick={() => {
                            if (pathname === "/") {
                                const el = document.getElementById("zlecenie")
                                if (el) {
                                    el.scrollIntoView({ behavior: "smooth", block: "start" })
                                } else {
                                    // If the section is not yet mounted (dynamic import), poll briefly
                                    const start = Date.now()
                                    const iv = setInterval(() => {
                                        const e = document.getElementById("zlecenie")
                                        if (e) {
                                            clearInterval(iv)
                                            e.scrollIntoView({ behavior: "smooth", block: "start" })
                                        }
                                        if (Date.now() - start > 3000) clearInterval(iv)
                                    }, 100)
                                }
                            } else {
                                router.push("/#zlecenie")
                            }
                        }}
                        className="h-12"
                        aria-label="Wyceń Import"
                    >
                        <Button className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all h-12 px-4 font-bold rounded-lg">
                            Wyceń Import
                        </Button>
                    </button>
                </div>

                {/* Mobile Toggle */}
                <div className="flex md:hidden items-center space-x-2">
                    <ModeToggle />
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label={isOpen ? "Zamknij menu" : "Otwórz menu"}
                        aria-expanded={isOpen}
                        aria-controls="mobile-menu"
                        className="p-2 text-muted-foreground hover:text-primary transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-lg outline-none"
                    >
                        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        id="mobile-menu"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-b border-border"
                    >
                        <div className="container mx-auto px-4 py-6 flex flex-col space-y-2 bg-background">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                        "text-sm font-medium py-4 px-2 transition-colors hover:text-primary touch-manipulation rounded-lg hover:bg-muted/50 block min-h-[48px] flex items-center",
                                        pathname === item.href ? "text-primary bg-primary/5" : "text-muted-foreground"
                                    )}
                                >
                                    {item.name}
                                </Link>
                            ))}
                                    <button
                                        onClick={() => {
                                            setIsOpen(false)
                                            if (pathname === "/") {
                                                const el = document.getElementById("zlecenie")
                                                if (el) {
                                                    el.scrollIntoView({ behavior: "smooth", block: "start" })
                                                } else {
                                                    const start = Date.now()
                                                    const iv = setInterval(() => {
                                                        const e = document.getElementById("zlecenie")
                                                        if (e) {
                                                            clearInterval(iv)
                                                            e.scrollIntoView({ behavior: "smooth", block: "start" })
                                                        }
                                                        if (Date.now() - start > 3000) clearInterval(iv)
                                                    }, 100)
                                                }
                                            } else {
                                                router.push("/#zlecenie")
                                            }
                                        }}
                                        className="pt-4 w-full"
                                    >
                                        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all h-12 font-bold rounded-lg touch-manipulation min-h-[48px]">Wyceń Import</Button>
                                    </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}
