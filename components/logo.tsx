export function Logo({ className }: { className?: string }) {
    return (
        <div className={`flex items-center gap-2 md:gap-2.5 ${className} group/logo`}>
            {/* Speed Shield Icon - With Micro-animations */}
            <div className="relative w-7 h-7 md:w-8 md:h-8 flex items-center justify-center bg-primary rounded-lg rotate-3 group-hover/logo:rotate-0 transition-all duration-500 shadow-[0_4px_15px_rgba(245,158,11,0.3)] shrink-0 overflow-hidden">
                {/* Subtle scanning light effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/logo:animate-[shimmer_1.5s_infinite] transition-transform" />

                {/* Background pulse */}
                <div className="absolute inset-0 bg-white/10 animate-pulse opacity-0 group-hover/logo:opacity-100 transition-opacity" />

                <div className="flex items-center gap-0.5 skew-x-[-15deg] relative z-10">
                    {/* Side bar 1 - Pulsing */}
                    <div className="w-0.5 h-2.5 md:h-3 bg-white/40 rounded-full animate-[pulse_3s_infinite]" />

                    {/* Main bar - With subtle glow pulse */}
                    <div className="w-1 h-4 md:h-5 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.6)] animate-[pulse_2s_infinite]" />

                    {/* Side bar 2 - Pulsing (Delayed) */}
                    <div className="w-0.5 h-2.5 md:h-3 bg-white/40 rounded-full animate-[pulse_3s_infinite_1s]" />
                </div>
            </div>

            {/* Unified Wordmark - Restored to static state */}
            <div className="flex items-baseline tracking-tighter uppercase font-extrabold select-none whitespace-nowrap">
                <span className="text-xl md:text-[1.35rem] leading-none text-foreground">sprowadzone</span>
                <span className="text-xl md:text-[1.35rem] leading-none text-primary italic">auto</span>
            </div>
        </div>
    )
}
