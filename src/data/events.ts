// The shape of one event. Every event must have these fields.
// A database table will have the same columns later.
export type ChurchEvent = {
  id: string;
  eventSlug: string; // used in the link, e.g. /events/youth-night
  title: string;
  date: string; // always "YYYY-MM-DD"
  time: string;
  location: string;
  description: string;
  image: string;
  alt: string;
};

// PLACEHOLDER events. Replace them with the real ones.
const events: ChurchEvent[] = [
  {
    id: "1",
    eventSlug: "holy-fire-camp-meeting",
    title: "HFCM - The Unstoppable Move of God",
    date: "2026-12-17",
    time: "9:00 AM",
    location: "Main Auditorium",
    description:
      "A 4-day camp meeting - The Unstoppable Move of God. Come as you are.",
    image: "/images/ch10.jpg",
    alt: "Church members worshipping",
  },
  {
    id: "2",
    eventSlug: "year-end-thanksgiving",
    title: "Year-End Thanksgiving",
    date: "2027-01-01",
    time: "9:00 AM",
    location: "Main Auditorium",
    description: "A special service to thank God for the year.",
    image: "/images/worship2.jpg",
    alt: "Church members at a thanksgiving service",
  },
  {
    id: "3",
    eventSlug: "new-year-prayer",
    title: "New Year Prayer",
    date: "2027-01-03",
    time: "6:00 AM",
    location: "Main Auditorium",
    description: "Start the year together in prayer.",
    image: "/images/ch1.jpg",
    alt: "Church members praying together",
  },
];

// THE SWITCH POINT.
// The homepage only calls this function. Later, you replace the inside of
// this function with a database query, and nothing else changes.
// It is "async" because a database call takes time, so we prepare for that now.
export async function getUpcomingEvents(limit = 3): Promise<ChurchEvent[]> {
  // Today's date in Lagos, written as YYYY-MM-DD.
  const today = new Date().toLocaleDateString("en-CA", {
    timeZone: "Africa/Lagos",
  });

  return events
    .filter((event) => event.date >= today) // drop events already past
    .sort((a, b) => a.date.localeCompare(b.date)) // soonest first
    .slice(0, limit); // keep only the first 3
}

// Finds ONE event by its slug. Returns null if there is no match.
export async function getEventBySlug(
  slug: string,
): Promise<ChurchEvent | null> {
  return events.find((event) => event.eventSlug === slug) ?? null;
}

// Returns ALL events, split into two lists:
// upcoming (soonest first) and past (most recent first).
// Same switch-point idea: later, only the inside of this function changes.
export async function getAllEvents(): Promise<{
  upcoming: ChurchEvent[];
  past: ChurchEvent[];
}> {
  const today = new Date().toLocaleDateString("en-CA", {
    timeZone: "Africa/Lagos",
  });

  const upcoming = events
    .filter((event) => event.date >= today)
    .sort((a, b) => a.date.localeCompare(b.date));

  const past = events
    .filter((event) => event.date < today)
    .sort((a, b) => b.date.localeCompare(a.date));

  return { upcoming, past };
}
