// src/components/layout/MenuOverlay.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { footerLinks, site } from "@/data/site";

type MenuOverlayProps = {
  open: boolean;
  onClose: () => void;
};

// Big links on the left: Home + the footer's "Explore" links + Give
const mainLinks = [
  { label: "Home", href: "/" },
  ...footerLinks.explore,
  { label: "Give", href: "/give" },
];

// Small links on the right: the footer's "Get involved" list, minus Give
const secondaryLinks = footerLinks.getInvolved.filter(
  (link) => link.href !== "/give",
);

export default function MenuOverlay({ open, onClose }: MenuOverlayProps) {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // Lock page scroll while the menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close with the Escape key
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  return (
    <div
      id="site-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      aria-hidden={!open}
      className={`fixed inset-0 z-40 overflow-y-auto bg-brand-950 text-white transition-all duration-300 ${
        open ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <div className="mx-auto grid min-h-full max-w-[1600px] content-center gap-12 px-6 pb-12 pt-28 lg:grid-cols-2 lg:gap-16">
        {/* Big display links */}
        <nav aria-label="Main">
          <ul>
            {mainLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={onClose}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={`block font-display text-5xl uppercase leading-[1.1] tracking-tight transition-colors hover:text-sun sm:text-6xl lg:text-7xl ${
                    isActive(link.href) ? "text-sun" : "text-white"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Info columns */}
        <div className="grid content-center gap-10 sm:grid-cols-2">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-white/60">
              Get involved
            </h2>
            <ul className="mt-4 space-y-3">
              {secondaryLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="text-white/80 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-white/60">
              Visit us
            </h2>
            <ul className="mt-4 space-y-3 text-white/80">
              {site.serviceTimes.map((s) => (
                <li key={s.label}>
                  <span className="text-white">{s.label}</span>
                  <br />
                  {s.time}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-white/60">
              Connect
            </h2>
            <ul className="mt-4 space-y-3 text-white/80">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="transition hover:text-white"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="transition hover:text-white"
                >
                  {site.phone}
                </a>
              </li>
            </ul>
          </div>

          {/* Socials and copyright */}
          <div className="sm:col-span-2">
            <ul className="flex flex-wrap gap-3">
              {site.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/20 px-4 py-2 text-sm transition hover:bg-white/10"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-white/50">
              © {new Date().getFullYear()} {site.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
