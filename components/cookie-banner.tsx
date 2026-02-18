"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { Cookie, Settings } from "lucide-react";

export function CookieBanner() {
  const [show, setShow] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [hasConsent, setHasConsent] = useState<string | null>(null);

  useEffect(() => {
    const consented = localStorage.getItem("cookie-consent");
    setHasConsent(consented);
    if (!consented) {
      setShow(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShow(false);
    setHasConsent("accepted");
    // Initialize Google Analytics after consent
    if (typeof window !== "undefined") {
      const s = document.createElement("script");
      s.src = "https://www.googletagmanager.com/gtag/js?id=G-VPZB549MMW";
      s.async = true;
      document.head.appendChild(s);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const w = window as any;
      w.dataLayer = w.dataLayer || [];
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      function gtag(...args: any[]) {
        w.dataLayer.push(args);
      }
      gtag("js", new Date());
      gtag("config", "G-VPZB549MMW");
    }
  };

  const handleReject = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setShow(false);
    setShowSettings(false);
    setHasConsent("rejected");
  };

  const handleOpenSettings = () => {
    setShowSettings(true);
  };

  const handleRevokeConsent = () => {
    localStorage.removeItem("cookie-consent");
    setHasConsent(null);
    setShow(true);
    setShowSettings(false);
    // Reload to remove tracking scripts
    if (typeof window !== "undefined") {
      window.location.reload();
    }
  };

  return (
    <>
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
                <h4 className="font-bold text-white text-sm uppercase tracking-wider flex items-center justify-center md:justify-start gap-2">
                  <Cookie className="w-4 h-4 text-primary" /> Ciasteczka
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Używamy plików cookies, aby zapewnić najlepszą jakość
                  korzystania z naszej strony.
                  <a
                    href="/polityka-prywatnosci"
                    className="text-primary hover:underline ml-1"
                  >
                    Polityka Prywatności
                  </a>
                  .
                </p>
              </div>
              <div className="flex gap-2 shrink-0">
                <Button
                  onClick={handleReject}
                  variant="ghost"
                  className="text-slate-400 hover:text-white hover:bg-slate-800 font-bold text-sm"
                >
                  Odrzuć
                </Button>
                <Button
                  onClick={handleAccept}
                  className="bg-primary text-primary-foreground font-bold hover:bg-primary/90"
                >
                  Akceptuję
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cookie Settings Button - pokazuje się gdy user już podjął decyzję */}
      <AnimatePresence>
        {hasConsent && !show && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={handleOpenSettings}
            className="fixed bottom-4 right-4 z-40 bg-slate-800/90 backdrop-blur-md border border-slate-700 p-3 rounded-full shadow-lg hover:bg-slate-700 transition-colors group"
            aria-label="Zarządzaj ustawieniami cookies"
          >
            <Settings className="w-5 h-5 text-slate-400 group-hover:text-primary transition-colors" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Settings Modal */}
      <AnimatePresence>
        {showSettings && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowSettings(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-slate-950 border border-slate-800 rounded-2xl p-6 max-w-md w-full shadow-2xl"
            >
              <h3 className="text-xl font-black text-white mb-4 uppercase tracking-tight">
                Ustawienia Cookies
              </h3>
              <div className="space-y-4 mb-6">
                <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
                  <p className="text-sm text-slate-300 font-bold mb-2">
                    Status:
                    <span
                      className={
                        hasConsent === "accepted"
                          ? "text-green-400 ml-2"
                          : "text-red-400 ml-2"
                      }
                    >
                      {hasConsent === "accepted"
                        ? "Zaakceptowane"
                        : "Odrzucone"}
                    </span>
                  </p>
                  <p className="text-xs text-slate-400">
                    {hasConsent === "accepted"
                      ? "Analityka i śledzenie są włączone."
                      : "Tylko niezbędne cookies."}
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <Button
                  onClick={handleRevokeConsent}
                  variant="outline"
                  className="flex-1 border-slate-700 text-slate-300 hover:bg-slate-800"
                >
                  Zmień decyzję
                </Button>
                <Button
                  onClick={() => setShowSettings(false)}
                  className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Zamknij
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
