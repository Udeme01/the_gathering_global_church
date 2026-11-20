import Image from "next/image";
import Link from "next/link";
import type { ChurchEvent } from "@/data/events";

// Turns "2026-12-05" into { day: "5", month: "Dec" } for the date badge.
function formatDate(date: string) {
  const d = new Date(`${date}T00:00:00Z`);
  return {
    day: d.toLocaleDateString("en-GB", { day: "numeric", timeZone: "UTC" }),
    month: d.toLocaleDateString("en-GB", { month: "short", timeZone: "UTC" }),
  };
}

// "isPast" fades the card, so old events look different from coming ones.
export default function EventCard({
  event,
  isPast = false,
}: {
  event: ChurchEvent;
  isPast?: boolean;
}) {
  const { day, month } = formatDate(event.date);

  return (
    <Link
      href={`/events/${event.eventSlug}`}
      className="group block overflow-hidden rounded-lg border border-gray-200 bg-white transition-shadow hover:shadow-lg"
    >
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={event.image}
          alt={event.alt}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className={`object-cover transition-transform duration-500 group-hover:scale-105 ${
            isPast ? "grayscale" : ""
          }`}
        />
        <div className="absolute left-4 top-4 rounded-md bg-white px-3 py-2 text-center leading-none">
          <p className="text-2xl font-bold">{day}</p>
          <p className="mt-1 text-xs font-bold uppercase tracking-wide">
            {month}
          </p>
        </div>
      </div>

      <div className="p-5">
        <p className="text-xs font-bold uppercase tracking-wide text-gray-500">
          {event.time} · {event.location}
        </p>
        <h3 className="mt-2 text-2xl font-semibold">{event.title}</h3>
        <p className="mt-2 text-sm text-gray-600">{event.description}</p>
        <span className="mt-4 inline-block text-sm font-bold uppercase tracking-wide">
          {isPast ? "See details" : "Learn more"} →
        </span>
      </div>
    </Link>
  );
}
