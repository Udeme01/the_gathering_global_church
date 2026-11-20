import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getEventBySlug } from "@/data/events";

// Turns "2026-12-17" into "Thursday, 17 December 2026".
function formatLongDate(date: string) {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ eventSlug: string }>;
}) {
  // The folder is named [eventSlug], so the value arrives under that name.
  const { eventSlug } = await params;
  const event = await getEventBySlug(eventSlug);

  // No event with this slug? Show the normal 404 page.
  if (!event) notFound();

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4">
        <Link
          href="/events"
          className="text-sm font-bold uppercase tracking-wide text-gray-600 hover:text-black"
        >
          ← All events
        </Link>

        <h1 className="mt-6 font-display text-4xl font-medium uppercase md:text-6xl">
          {event.title}
        </h1>

        <div className="relative mt-8 h-64 w-full overflow-hidden rounded-lg md:h-[28rem]">
          <Image
            src={event.image}
            alt={event.alt}
            fill
            priority
            sizes="(min-width: 896px) 896px, 100vw"
            className="object-cover"
          />
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-gray-500">
              Date
            </p>
            <p className="mt-1 font-semibold">{formatLongDate(event.date)}</p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-gray-500">
              Time
            </p>
            <p className="mt-1 font-semibold">{event.time}</p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-gray-500">
              Where
            </p>
            <p className="mt-1 font-semibold">{event.location}</p>
          </div>
        </div>

        <p className="mt-8 max-w-2xl leading-relaxed text-gray-700">
          {event.description}
        </p>
      </div>
    </section>
  );
}
