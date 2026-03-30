// app/page.tsx
"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import SakuraPetals from "./components/SakuraPetals";
import Footer from "./components/Footer";
import HomeLoader from "./components/HomeLoader";
import { useTheme } from "./context/ThemeContext";
import { useHomeLoading } from "./context/HomeLoadingContext";
import { SPONSORS, TIER_COLOR } from "./utils/data";
import { LINKS } from "./components/Navbar";

const GalaxyCanvas = dynamic(() => import("./components/GalaxyCanvas"), {
  ssr: false,
  loading: () => null,
});

const fade = (d = 0) => ({
  initial: { opacity: 0, y: 36 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.1, delay: d, ease: [0.16, 1, 0.3, 1] },
});

export default function Landing() {
  const { theme } = useTheme();
  const { isLoading } = useHomeLoading();
  const doubled = [...SPONSORS, ...SPONSORS];

  return (
    <>
      <AnimatePresence>{isLoading && <HomeLoader />}</AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <CustomCursor />
          <GalaxyCanvas />
          <SakuraPetals />
          <Navbar />
          <main className="relative z-10">
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
                春の星々が目覚める
              </motion.p>
              <motion.h1
                {...fade(0.42)}
                className="font-cinzel font-black t-hero leading-[0.9] tracking-[5px]"
                style={{
                  fontSize: "clamp(3.2rem,11vw,10rem)",
                  filter: `drop-shadow(0 0 50px ${theme.accent}25)`,
                }}
              >
                ATULYAM
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
                Haru no Stars
              </motion.p>
              <motion.div
                {...fade(0.92)}
                className="my-8 flex items-center gap-3"
              >
                <div
                  className="w-16 h-px"
                  style={{
                    background: `linear-gradient(90deg,transparent,${theme.accent}88)`,
                  }}
                />
                <span
                  style={{
                    color: theme.accent,
                    textShadow: `0 0 10px ${theme.accent}`,
                  }}
                >
                  ✦
                </span>
                <div
                  className="w-40 h-px"
                  style={{
                    background: `linear-gradient(90deg,${theme.accent},${theme.accent2},transparent)`,
                  }}
                />
                <span
                  style={{
                    color: theme.accent,
                    textShadow: `0 0 10px ${theme.accent}`,
                  }}
                >
                  ✦
                </span>
                <div
                  className="w-16 h-px"
                  style={{
                    background: `linear-gradient(90deg,${theme.accent2}88,transparent)`,
                  }}
                />
              </motion.div>
              <motion.div
                {...fade(1.2)}
                className="flex flex-col items-center gap-4"
              >
                <div className="flex gap-4">
                  {[
                    { n: "50+", u: "Events" },
                    { n: "3", u: "Days" },
                    { n: "1000+", u: "Stars" },
                  ].map((s, i) => (
                    <div key={i} className="relative">
                      <div
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-px"
                        style={{
                          background: "#ffd700",
                          boxShadow: "0 0 8px #ffd700",
                        }}
                      />
                      <div
                        className="font-cinzel text-4xl leading-none mb-2"
                        style={{
                          color: "#ffd700",
                          textShadow: "0 0 16px rgba(255,215,0,0.5)",
                        }}
                      >
                        {s.n}
                      </div>
                      <div
                        className="font-mono text-[0.55rem] tracking-[3px] uppercase"
                        style={{ color: theme.textDim }}
                      >
                        {s.u}
                      </div>
                    </div>
                  ))}
                </div>
                <motion.div
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Link
                    href="/events"
                    className="inline-block px-12 py-4 font-mono text-[0.75rem] font-bold tracking-[3px] uppercase text-black cursor-none clip"
                    style={{
                      background: `linear-gradient(135deg,${theme.accent},${theme.accent}cc)`,
                      boxShadow: `0 0 28px ${theme.accent}44`,
                    }}
                  >
                    Enter the Cosmos ✦
                  </Link>
                </motion.div>
              </motion.div>
            </section>

            {/* ── SPECIAL FEATURE SECTION ── */}
            <section className="py-24 px-6 relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none">
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full opacity-15"
                  style={{
                    background: `radial-gradient(ellipse,${theme.accent}22,transparent 70%)`,
                  }}
                />
              </div>

              <div className="text-center mb-16 relative z-10">
                <motion.div
                  className="inline-block mb-6"
                  animate={{ rotate: [0, 360] }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <div className="text-6xl">✨</div>
                </motion.div>
                <h2
                  className="font-cinzel font-bold t-accent mb-6"
                  style={{ fontSize: "clamp(2rem,5vw,3.5rem)" }}
                >
                  Where Spring Meets Stars
                </h2>
                <p
                  className="text-xl max-w-3xl mx-auto leading-relaxed"
                  style={{ color: theme.textMid }}
                >
                  Experience the magic of ATULYAM - a three-day celebration
                  where Japanese spring blossoms dance with cosmic energy,
                  creating unforgettable memories under starlit skies.
                </p>
              </div>

              <div className="max-w-6xl mx-auto grid md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="text-center group"
                >
                  <div className="relative mb-6">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="text-5xl"
                    >
                      🌸
                    </motion.div>
                    <div
                      className="absolute inset-0 rounded-full blur-2xl opacity-30"
                      style={{
                        background: `radial-gradient(circle, rgba(255,183,197,0.4), transparent)`,
                      }}
                    />
                  </div>
                  <h3
                    className="font-cinzel font-bold text-2xl mb-3"
                    style={{ color: theme.accent2 }}
                  >
                    Spring Blossoms
                  </h3>
                  <p
                    className="text-lg leading-relaxed"
                    style={{ color: theme.textDim }}
                  >
                    Cherry petals dance in the breeze, painting our festival in
                    shades of pink and white
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: 0.4,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="text-center group"
                >
                  <div className="relative mb-6">
                    <motion.div
                      animate={{ rotate: [0, 180, 360] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="text-5xl"
                    >
                      ⭐
                    </motion.div>
                    <div
                      className="absolute inset-0 rounded-full blur-2xl opacity-30"
                      style={{
                        background: `radial-gradient(circle, ${theme.accent}44, transparent)`,
                      }}
                    />
                  </div>
                  <h3
                    className="font-cinzel font-bold text-2xl mb-3"
                    style={{ color: theme.accent2 }}
                  >
                    Cosmic Energy
                  </h3>
                  <p
                    className="text-lg leading-relaxed"
                    style={{ color: theme.textDim }}
                  >
                    Stars align to illuminate our celebration, filling the air
                    with magic and wonder
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: 0.6,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="text-center group"
                >
                  <div className="relative mb-6">
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="text-5xl"
                    >
                      🎭
                    </motion.div>
                    <div
                      className="absolute inset-0 rounded-full blur-2xl opacity-30"
                      style={{
                        background: `radial-gradient(circle, rgba(255,215,0,0.3), transparent)`,
                      }}
                    />
                  </div>
                  <h3
                    className="font-cinzel font-bold text-2xl mb-3"
                    style={{ color: theme.accent2 }}
                  >
                    Cultural Magic
                  </h3>
                  <p
                    className="text-lg leading-relaxed"
                    style={{ color: theme.textDim }}
                  >
                    Fifty events blend tradition with innovation, creating
                    moments you'll treasure forever
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="text-center group"
                >
                  <div className="relative mb-6">
                    <motion.div
                      animate={{ rotate: [-10, 10, -10] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="text-5xl"
                    >
                      🎤
                    </motion.div>
                    <div
                      className="absolute inset-0 rounded-full blur-2xl opacity-30"
                      style={{
                        background: `radial-gradient(circle, rgba(255,105,180,0.4), transparent)`,
                      }}
                    />
                  </div>
                  <h3
                    className="font-cinzel font-bold text-2xl mb-3"
                    style={{ color: theme.accent2 }}
                  >
                    Stellar Voices
                  </h3>
                  <p
                    className="text-lg leading-relaxed"
                    style={{ color: theme.textDim }}
                  >
                    Amazing singers captivate hearts with melodies that echo
                    through starlit festival nights
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: 1.0,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="text-center group"
                >
                  <div className="relative mb-6">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1], rotate: [0, 360] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="text-5xl"
                    >
                      🎧
                    </motion.div>
                    <div
                      className="absolute inset-0 rounded-full blur-2xl opacity-30"
                      style={{
                        background: `radial-gradient(circle, rgba(138,43,226,0.4), transparent)`,
                      }}
                    />
                  </div>
                  <h3
                    className="font-cinzel font-bold text-2xl mb-3"
                    style={{ color: theme.accent2 }}
                  >
                    Cosmic Beats
                  </h3>
                  <p
                    className="text-lg leading-relaxed"
                    style={{ color: theme.textDim }}
                  >
                    World-class DJs spin electrifying beats that make the cosmos
                    dance under spring skies
                  </p>
                </motion.div>
              </div>
            </section>

            {/* ── SINGLE LINE SCROLLING ARTISTS ── */}
            <section
              className="py-16 px-6 overflow-hidden border-t border-b"
              style={{ borderColor: theme.border }}
            >
              <div className="text-center mb-8">
                <div
                  className="slabel justify-center"
                  style={{ justifyContent: "center", display: "flex" }}
                >
                  All Stars
                </div>
                <h2 className="font-cinzel font-bold t-accent text-2xl">
                  Featured Performers
                </h2>
              </div>

              <div className="overflow-hidden">
                <div className="flex gap-6 w-max animate-slide-l">
                  {["🎤 Singer", "🎧 DJ Girl", "🎤 Local Artist"]
                    .concat(["🎤 Singer", "🎧 DJ Girl", "🎤 Local Artist"])
                    .map((artist, i) => (
                      <div
                        key={i}
                        className="relative flex items-center gap-3 px-8 py-4 border glass whitespace-nowrap cursor-none group overflow-hidden transition-all"
                        style={{ borderColor: theme.border, minWidth: 250 }}
                      >
                        <div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                          style={{
                            background: `linear-gradient(135deg,${theme.accent}08,${theme.accent}04)`,
                          }}
                        />
                        <span className="text-2xl">{artist.split(" ")[0]}</span>
                        <span
                          className="font-cinzel text-base tracking-[2px] font-semibold transition-colors duration-300 group-hover:opacity-80"
                          style={{ color: theme.textDim }}
                        >
                          {artist.split(" ").slice(1).join(" ")}
                        </span>
                      </div>
                    ))}
                </div>
              </div>
            </section>

            {/* ── SPONSORS CAROUSEL ── */}
            <section
              className="py-24 overflow-hidden border-t border-b"
              style={{ borderColor: theme.border }}
            >
              <div className="text-center px-6 mb-12">
                <div
                  className="slabel justify-center"
                  style={{ justifyContent: "center", display: "flex" }}
                >
                  Our Partners
                </div>
                <h2
                  className="font-cinzel font-bold t-accent"
                  style={{ fontSize: "clamp(1.8rem,4vw,3rem)" }}
                >
                  Powered By Stars
                </h2>
              </div>
              <div className="overflow-hidden mb-4">
                <div className="flex gap-4 w-max animate-slide-l">
                  {doubled
                    .filter((s) => s.tier === "title" || s.tier === "platinum")
                    .concat(
                      doubled.filter(
                        (s) => s.tier === "title" || s.tier === "platinum",
                      ),
                    )
                    .map((s, i) => (
                      <SponsorChip key={i} s={s} theme={theme} />
                    ))}
                </div>
              </div>
              <div className="overflow-hidden">
                <div className="flex gap-4 w-max animate-slide-r">
                  {doubled
                    .filter((s) => s.tier === "gold" || s.tier === "associate")
                    .concat(
                      doubled.filter(
                        (s) => s.tier === "gold" || s.tier === "associate",
                      ),
                    )
                    .map((s, i) => (
                      <SponsorChip key={i} s={s} theme={theme} />
                    ))}
                </div>
              </div>
            </section>

            {/* ── CTA ── */}
            <section className="py-28 px-6 flex justify-center">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="relative max-w-3xl w-full text-center glass top-border p-14 md:p-20 overflow-hidden"
              >
                <div className="absolute inset-0 pointer-events-none">
                  <div
                    className="absolute top-0 left-1/4 w-48 h-48 rounded-full blur-3xl opacity-12"
                    style={{
                      background: `radial-gradient(circle,${theme.accent},transparent)`,
                    }}
                  />
                  <div
                    className="absolute bottom-0 right-1/4 w-48 h-48 rounded-full blur-3xl opacity-12"
                    style={{
                      background: `radial-gradient(circle,${theme.accent2},transparent)`,
                    }}
                  />
                </div>
                <div
                  className="slabel justify-center"
                  style={{ justifyContent: "center", display: "flex" }}
                >
                  Join Us
                </div>
                <h2
                  className="font-cinzel font-black t-hero mb-6 leading-[1.1]"
                  style={{ fontSize: "clamp(2rem,5vw,4rem)" }}
                >
                  Ready to Shine?
                </h2>
                <p
                  className="text-lg leading-[1.8] font-light mb-12 max-w-xl mx-auto"
                  style={{ color: theme.textMid }}
                >
                  Fifty events. Three days. One universe. Register now and claim
                  your place among the stars.
                </p>
                <div className="flex gap-5 justify-center flex-wrap">
                  <Link href="/events">
                    <motion.div
                      whileHover={{ scale: 1.04, y: -2 }}
                      whileTap={{ scale: 0.97 }}
                      className="px-12 py-4 font-mono text-[0.75rem] font-bold tracking-[3px] uppercase text-black cursor-none clip"
                      style={{
                        background: `linear-gradient(135deg,${theme.accent},${theme.accent}cc)`,
                        boxShadow: `0 0 28px ${theme.accent}44`,
                      }}
                    >
                      All Events ✦
                    </motion.div>
                  </Link>
                  <Link href="/merch">
                    <motion.div
                      whileHover={{ scale: 1.04, y: -2 }}
                      whileTap={{ scale: 0.97 }}
                      className="px-12 py-4 font-mono text-[0.75rem] tracking-[3px] uppercase cursor-none clip border transition-all"
                      style={{
                        color: theme.accent2,
                        borderColor: `${theme.accent2}44`,
                        background: "transparent",
                      }}
                    >
                      Shop Merch
                    </motion.div>
                  </Link>
                </div>
              </motion.div>
            </section>
          </main>
          <Footer />
        </motion.div>
      )}
    </>
  );
}

function SponsorChip({ s, theme }: { s: (typeof SPONSORS)[0]; theme: any }) {
  const c = TIER_COLOR[s.tier];
  return (
    <div
      className="relative flex items-center gap-3 px-8 py-4 border glass whitespace-nowrap cursor-none group overflow-hidden transition-all"
      style={{ borderColor: theme.border, minWidth: 180 }}
      data-hover
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
        style={{ background: `linear-gradient(135deg,${c}08,${c}04)` }}
      />
      <span
        style={{
          color: c,
          filter: `drop-shadow(0 0 4px ${c})`,
          fontSize: "0.9rem",
        }}
      >
        {s.emoji}
      </span>
      <span
        className="font-cinzel text-sm tracking-[2px] transition-colors duration-300 group-hover:opacity-80"
        style={{ color: theme.textDim }}
      >
        {s.name}
      </span>
    </div>
  );
}
