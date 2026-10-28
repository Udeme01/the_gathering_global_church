// src/data/site.ts
// Single source of truth for church info. Replace every TODO with real details.

export const site = {
  name: "The Gathering Global Church",
  shortName: "TGGC",
  tagline: "The Gathering Global Church",
  description:
    "in faith, by faith. in the spirit, by the spirit.",
  email: "hello@tggc.com", // TODO
  phone: "+234 000 000 0000", // TODO
  address: ["Street address", "Joke-Ayo, Lagos, Nigeria"], // TODO
  serviceTimes: [
    { label: "Sunday Service", time: "Sundays, 9:00 AM" },
    { label: "Midweek Service", time: "Thursdays, 6:00 PM" },
  ],
  socials: [
    {
      label: "Instagram",
      href: "https://www.instagram.com/thegathering_global/",
    },
    {
      label: "YouTube",
      href: "https://www.youtube.com/@thegatheringglobalchurch",
    },
    { label: "Facebook", href: "https://web.facebook.com/thegatheringglobe" },
    { label: "TikTok", href: "https://www.tiktok.com/@the.gathering.glo" },
  ],
};

export const footerLinks = {
  explore: [
    { label: "About us", href: "/about" },
    { label: "Leadership", href: "/leadership" },
    { label: "Units & ministries", href: "/units" },
    { label: "Events", href: "/events" },
    { label: "Sermons", href: "/sermons" },
    { label: "Blog", href: "/blog" },
  ],
  getInvolved: [
    { label: "Give", href: "/give" },
    { label: "Prayer request", href: "/prayer" },
    { label: "Contact us", href: "/contact" },
    { label: "Member login", href: "/login" },
  ],
};
