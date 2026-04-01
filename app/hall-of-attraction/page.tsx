"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import CustomCursor from "../components/CustomCursor";
import SakuraPetals from "../components/SakuraPetals";
import Footer from "../components/Footer";
import { useTheme } from "../context/ThemeContext";

const GalaxyCanvas = dynamic(() => import("../components/GalaxyCanvas"), {
  ssr: false,
  loading: () => null,
});

const fade = (d = 0) => ({
  initial: { opacity: 0, y: 36 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.1, delay: d, ease: [0.16, 1, 0.3, 1] },
});

interface Artist {
  name: string;
  role: string;
  genre: string;
  image: string;
  description: string;
  social?: {
    instagram?: string;
    youtube?: string;
    spotify?: string;
  };
}

const artists: Artist[] = [
  {
    name: "Taba Chake",
    role: "Headline Performer",
    genre: "Bollywood, Playback",
    image: "/artists/javed-ali.jpg",
    description: "Renowned artist performing live at ATULYAM 2026.",
    social: {
      instagram: "https://instagram.com/javedali4u",
      youtube: "https://youtube.com/@javedali",
      spotify: "https://spotify.com/artist/javedali",
    },
  },
  {
    name: "Dj Jennie",
    role: "Electronic Music Artist",
    genre: "EDM, Dance",
    image: "/artist/Dj jenee.png",
    description:
      "High-energy DJ set with festival beats and crowd-hyping mixes.",
    social: {
      instagram: "https://instagram.com/djgirl",
      youtube: "https://youtube.com/@djgirl",
      spotify: "https://spotify.com/artist/djgirl",
    },
  },
  {
    name: "Ngurang Julie",
    role: "Special Guest",
    genre: "Fusion",
    image: "/artists/local-artist.jpg",
    description:
      "A special guest artist bringing fresh talent and vibrant energy to ATULYAM 2026.",
    social: {
      instagram: "https://instagram.com/localartist",
      youtube: "https://youtube.com/@localartist",
      spotify: "https://spotify.com/artist/localartist",
    },
  },
];

export default function HallOfAttraction() {
  const { theme } = useTheme();

  return (
    <>
      <CustomCursor />
      <GalaxyCanvas />
      <SakuraPetals />
      <Navbar />
      <main className="relative z-10 min-h-screen">
        {/* ── HERO ── */}
        <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full opacity-20"
              style={{
                background: `radial-gradient(ellipse,${theme.bg2},transparent 70%)`,
              }}
            />
            <div
              className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[350px] rounded-full opacity-10"
              style={{
                background: `radial-gradient(ellipse,${theme.accent}44,transparent 70%)`,
              }}
            />
          </div>

          <motion.p
            {...fade(0.12)}
            className="font-jp text-sm tracking-[10px] mb-5"
            style={{ color: `${theme.accent2}80` }}
          >
            芸術家の殿堂
          </motion.p>
          <motion.h1
            {...fade(0.42)}
            className="font-cinzel font-black t-hero leading-[0.9] tracking-[5px]"
            style={{
              fontSize: "clamp(3.2rem,11vw,10rem)",
              filter: `drop-shadow(0 0 50px ${theme.accent}25)`,
            }}
          >
            HALL OF ATTRACTION
          </motion.h1>
          <motion.p
            {...fade(0.72)}
            className="font-jp font-light tracking-[14px] mt-4"
            style={{
              fontSize: "clamp(1rem,3vw,2rem)",
              color: `${theme.accent2}cc`,
              textShadow: `0 0 28px ${theme.accent2}55`,
            }}
          >
            アーティスト
          </motion.p>
        </section>

        {/* ── ARTISTS SECTION ── */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div {...fade(0.2)} className="text-center mb-16">
              <h2
                className="font-cinzel font-bold text-4xl tracking-wider mb-6"
                style={{ color: theme.accent }}
              >
                Featured Artists
              </h2>
              <p
                className="text-lg max-w-3xl mx-auto"
                style={{ color: theme.text }}
              >
                Experience the magic of live performances by renowned artists
                from across the country. From soulful melodies to electrifying
                beats, our Hall of Attraction promises an unforgettable musical
                journey.
              </p>
            </motion.div>

            {/* Artists Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {artists.map((artist, index) => (
                <motion.div
                  key={artist.name}
                  {...fade(0.3 + index * 0.1)}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group cursor-pointer h-full"
                >
                  <div
                    className="rounded-lg border transition-all duration-300 h-full overflow-hidden"
                    style={{
                      borderColor: theme.border,
                      backgroundColor: `${theme.bg}22`,
                      boxShadow: `0 0 0 1px ${theme.border}22`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = `0 0 30px ${theme.accent}44`;
                      e.currentTarget.style.borderColor = theme.accent;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = `0 0 0 1px ${theme.border}22`;
                      e.currentTarget.style.borderColor = theme.border;
                    }}
                  >
                    <div className="relative w-full h-[540px] bg-black">
                      <Image
                        src={artist.image}
                        alt={artist.name}
                        fill
                        className="object-contain p-3"
                      />
                    </div>
                    <div
                      className="px-5 py-4 text-center border-t"
                      style={{ borderColor: `${theme.border}66` }}
                    >
                      <p
                        className="font-cinzel text-lg tracking-[4px] uppercase"
                        style={{
                          color: index === 1 ? theme.accent2 : theme.textDim,
                          textShadow:
                            index === 1
                              ? `0 0 18px ${theme.accent2}55`
                              : "none",
                        }}
                      >
                        {index === 1 ? "Dj Jennie" : "Coming Soon"}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
