export function Logo({ className }: { className?: string }) {
    return (
        <div className={`flex items-center gap-2.5 ${className}`}>
            {/* Speed Shield Icon - Shrunk for better balance */}
            <div className="relative w-8 h-8 flex items-center justify-center bg-primary rounded-lg rotate-3 hover:rotate-0 transition-all duration-300 shadow-[0_4px_15px_rgba(245,158,11,0.3)] group shrink-0">
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
                <div className="flex items-center gap-0.5 skew-x-[-15deg] relative z-10">
                    <div className="w-0.5 h-3 bg-white/40 rounded-full" />
                    <div className="w-1 h-5 bg-white rounded-full shadow-[0_0_6px_rgba(255,255,255,0.4)]" />
                    <div className="w-0.5 h-3 bg-white/40 rounded-full" />
                </div>
            </div>

            {/* Unified Wordmark */}
            <div className="flex items-baseline tracking-tighter uppercase font-extrabold select-none whitespace-nowrap">
                <span className="text-[1.35rem] leading-none text-foreground">auto</span>
                <span className="text-[1.35rem] leading-none text-primary italic">sprowadzone</span>
            </div>
        </div>
    )
}
