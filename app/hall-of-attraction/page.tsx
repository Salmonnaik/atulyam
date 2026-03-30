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
    name: "Singer",
    role: "Headline Performer",
    genre: "Bollywood, Playback",
    image: "/artists/javed-ali.jpg",
    description: "Renowned playback singer performing live at ATULYAM 2026.",
    social: {
      instagram: "https://instagram.com/javedali4u",
      youtube: "https://youtube.com/@javedali",
      spotify: "https://spotify.com/artist/javedali",
    },
  },
  {
    name: "DJ Girl",
    role: "Electronic Music Artist",
    genre: "EDM, Dance",
    image: "/artists/dj-girl.jpg",
    description:
      "High-energy DJ set with festival beats and crowd-hyping mixes.",
    social: {
      instagram: "https://instagram.com/djgirl",
      youtube: "https://youtube.com/@djgirl",
      spotify: "https://spotify.com/artist/djgirl",
    },
  },
  {
    name: "Local Artist",
    role: "Special Guest",
    genre: "Fusion",
    image: "/artists/local-artist.jpg",
    description:
      "A local artist bringing fresh talent and vibrant energy to ATULYAM 2026.",
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
                    className="p-6 rounded-lg border transition-all duration-300 h-full flex flex-col"
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
                    <div className="text-center space-y-4 flex-1 flex flex-col items-center justify-start">
                      {/* Artist Image */}
                      <div
                        className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 group-hover:scale-110 transition-transform duration-300"
                        style={{ borderColor: `${theme.accent}80` }}
                      >
                        <div
                          className="w-full h-full flex items-center justify-center text-4xl"
                          style={{
                            backgroundColor: `${theme.accent}22`,
                          }}
                        >
                          🎤
                        </div>
                      </div>

                      {/* Artist Info */}
                      <div className="text-center">
                        <h3
                          className="font-bold text-2xl mb-2"
                          style={{ color: theme.accent2 }}
                        >
                          {artist.name}
                        </h3>
                        <p
                          className="font-semibold text-base mb-1"
                          style={{ color: theme.accent }}
                        >
                          {artist.role}
                        </p>
                        <p
                          className="text-sm mb-3"
                          style={{ color: theme.textDim }}
                        >
                          {artist.genre}
                        </p>
                        <p
                          className="text-sm leading-relaxed mb-4"
                          style={{ color: theme.textMid }}
                        >
                          {artist.description}
                        </p>
                      </div>

                      {/* Social Links */}
                      {artist.social && (
                        <div className="flex justify-center gap-3">
                          {artist.social.instagram && (
                            <motion.a
                              href={artist.social.instagram}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.1, y: -2 }}
                              whileTap={{ scale: 0.95 }}
                              className="cursor-none transition-all"
                              style={{ color: theme.accent2 }}
                              title="Instagram"
                            >
                              <svg
                                className="w-4 h-4"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.405a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
                              </svg>
                            </motion.a>
                          )}
                          {artist.social.youtube && (
                            <motion.a
                              href={artist.social.youtube}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.1, y: -2 }}
                              whileTap={{ scale: 0.95 }}
                              className="cursor-none transition-all"
                              style={{ color: theme.accent2 }}
                              title="YouTube"
                            >
                              <svg
                                className="w-4 h-4"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                              </svg>
                            </motion.a>
                          )}
                          {artist.social.spotify && (
                            <motion.a
                              href={artist.social.spotify}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.1, y: -2 }}
                              whileTap={{ scale: 0.95 }}
                              className="cursor-none transition-all"
                              style={{ color: theme.accent2 }}
                              title="Spotify"
                            >
                              <svg
                                className="w-4 h-4"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                              </svg>
                            </motion.a>
                          )}
                        </div>
                      )}
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
