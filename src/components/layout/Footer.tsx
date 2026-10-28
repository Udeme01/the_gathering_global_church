// src/components/layout/Footer.tsx
import Image from "next/image";
import Link from "next/link";
import { site, footerLinks } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-brand-950 text-white">
      {/* 1. Call-to-action band */}
      <div className="mx-auto max-w-[1600px] px-6 py-20 md:py-28">
        <h2 className="font-display text-5xl uppercase leading-[0.95] tracking-tight md:text-7xl">
          {site.tagline}
        </h2>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/give"
            className="rounded-full bg-sun px-8 py-4 font-semibold text-brand-950 transition hover:brightness-95"
          >
            Give
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-white/30 px-8 py-4 font-semibold transition hover:bg-white/10"
          >
            Plan a visit
          </Link>
        </div>
      </div>

      {/* 2. Info columns */}
      <div className="border-t border-white/10">
        <div className="mx-auto grid max-w-[1600px] gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo/tggc_logo.webp"
                alt={`${site.name} logo`}
                width={800}
                height={800}
                className="h-14 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-xs text-white/70 uppercase font-display tracking-wider">
              {site.description}
            </p>
          </div>

          {/* Explore */}
          <nav aria-label="Explore">
            <h3 className="font-semibold text-sun">Explore</h3>
            <ul className="mt-4 space-y-3 text-white/70">
              {footerLinks.explore.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Get involved */}
          <nav aria-label="Get involved">
            <h3 className="font-semibold text-sun">Get involved</h3>
            <ul className="mt-4 space-y-3 text-white/70">
              {footerLinks.getInvolved.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Visit and contact */}
          <div>
            <h3 className="font-semibold text-sun">Visit us</h3>
            <ul className="mt-4 space-y-2 text-white/70">
              {site.serviceTimes.map((s) => (
                <li key={s.label}>
                  <span className="text-white">{s.label}</span>
                  <br />
                  {s.time}
                </li>
              ))}
            </ul>
            <address className="mt-6 space-y-1 not-italic text-white/70">
              {site.address.map((line) => (
                <p key={line}>{line}</p>
              ))}
              <p>
                <a
                  href={`mailto:${site.email}`}
                  className="transition hover:text-white"
                >
                  {site.email}
                </a>
              </p>
              <p>
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="transition hover:text-white"
                >
                  {site.phone}
                </a>
              </p>
            </address>

            <ul className="mt-6 flex flex-wrap gap-3 gap-y-6">
              {site.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/20 px-6 py-2 text-sm transition hover:bg-white/10"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* 3. Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-4 px-6 py-6 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-6">
            <li>
              <Link href="/privacy" className="transition hover:text-white">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="transition hover:text-white">
                Terms
              </Link>
            </li>
            <li>
              Built by{" "}
              <a
                href="www.linkedin.com/in/emmanuel-udeme"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 transition hover:text-white"
              >
                Emmanuel Udeme
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
