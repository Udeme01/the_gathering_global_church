"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
// import {
//   Navigation,
//   Pagination,
//   FreeMode,
//   Scrollbar,
//   A11y,
// } from "swiper/modules";

import { FreeMode, Mousewheel } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

const cards = [
  {
    label: "Who we are",
    title: "About us",
    cta: "Learn more",
    href: "/about",
    // image: "/images/welcome/about.jpg",
    image: "/images/ch7.jpg",
    alt: "Church members worshipping together",
  },
  {
    label: "Join our community",
    title: "Connect with us",
    cta: "Plan a visit",
    href: "/connect",
    // image: "/images/welcome/connect.jpg",
    image: "/images/ch2.jpg",
    alt: "Smiling church members outside",
  },
  {
    label: "What's happening",
    title: "Events",
    cta: "See events",
    href: "/events",
    // image: "/images/welcome/events.jpg",
    image: "/images/ch6.jpg",
    alt: "A church event",
  },
];

export default function WelcomeSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        {/* Small label (badge) */}
        <span className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-black">
          Welcome to TGGC
        </span>

        {/* Heading and short lines: write your own words here */}
        <h2 className="mt-4 text-4xl font-medium font-display uppercase md:text-6xl">
          WELCOME HOME
        </h2>
        <p className="mt-1 max-w-md text-black/80 text-sm ml-1">
          We&apos;ve been waiting for you.
        </p>

        {/* Grid: 1 column on phones, 3 columns from tablet up */}
        {/* grid gap-6 md:grid-cols-3 */}
        <Swiper
          className="mt-10 w-full"
          modules={[Mousewheel, FreeMode]}
          mousewheel={{ forceToAxis: true }}
          // modules={[Navigation, Pagination, Scrollbar, FreeMode, A11y]}
          // navigation
          // pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          freeMode={{ enabled: true, sticky: true }}
          slidesPerView={1.32}
          spaceBetween={16}
          breakpoints={{
            768: { slidesPerView: 3, spaceBetween: 10 },
          }}
        >
          {cards.map((card) => (
            <SwiperSlide key={card.href}>
              <Link
                href={card.href}
                className="group relative block h-[500px] overflow-hidden md:h-[28rem]"
              >
                {/* Photo fills the whole card */}
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 85vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Dark layer so the white text is readable */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/70" />

                {/* Text on top of the photo */}
                <div className="absolute inset-0 flex flex-col justify-between p-5 text-white">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide">
                      {card.label}
                    </p>
                    <h3 className="mt-1 text-3xl font-semibold">
                      {card.title}
                    </h3>
                  </div>
                  <span className="text-sm font-bold uppercase tracking-wide">
                    {card.cta} →
                  </span>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
