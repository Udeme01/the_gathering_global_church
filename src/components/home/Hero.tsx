import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative flex min-h-svh items-center overflow-hidden bg-transparent pb-16 pt-24 text-white">
      {/* 1. Background image (fills the whole section) */}
      <Image
        src="/images/ch6.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-bottom"
      />

      {/* 2. Dark purple layer so the white text is easy to read */}
      <div className="absolute inset-0 bg-brand-950/60" aria-hidden="true" />

      {/* 3. Content sits on top of the image and the layer */}
      <div className="relative mx-auto w-full max-w-7xl px-6">
        <h1 className="font-display text-6xl uppercase leading-[0.95] tracking-tight md:text-8xl lg:text-9xl">
          Come as you are. <span className="text-sun">Leave changed.</span>
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85 md:text-xl">
          Everyone is welcome. Join us for worship, community, and a fresh
          start.
        </p>

        {/* 4. Two buttons: stacked on phones, side by side from 640px up */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="rounded-full bg-sun px-8 py-4 text-center font-semibold text-brand-950 transition hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Plan a visit
          </Link>
          <Link
            href="/sermons"
            className="rounded-full border border-white/40 px-8 py-4 text-center font-semibold text-white transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Watch sermons
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
