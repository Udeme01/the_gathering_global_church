import Image from "next/image";
import Link from "next/link";

// The 3 doors. To change a card, you only edit this list.
const cards = [
  {
    label: "Who we are",
    title: "About us",
    cta: "Learn more",
    href: "/about",
    image: "/images/welcome/about.jpg",
    alt: "Church members worshipping together",
  },
  {
    label: "Join our community",
    title: "Connect with us",
    cta: "Plan a visit",
    href: "/connect",
    image: "/images/welcome/connect.jpg",
    alt: "Smiling church members outside",
  },
  {
    label: "What's happening",
    title: "Events",
    cta: "See events",
    href: "/events",
    image: "/images/welcome/events.jpg",
    alt: "A church event",
  },
];

export default function WelcomeSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        {/* Small label (badge) */}
        <span className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gray-700">
          Welcome to [Your Church Name]
        </span>

        {/* Heading and short lines: write your own words here */}
        <h2 className="mt-4 text-4xl font-extrabold uppercase md:text-6xl">
          [Your heading]
        </h2>
        <p className="mt-4 max-w-md text-gray-600">
          [One or two short lines for a first-time visitor]
        </p>

        {/* Grid: 1 column on phones, 3 columns from tablet up */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group relative block h-96 overflow-hidden rounded-lg md:h-[28rem]"
            >
              {/* Photo fills the whole card */}
              <Image
                src={card.image}
                alt={card.alt}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
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
                  <h3 className="mt-1 text-3xl font-semibold">{card.title}</h3>
                </div>
                <span className="text-sm font-bold uppercase tracking-wide">
                  {card.cta} →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
