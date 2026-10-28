"use client";

import Image from "next/image";
import Link from "next/link";
import { Squeeze as Hamburger } from "hamburger-react";
import { useCallback, useState } from "react";
import DesktopNav from "./DesktopNav";
import MenuOverlay from "./MenuOverlay";

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 bg-brand-950 px-6 py-3 text-white">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between">
          <Link href="/" onClick={close}>
            <Image
              src="/images/logo/tggc_logo.webp"
              alt="The Gathering Global Church logo"
              width={800}
              height={800}
              priority
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop: inline links */}
          <DesktopNav menuOpen={open} />

          <div>
            <Hamburger
              toggled={open}
              toggle={setOpen}
              size={20}
              label={open ? "Close menu" : "Open menu"}
            />
          </div>
        </div>
      </header>

      <MenuOverlay open={open} onClose={close} />
    </>
  );
}
