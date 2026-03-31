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

const GalaxyCanvas = dynamic(() => import("@/app/components/GalaxyCanvas"), {
  ssr: false,
  loading: () => null,
});
const EVENT_POSTERS = [
  "/events/face_painting.jpg.jpeg",
  "/events/Debate.jpg.jpeg",
  "/events/Poetry.jpg.jpeg",
  "/events/pottery.jpg.jpeg",
  "/events/soloduo_dance.jpg.jpeg",
  "/events/Battle_of_Bands.jpg.jpeg",
  "/events/Writing.jpg.jpeg",
  "/events/Situational_play.jpg.jpeg",
  "/events/cosplay.jpg.jpeg",
  "/events/Voice_of_atulyam.jpg.jpeg",
  "/events/Group_dance.jpg.jpeg",
  "/events/Traditional_grounp_dance.jpg.jpeg",
  "/events/Story_recital.jpg.jpeg",
  "/events/photography.jpg.jpeg",
  "/events/cinematography.jpg.jpeg",
];

export default function EventsPage() {
  const displayEvents = EVENT_POSTERS.map((poster, index) => ({
    ...EVENTS[index % EVENTS.length],
    id: `event-poster-${index + 1}`,
    image: poster,
  }));

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
