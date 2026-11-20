const services = [
  {
    name: "Sunday Service",
    day: "Sundays",
    time: "9:00 AM",
  },
  {
    name: "Midweek Service",
    day: "Thursdays",
    time: "6:00 PM",
  },
];

const address = "Old Otta road, Joke Ayo, Lagos, Nigeria";
const mapsLink = "https://maps.app.goo.gl/j9b2YimPCD1zfipaA";

export default function ServiceTimesSection() {
  return (
    <section className="bg-black py-16 text-white md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        {/* Small label */}
        <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
          Visit us
        </span>

        {/* Write your own heading and line */}
        <h2 className="mt-4 font-display text-4xl font-medium uppercase md:text-6xl">
          Join us this week
        </h2>
        <p className="mt-2 max-w-md text-sm text-white/80 ml-1">
          we&apos;re waiting for you, God has blessed you.
        </p>

        {/* Grid: stacked on phones, 2 columns from tablet up */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {/* LEFT: the service times */}
          <div className="space-y-4">
            {services.map((service) => (
              <div
                key={service.name}
                className="rounded-lg border border-white/15 p-6"
              >
                <p className="text-xs font-bold uppercase tracking-wide text-yellow-400">
                  {service.day}
                </p>
                <h3 className="mt-1 text-2xl font-semibold">{service.name}</h3>
                <p className="mt-2 text-3xl font-bold">{service.time}</p>
              </div>
            ))}
          </div>

          {/* RIGHT: the address and directions button */}
          <div className="flex flex-col justify-between rounded-lg bg-white/5 p-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-yellow-400">
                Where to find us
              </p>
              <p className="mt-3 text-2xl font-semibold leading-snug">
                {address}
              </p>
              <iframe
                title="Map showing The Gathering Global Church"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.67739605057366!2d3.2560169558785366!3d6.666946141993856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b909fff61e751%3A0x7897434d7bd54fb2!2sThe%20Gathering%20Global%20Church!5e0!3m2!1sen!2sng!4v1795166759751!5m2!1sen!2sng"
                className="mt-6 h-64 w-full rounded-lg border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>

            <a
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block w-full rounded-full bg-yellow-400 px-6 py-3 text-center text-sm font-bold uppercase tracking-wide text-black transition-colors hover:bg-yellow-300 md:w-auto"
            >
              Get directions →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
