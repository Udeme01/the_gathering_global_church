import type { Metadata } from "next";
import EventCard from "@/components/events/EventCard";
import { getAllEvents } from "@/data/events";

// OLD:
// import React from 'react'
// const page = () => {
//   return <div>events page</div>
// }
// export default page

// The text that shows in the browser tab.
export const metadata: Metadata = {
  title: "Events | The Gathering Global Church",
};

export default async function EventsPage() {
  const { upcoming, past } = await getAllEvents();

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <span className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-black">
          What&apos;s happening
        </span>

        <h1 className="mt-4 font-display text-4xl font-medium uppercase md:text-6xl">
          Events
        </h1>
        <p className="mt-2 max-w-md text-sm text-black/80">
          Everything coming up at TGGC. Pick one and come join us.
        </p>

        {/* UPCOMING */}
        {upcoming.length === 0 ? (
          <p className="mt-10 text-gray-600">
            No events right now. Please check back soon.
          </p>
        ) : (
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {upcoming.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        )}

        {/* PAST: this block only shows if there is at least one past event */}
        {past.length > 0 && (
          <div className="mt-20">
            <h2 className="font-display text-3xl font-medium uppercase md:text-4xl">
              Past events
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {past.map((event) => (
                <EventCard key={event.id} event={event} isPast />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
