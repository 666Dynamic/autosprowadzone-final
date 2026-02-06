import Link from "next/link"
import { Logo } from "@/components/logo"

export function Footer() {
    return (
        <footer className="w-full border-t border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 py-12 md:py-16">
            <div className="container mx-auto px-4 md:px-8 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <div className="flex flex-col space-y-4">
                    <Link href="/">
                        <Logo />
                    </Link>
                    <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
                        Twój bezpośredni dostęp do niemieckiego rynku B2B. Transparentność, bezpieczeństwo, najlepsze ceny.
                    </p>
                </div>

                <div className="flex flex-col space-y-3">
                    <h3 className="font-black text-white">O Nas</h3>
                    <Link href="/weryfikacja" className="text-sm text-slate-400 hover:text-primary">Weryfikacja Aut</Link>
                    <Link href="/kalkulator" className="text-sm text-slate-400 hover:text-primary">Kalkulator</Link>
                    <Link href="/polityka-prywatnosci" className="text-sm text-slate-400 hover:text-primary">Polityka Prywatności / Impressum</Link>
                    <Link href="/datenschutz" className="text-sm text-slate-400 hover:text-primary">Datenschutz (DE)</Link>
                    <Link href="/regulamin" className="text-sm text-slate-400 hover:text-primary">Regulamin</Link>
                </div>

                <div className="flex flex-col space-y-3">
                    <h3 className="font-black text-white">Firma</h3>
                    <div className="text-sm text-slate-400 leading-relaxed">
                        <strong className="text-white">Miami Autocenter GmbH</strong><br />
                        Osterholz-Scharmbeck (Niemcy)<br />
                        <span className="text-xs opacity-70">USt-IdNr.: DE361829942</span>
                    </div>
                </div>

                <div className="flex flex-col space-y-3">
                    <h3 className="font-black text-white">Kontakt</h3>
                    <div className="flex flex-col gap-2">
                        <a href="tel:+4915679264391" className="text-sm text-slate-400 hover:text-primary transition-colors flex items-center gap-3">
                            <span className="text-lg leading-none">🇩🇪</span>
                            <div>
                                <span className="font-bold text-xs uppercase tracking-wider block text-slate-500 mb-0.5">Tel / WhatsApp</span>
                                <span className="font-medium">+49 156 79264391</span>
                            </div>
                        </a>
                        <a href="tel:+48780010848" className="text-sm text-slate-400 hover:text-primary transition-colors flex items-center gap-3">
                            <span className="text-lg leading-none">🇵🇱</span>
                            <div>
                                <span className="font-bold text-xs uppercase tracking-wider block text-slate-500 mb-0.5">Tel / WhatsApp</span>
                                <span className="font-medium">+48 780 010 848</span>
                            </div>
                        </a>
                    </div>
                    <a href="mailto:kontakt@sprowadzoneauto.pl" className="text-sm text-slate-400 hover:text-primary transition-colors mt-2 block">
                        kontakt@sprowadzoneauto.pl
                    </a>
                    <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">
                        Szybki kontakt 7:00–22:00. Poza tymi godzinami zostaw wiadomość.
                    </p>
                    <div className="flex gap-4 mt-4">
                        <a href="https://www.facebook.com/sprowadzoneauto/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#1877F2] transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                        </a>
                        <a href="https://wa.me/4915679264391" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#25D366] transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.64 16.6C16.48 17.03 15.69 17.47 15.17 17.52C14.92 17.55 14.65 17.55 14.37 17.53C14.05 17.51 13.68 17.44 13.29 17.33C11.85 16.92 10.61 16.03 9.77 14.82C9.72 14.76 8.78 13.51 8.28 12.64C7.79 11.78 7.55 10.87 7.57 9.96C7.59 9.07 7.9 8.25 8.44 7.6C8.57 7.45 8.72 7.35 8.89 7.35C9.02 7.35 9.15 7.36 9.27 7.37C9.56 7.39 9.68 7.41 9.87 7.85C9.92 7.97 10.05 8.29 10.21 8.68C10.37 9.06 10.43 9.2 10.45 9.25C10.55 9.47 10.5 9.62 10.37 9.81C10.28 9.95 10.18 10.05 10.05 10.2C9.92 10.35 9.8 10.45 9.69 10.58C9.56 10.72 9.43 10.86 9.58 11.12C9.74 11.4 10.26 12.25 11.02 12.92C11.96 13.76 12.72 14.03 13.06 14.18C13.31 14.28 13.54 14.25 13.72 14.06C13.97 13.78 14.28 13.35 14.54 12.98C14.73 12.72 14.96 12.68 15.22 12.78C15.49 12.87 16.9 13.57 17.18 13.71C17.47 13.85 17.65 13.92 17.72 14.03C17.78 14.15 17.78 14.75 16.64 16.6Z" clipRule="evenodd" /></svg>
                        </a>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-4 md:px-8 mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
                <span>© {new Date().getFullYear()} SprowadzoneAuto.pl represented by Miami Autocenter GmbH. Wszelkie prawa zastrzeżone.</span>
                <span>Amtsgericht Walsrode HRB 211101</span>
            </div>
        </footer>
    )
}
