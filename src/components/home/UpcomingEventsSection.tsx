import Image from "next/image";
import Link from "next/link";
import { getUpcomingEvents } from "@/data/events";

// Turns "2026-12-05" into { day: "5", month: "Dec" } for the date badge.
function formatDate(date: string) {
  const d = new Date(`${date}T00:00:00Z`);
  return {
    day: d.toLocaleDateString("en-GB", { day: "numeric", timeZone: "UTC" }),
    month: d.toLocaleDateString("en-GB", { month: "short", timeZone: "UTC" }),
  };
}

export default async function UpcomingEventsSection() {
  const events = await getUpcomingEvents(3);

  return (
    <section className="bg-brand-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <span className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-black">
          Coming up
        </span>

        <h2 className="mt-4 font-display text-4xl font-medium uppercase md:text-6xl">
          Upcoming events
        </h2>
        <p className="mt-2 max-w-md text-sm text-black/80">
          Here&apos;s what&apos;s happening at TGGC soon. Come and join us.
        </p>

        {events.length === 0 ? (
          // Shown when there is no upcoming event
          <p className="mt-10 text-gray-600">
            No events right now. Please check back soon.
          </p>
        ) : (
          <div className="mt-10 grid gap-2 md:grid-cols-3">
            {events.map((event) => {
                const { day, month } = formatDate(event.date);
                console.log(event)
              return (
                <Link
                  key={event.id}
                  href={`/events/${event.eventSlug}`}
                  className="group block overflow-hidden rounded-lg border border-gray-200 bg-white transition-shadow hover:shadow-lg"
                >
                  {/* Photo with the date badge on top */}
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.alt}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute left-4 top-4 rounded-md bg-white px-3 py-2 text-center leading-none">
                      <p className="text-2xl font-bold">{day}</p>
                      <p className="mt-1 text-xs font-bold uppercase tracking-wide">
                        {month}
                      </p>
                    </div>
                  </div>

                  {/* Text */}
                  <div className="p-5">
                    <p className="text-xs font-bold uppercase tracking-wide text-gray-500">
                      {event.time} · {event.location}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold">
                      {event.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600">
                      {event.description}
                    </p>
                    <span className="mt-4 inline-block text-sm font-bold uppercase tracking-wide">
                      Learn more →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        )}

        <div className="mt-10">
          <Link
            href="/events"
            className="inline-block rounded-full bg-black px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-black/80"
          >
            See all events →
          </Link>
        </div>
      </div>
    </section>
  );
}
