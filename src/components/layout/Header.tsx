"use client";

import Image from "next/image";
import { Squeeze as Hamburger } from "hamburger-react";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-brand-950 text-white p-3 fixed top-0 right-0 left-0 z-50">
      <section className="flex items-center justify-between">
        <Link href="/">
          <Image
            src="/images/logo/tggc_logo.webp"
            alt="The Gathering Global Church logo"
            width={800}
            height={800}
            className="w-auto h-10"
          />
        </Link>
        <div className="md:hidden">
          <Hamburger
            toggled={open}
            toggle={setOpen}
            size={20}
            label="Toggle Menu"
          />
        </div>
      </section>
    </header>
  );
}
