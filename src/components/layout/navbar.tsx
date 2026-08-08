"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { navigation } from "@/src/data/navigation";
import { cn } from "@/src/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

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

  useEffect(() => {
    const sections = navigation
      .map((link) => document.querySelector(link.href))
      .filter((section): section is HTMLElement => section !== null);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      () => {
        const viewportAnchor = window.innerHeight * 0.3;

        const visibleSections = sections
          .map((section) => {
            const rect = section.getBoundingClientRect();

            return {
              id: section.id,
              distance: Math.abs(rect.top - viewportAnchor),
              isVisible:
                rect.top <= viewportAnchor && rect.bottom >= viewportAnchor,
            };
          })
          .filter((section) => section.isVisible)
          .sort((a, b) => a.distance - b.distance);

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].id);
        }
      },
      {
        rootMargin: "-10% 0px -70% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
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
          <Link
            href="#home"
            aria-label="sh Nexus home"
            className="group flex items-center gap-2"
            onClick={() => setActiveSection("home")}
          >
            <div className="flex size-7 items-center justify-center">
              <Image
                src="/images/logo.png"
                alt="sh Nexus"
                width={120}
                height={32}
                priority
                className="h-7 w-auto"
              />
            </div>

            <span className="font-heading text-[15px] font-bold tracking-tight text-white">
              SH Nexus
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-7 md:flex">
            {navigation.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setActiveSection(sectionId)}
                  className={cn(
                    "relative text-[13px] transition-colors duration-200",
                    isActive
                      ? "text-white"
                      : "text-white/40 hover:text-white/80",
                  )}
                >
                  {link.label}

                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-2 left-1/2 size-1 -translate-x-1/2 rounded-full bg-[#6D5EF5] shadow-[0_0_8px_rgba(109,94,245,0.8)]"
                    />
                  )}
                </a>
              );
            })}
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
            {navigation.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => {
                    setActiveSection(sectionId);
                    setMobileOpen(false);
                  }}
                  className={cn(
                    "block rounded-lg px-3 py-2.5 text-sm transition-colors duration-200",
                    isActive
                      ? "bg-[#6D5EF5]/10 text-white"
                      : "text-white/50 hover:bg-white/4 hover:text-white",
                  )}
                >
                  {link.label}
                </a>
              );
            })}

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
