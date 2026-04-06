// app/events/page.tsx
"use client";
import dynamic from "next/dynamic";
import Navbar from "@/app/components/Navbar";
import CustomCursor from "@/app/components/CustomCursor";
import SakuraPetals from "@/app/components/SakuraPetals";
import PageHero from "@/app/components/PageHero";
import EventCard from "./components/EventCard";
import Footer from "@/app/components/Footer";
import { EVENTS } from "@/app/utils/data";
import { EventItem } from "@/types";

const GalaxyCanvas = dynamic(() => import("@/app/components/GalaxyCanvas"), {
  ssr: false,
  loading: () => null,
});
const EVENT_POSTERS = [
  {
    image: "/events/face_painting.jpg.jpeg",
    eventId: "face-painting-competition",
    registrationLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSevLevdFKPQoY0MZLhb6fX3bYprwsBtg7Vx_vuh8CZ0rfoduw/viewform",
  },
  {
    image: "/events/Debate.jpg.jpeg",
    eventId: "debate-competition",
    registrationLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSdYCIq5GeM06DkJ0qfZEzqdDdQ6dKxEsKQ5Xm0pSgP2D-37hw/viewform",
  },
  {
    image: "/events/Poetry.jpg.jpeg",
    eventId: "poetry-competition",
    registrationLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSdlVGCcEdgp086V3D5yEnBfUY6L7dqaViVfFszTEjj8LqtsPw/viewform",
  },
  {
    image: "/events/pottery.jpg.jpeg",
    eventId: "pottery-painting",
    registrationLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSfq4ojiyuifzq1bjzcHzWQew4SP6baRkrSb3BRzdWb8TdjYEg/viewform",
  },
  {
    image: "/events/soloduo_dance.jpg.jpeg",
    eventId: "solo-duo-dance-competition",
    registrationLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSelAK3NqQ4FZUZTllV1FlS2VAwsDDuWur3RIHcTeehFAUQ57Q/viewform",
  },
  {
    image: "/events/Battle_of_Bands.jpg.jpeg",
    eventId: "battle-of-bands",
    name: "Battle of Bands",
    registrationLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSfZoxI1yuHNxI0vy161bxR6Y50W9bNlzp1HCRetNoSigsVmLQ/viewform",
    color: "#ef4444",
  },
  {
    image: "/events/Writing.jpg.jpeg",
    eventId: "writing-competition",
    name: "Writing Competition",
    registrationLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSeuNnjxWxA_ykeXr1c8ELsuW1vWtDzbvrqilhUtYihCcKEW4A/viewform",
    color: "#0ea5e9",
  },
  {
    image: "/events/Situational_play.jpg.jpeg",
    eventId: "situation-slam",
    name: "Situation Slam",
    registrationLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSdlJYFpE8hMoTFX9c-nDk0Zx-uvS0vxfJInvsOFuND7YOb2AA/viewform",
    color: "#22c55e",
  },
  {
    image: "/events/cosplay.jpg.jpeg",
    eventId: "cosplay-competition",
    name: "Cosplay Competition",
    registrationLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSdtM21FiQhm5DsagoAML5PGhCEhg_lqrs4Lb1OwyEQs6i-vwA/viewform",
    color: "#a855f7",
  },
  {
    image: "/events/Voice_of_atulyam.jpg.jpeg",
    eventId: "solo-singing-competition",
    registrationLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSdrxYmVpqZt-F_4eSJ62hvAD-WsZSVO4xPIojCzHkvmWOSboA/viewform",
  },
  {
    image: "/events/Group_dance.jpg.jpeg",
    eventId: "group-dance-competition",
    registrationLink: "",
  },
  {
    image: "/events/Traditional_grounp_dance.jpg.jpeg",
    eventId: "traditional-dance-competition",
    registrationLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSelAK3NqQ4FZUZTllV1FlS2VAwsDDuWur3RIHcTeehFAUQ57Q/viewform",
  },
  {
    image: "/events/Story_recital.jpg.jpeg",
    eventId: "woven-words-story-recital",
    registrationLink:
      "https://docs.google.com/forms/d/e/1FAIpQLScbLlzVP-bSo1WVfmDbeUvFkHkCM5fjFz684YU0RxgjpX-tfQ/viewform",
  },
  {
    image: "/events/photography.jpg.jpeg",
    eventId: "on-spot-photography-competition",
    registrationLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSd6PICHYjgl_xYviM48-ue1HiU5jFQFy3gj4CxASxrVM4SKdg/viewform",
  },
  {
    image: "/events/cinematography.jpg.jpeg",
    eventId: "cinematography-competition",
    registrationLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSd6PICHYjgl_xYviM48-ue1HiU5jFQFy3gj4CxASxrVM4SKdg/viewform",
  },
];

export default function EventsPage() {
  const eventsById = new Map(EVENTS.map((event) => [event.id, event]));

  const displayEvents: EventItem[] = EVENT_POSTERS.map((poster, index) => {
    const matched = eventsById.get(poster.eventId);

    if (matched) {
      return {
        ...matched,
        id: `event-poster-${index + 1}`,
        image: poster.image,
        registrationLink: poster.registrationLink || matched.registrationLink,
      };
    }

    return {
      id: `event-poster-${index + 1}`,
      icon: "🎭",
      name: poster.name || `Event ${index + 1}`,
      tagline: "ATULYAM Event",
      description: "Event details and registration.",
      date: "Day 2",
      venue: "NIT CAMPUS",
      prize: "TBA",
      fee: "TBA",
      color: poster.color || "#ff88aa",
      day: 2,
      tags: ["Event"],
      image: poster.image,
      registrationLink: poster.registrationLink,
    };
  });

  return (
    <>
      <CustomCursor />
      <GalaxyCanvas subtle />
      <SakuraPetals />
      <Navbar />
      <main className="relative z-10">
        <PageHero
          kana="六つの舞台"
          title="Choose Your Stage"
          breadcrumb="Events"
          subtitle="Five arenas · Infinite glory"
          stat1={{ n: "6", u: "Categories" }}
          stat2={{ n: "50+", u: "Sub-Events" }}
          stat3={{ n: "₹1.1L", u: "Total Prize" }}
        />

        {/* Grid */}
        <section className="py-16 px-6 lg:px-16">
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {displayEvents.map((e, i) => (
              <EventCard key={e.id} event={e} index={i} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
