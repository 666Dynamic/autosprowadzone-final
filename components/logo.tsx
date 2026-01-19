

export function Logo({ className }: { className?: string }) {
    return (
        <div className={`relative flex items-center ${className}`}>
            {/* Simple, clean text-based logo with icon if we had the SVG, but for now robust text */}
            <div className="flex items-center gap-2">
                <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-2 rounded-xl border border-primary/20 shadow-sm">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-5 h-5 text-primary"
                    >
                        <path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.53-.9L14.6 6a2.25 2.25 0 0 0-2-.75H11.4a2.25 2.25 0 0 0-2 .75L2.53 11.95a1 1 0 0 0-.53.9V16h3" />
                        <path d="M16 16v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2" />
                        <path d="M6 9h12" />
                    </svg>
                </div>
                <span className="font-black text-xl tracking-tight text-foreground">
                    auto<span className="text-primary">sprowadzone</span>.pl
                </span>
            </div>
        </div>
    )
}
