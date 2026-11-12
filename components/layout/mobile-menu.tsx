"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { Logo } from "@/components/layout/logo";
import { Button } from "@/components/ui/button";
import { useLockBodyScroll } from "@/hooks/use-lock-body-scroll";
import { navLinks, siteConfig } from "@/lib/site-config";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  useLockBodyScroll(open);

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-50 lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <button
            type="button"
                aria-label="Fermer le menu"
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navigation"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 34 }}
            className="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col bg-white px-6 py-6 shadow-2xl"
          >
            <div className="flex items-center justify-between">
              <Logo />
              <button
                type="button"
                onClick={onClose}
            aria-label="Fermer le menu"
                className="rounded-full p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <nav className="mt-10 flex flex-1 flex-col gap-1" aria-label="Navigation principale">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className="rounded-xl px-4 py-3 text-base font-medium text-slate-700 transition-colors hover:bg-blue-50 hover:text-blue-700"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="mt-auto flex flex-col gap-3 border-t border-slate-100 pt-6">
              <div className="flex flex-col items-center gap-1 text-center text-sm font-medium">
                <a href={siteConfig.phoneHref} className="text-slate-600 hover:text-blue-700">
                  <span className="text-xs text-slate-400">Standard: </span>{siteConfig.phone}
                </a>
                <a href={siteConfig.altPhoneHref} className="text-teal-600 hover:text-teal-700">
                  <span className="text-xs text-slate-400">Urgences: </span>{siteConfig.altPhone}
                </a>
              </div>
              <Button href="#contact" size="lg" onClick={onClose} className="w-full">
                Prendre rendez-vous
              </Button>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
