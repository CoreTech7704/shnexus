"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { navigation } from "@/src/data/navigation";
import { cn } from "@/src/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <nav
        aria-label="Primary navigation"
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b transition-all duration-500",
          scrolled
            ? "border-white/6 bg-[#09090B]/90 shadow-[0_1px_40px_rgba(0,0,0,0.4)] backdrop-blur-2xl"
            : "border-transparent bg-transparent",
        )}
      >
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
          {/* Logo */}
          <a
            href="#home"
            aria-label="sh Nexus home"
            className="group flex items-center gap-2"
          >
            <div className="flex size-7 items-center justify-center rounded-lg bg-linear-to-br from-[#6D5EF5] to-[#00C2FF] transition-opacity group-hover:opacity-90">
              <span className="font-heading text-[11px] font-bold text-white">
                SN
              </span>
            </div>

            <span className="font-heading text-[15px] font-bold tracking-tight text-white">
              sh Nexus
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-7 md:flex">
            {navigation.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] text-white/40 transition-colors duration-200 hover:text-white/80"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden rounded-xl bg-linear-to-br from-[#6D5EF5] to-[#5B4FE8] px-4 py-2 text-[13px] font-semibold text-white shadow-[0_0_20px_rgba(109,94,245,0.35),0_4px_12px_rgba(0,0,0,0.4)] transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90 active:scale-[0.97] md:inline-flex"
          >
            Start Your Project
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="flex size-10 items-center justify-center rounded-lg text-white/50 transition-colors hover:bg-white/5 hover:text-white md:hidden"
            aria-label={
              mobileOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileOpen((current) => !current)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          id="mobile-navigation"
          className={cn(
            "overflow-hidden border-t bg-[#09090B]/95 backdrop-blur-2xl transition-[max-height,opacity] duration-300 md:hidden",
            mobileOpen
              ? "max-h-125 border-white/[0.07] opacity-100"
              : "max-h-0 border-transparent opacity-0",
          )}
        >
          <div className="space-y-1 px-6 py-5">
            {navigation.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block rounded-lg px-3 py-2.5 text-sm text-white/50 transition-colors hover:bg-white/4 hover:text-white"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-4 flex w-full items-center justify-center rounded-xl bg-linear-to-br from-[#6D5EF5] to-[#5B4FE8] px-5 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(109,94,245,0.3)]"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
