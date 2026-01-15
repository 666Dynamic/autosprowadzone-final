"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ModeToggle() {
    const { setTheme, resolvedTheme } = useTheme()

    return (
        <button
            onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
            className="p-2 hover:bg-muted transition-colors relative text-muted-foreground hover:text-primary"
            aria-label="Toggle theme"
        >
            <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute top-2 left-2 h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </button>
    )
}
