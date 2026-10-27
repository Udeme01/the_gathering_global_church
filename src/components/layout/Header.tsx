"use client";

import Image from "next/image";
import { Squeeze as Hamburger } from "hamburger-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-brand-950 text-white p-3 fixed top-0 right-0 left-0">
      <section className="flex items-center justify-between">
        <Link href="/">
          <Image
            src="/images/logo/tggc_logo.webp"
            alt="logo"
            width={800}
            height={800}
            className="w-fit h-fit"
          />
        </Link>
        <Hamburger size={20} />
      </section>
    </header>
  );
}
