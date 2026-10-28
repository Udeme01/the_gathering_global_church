// src/components/layout/DesktopNav.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { footerLinks } from "@/data/site";

type DesktopNavProps = {
  menuOpen: boolean;
};

export default function DesktopNav({ menuOpen }: DesktopNavProps) {
  const pathname = usePathname();

  return (
    // hidden by default (mobile), becomes a flex row from 1024px up
    <nav
      aria-label="Main"
      className={`hidden items-center gap-8 lg:flex ${menuOpen ? "invisible opacity-0" : "visible opacity-100"}`}
    >
      <ul className="flex items-center gap-8">
        {footerLinks.explore.map((link) => {
          const active = pathname.startsWith(link.href);

          return (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`relative py-2 text-[12px] font- uppercase tracking-wider transition-colors hover:text-sun after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:bg-sun after:transition-transform hover:after:scale-x-100 ${
                  active ? "text-sun after:scale-x-100" : "text-white"
                }`}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>

      <Link
        href="/give"
        className="rounded-full bg-sun px-6 py-2.5 text-sm font-semibold text-brand-950 transition hover:brightness-95"
      >
        Give
      </Link>
    </nav>
  );
}
