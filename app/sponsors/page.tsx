// app/sponsors/page.tsx
"use client";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Navbar from "@/app/components/Navbar";
import CustomCursor from "@/app/components/CustomCursor";
import SakuraPetals from "@/app/components/SakuraPetals";
import PageHero from "@/app/components/PageHero";
import Footer from "@/app/components/Footer";
import { SPONSORS, TIER_COLOR } from "@/app/utils/data";
import { useTheme } from "@/app/context/ThemeContext";

type PartnerSponsor = {
  name: string;
  tier: string;
  color: string;
  logo: string;
  className?: string;
};

const PARTNER_GROUPS: Array<{ title: string; sponsors: PartnerSponsor[] }> = [
  {
    title: "Official Music Streaming Partner",
    sponsors: [
      {
        name: "jio saavn",
        tier: "Official Music Streaming Partner",
        color: "text-[#0ae3e7]",
        logo: "/sponers-logo/JioSaavn.png",
        className: "h-24 w-full",
      },
    ],
  },
  {
    title: "Gaming Partners",
    sponsors: [
      {
        name: "Nodwin gaming",
        tier: "Gaming Partner",
        color: "text-[#0ae3e7]",
        logo: "/sponers-logo/nodwingaming.png",
        className: "h-24 w-full",
      },
      {
        name: "Krafton",
        tier: "Gaming Partner",
        color: "text-[#0ae3e7]",
        logo: "/sponers-logo/KRAFTON.png",
        className: "h-24 w-full",
      },
      {
        name: "College campus tour",
        tier: "Gaming Partner",
        color: "text-[#0ae3e7]",
        logo: "/sponers-logo/campustour.png",
        className: "h-24 w-full",
      },
    ],
  },
  {
    title: "Travel Partner",
    sponsors: [
      {
        name: "Ease my trip",
        tier: "Travel Partner",
        color: "text-[#0ae3e7]",
        logo: "/sponers-logo/easemyTrip.png",
        className: "h-24 w-full",
      },
    ],
  },
  {
    title: "Official Platform Partner",
    sponsors: [
      {
        name: "Geeks for Geeks",
        tier: "Official Platform Partner",
        color: "text-[#0ae3e7]",
        logo: "/sponers-logo/gfg.png",
        className: "h-60 w-full",
      },
    ],
  },
  {
    title: "Hackathon Partner",
    sponsors: [
      {
        name: "Unstop",
        tier: "Hackathon Partner",
        color: "text-[#9430e1]",
        logo: "/sponers-logo/Unstop.png",
        className: "h-24 w-full",
      },
    ],
  },
  {
    title: "Beverage Partner",
    sponsors: [
      {
        name: "Coca Cola",
        tier: "Beverage Partner",
        color: "text-[#1c28ae]",
        logo: "/sponers-logo/cocacola.png",
        className: "h-32 w-full",
      },
    ],
  },
  {
    title: "Water Filter Event Sponsor",
    sponsors: [
      {
        name: "Urban Water Filter",
        tier: "Water Filter Event Sponsor",
        color: "text-[#03edf9]",
        logo: "/sponers-logo/urbanwater.jpg",
        className: "h-32 w-full",
      },
    ],
  },
  {
    title: "Hospitality Partner",
    sponsors: [
      {
        name: "todo hotel",
        tier: "Hospitality Partner",
        color: "text-[#cf1cb1]",
        logo: "/sponers-logo/todohotel.png",
        className: "h-32 w-full",
      },
    ],
  },
  {
    title: "Media Partner",
    sponsors: [
      {
        name: "echo of arunachal",
        tier: "Media Partner",
        color: "text-[#4facfe]",
        logo: "/sponers-logo/echo.jpeg",
        className: "h-32 w-full",
      },
    ],
  },
  {
    title: "Merchandise Partner",
    sponsors: [
      {
        name: "Dopamine",
        tier: "Merchandise Partner",
        color: "text-[#0ae3e7]",
        logo: "/sponers-logo/dopamine.png",
        className: "h-45 w-full",
      },
    ],
  },
  {
    title: "Our Partners",
    sponsors: [
      {
        name: "NE Departmental",
        tier: "Partner",
        color: "text-[#4facfe]",
        logo: "/sponers-logo/ne.png",
        className: "h-48 w-full",
      },
      {
        name: "Renu Beverages",
        tier: "Partner",
        color: "text-[#4facfe]",
        logo: "/sponers-logo/renu.jpeg",
        className: "h-48 w-full",
      },
    ],
  },
];

const EXTRA_PARTNER_COUNT = PARTNER_GROUPS.reduce(
  (acc, group) => acc + group.sponsors.length,
  0,
);

const GalaxyCanvas = dynamic(() => import("@/app/components/GalaxyCanvas"), {
  ssr: false,
  loading: () => null,
});

const TIER_ORDER: Array<"title" | "platinum" | "gold" | "associate"> = [
  "title",
  "platinum",
  "gold",
  "associate",
];
const TIER_LABEL = {
  title: "Title Sponsor",
  platinum: "Platinum Partners",
  gold: "Gold Partners",
  associate: "Associate Partners",
};
const TIER_SIZE = {
  title: "text-[0.9rem]",
  platinum: "text-[0.82rem]",
  gold: "text-[0.78rem]",
  associate: "text-[0.72rem]",
};
const ALL_SPONSORS = SPONSORS;

export default function SponsorsPage() {
  const { theme } = useTheme();

  return (
    <>
      <CustomCursor />
      <GalaxyCanvas subtle />
      <SakuraPetals />
      <Navbar />
      <main className="relative z-10">
        <PageHero
          kana="スポンサー"
          title="Our Sponsors"
          breadcrumb="Sponsors"
          subtitle="The constellations powering Atulyam"
          stat1={{ n: `${ALL_SPONSORS.length}`, u: "Partners" }}
          stat2={{ n: "4", u: "Tiers" }}
        />

        {/* Tier sections */}
        <section className="py-16 px-6 lg:px-20 max-w-[1200px] mx-auto">
          {TIER_ORDER.map((tier) => {
            const tierSponsors = ALL_SPONSORS.filter((s) => s.tier === tier);
            if (!tierSponsors.length) return null;
            const accentColor = TIER_COLOR[tier];
            return (
              <motion.div
                key={tier}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="mb-16 last:mb-0"
              >
                {/* Tier header */}
                <div className="flex items-center gap-4 mb-8">
                  <div
                    className="h-px flex-1"
                    style={{
                      background: `linear-gradient(90deg,${accentColor}60,transparent)`,
                    }}
                  />
                  <div
                    className="flex items-center gap-2 px-5 py-2 border rounded-full font-mono text-[0.6rem] tracking-[3px] uppercase"
                    style={{
                      color: accentColor,
                      borderColor: `${accentColor}40`,
                      background: `${accentColor}0a`,
                    }}
                  >
                    <span style={{ textShadow: `0 0 8px ${accentColor}` }}>
                      ✦
                    </span>
                    {TIER_LABEL[tier]}
                  </div>
                  <div
                    className="h-px flex-1"
                    style={{
                      background: `linear-gradient(270deg,${accentColor}60,transparent)`,
                    }}
                  />
                </div>

                {/* Sponsor cards */}
                <div
                  className={`grid gap-8 ${tier === "title" ? "grid-cols-1 max-w-2xl mx-auto" : tier === "platinum" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : tier === "gold" ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4" : "grid-cols-2 md:grid-cols-3 lg:grid-cols-4"}`}
                >
                  {tierSponsors.map((s, i) => (
                    <motion.div
                      key={s.name}
                      initial={{ opacity: 0, scale: 0.94 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-30px" }}
                      transition={{ delay: i * 0.08, duration: 0.7 }}
                      className="relative glass-card border overflow-hidden cursor-none group transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl"
                      style={{ borderColor: theme.border }}
                      data-hover
                    >
                      {/* Hover glow */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                        style={{
                          background: `radial-gradient(circle at center,${accentColor}15,transparent 70%)`,
                        }}
                      />

                      {/* Card content */}
                      <div className="p-8 text-center">
                        {/* Text block instead of logo */}
                        <div className="flex justify-center mb-6">
                          <div
                            className="w-24 h-24 rounded-2xl flex items-center justify-center text-center px-2 flex-shrink-0 border-2 shadow-lg"
                            style={{
                              background: `${accentColor}15`,
                              borderColor: `${accentColor}30`,
                            }}
                          >
                            <span
                              className="font-mono text-[0.58rem] tracking-[1px] uppercase"
                              style={{ color: accentColor }}
                            >
                              {s.name}
                            </span>
                          </div>
                        </div>

                        {/* Sponsor name */}
                        <h3
                          className="font-cinzel font-bold text-xl mb-2 tracking-wide"
                          style={{ color: theme.text }}
                        >
                          {s.name}
                        </h3>

                        {/* Tier badge */}
                        <div
                          className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-4"
                          style={{
                            backgroundColor: `${accentColor}20`,
                            color: accentColor,
                            border: `1px solid ${accentColor}40`,
                          }}
                        >
                          <span className="mr-1">✦</span>
                          {tier === "title"
                            ? "Title Sponsor"
                            : tier === "platinum"
                              ? "Platinum"
                              : tier === "gold"
                                ? "Gold"
                                : "Associate"}
                        </div>

                        {/* Description */}
                        <p
                          className="text-sm leading-relaxed mb-6"
                          style={{ color: theme.textMid }}
                        >
                          {s.desc}
                        </p>

                        {/* Partner badge for higher tiers */}
                        {tier !== "associate" && (
                          <div
                            className="flex items-center justify-center pt-4 border-t"
                            style={{ borderColor: theme.border }}
                          >
                            <span
                              className="font-mono text-xs tracking-wider uppercase"
                              style={{ color: theme.textDim }}
                            >
                              Official Partner
                            </span>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}

          {/* Additional sponsor groups (temporary) */}
          {PARTNER_GROUPS.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.9,
                delay: groupIndex * 0.04,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mb-16 last:mb-0"
            >
              <div className="flex items-center gap-4 mb-8">
                <div
                  className="h-px flex-1"
                  style={{
                    background: `linear-gradient(90deg,${theme.accent2}66,transparent)`,
                  }}
                />
                <div
                  className="flex items-center gap-2 px-5 py-2 border rounded-full font-mono text-[0.6rem] tracking-[3px] uppercase"
                  style={{
                    color: theme.accent2,
                    borderColor: `${theme.accent2}40`,
                    background: `${theme.accent2}0a`,
                  }}
                >
                  <span style={{ textShadow: `0 0 8px ${theme.accent2}` }}>
                    ✦
                  </span>
                  {group.title}
                </div>
                <div
                  className="h-px flex-1"
                  style={{
                    background: `linear-gradient(270deg,${theme.accent2}66,transparent)`,
                  }}
                />
              </div>

              <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {group.sponsors.map((sponsor, index) => (
                  <motion.div
                    key={`${group.title}-${sponsor.name}`}
                    initial={{ opacity: 0, scale: 0.94 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ delay: index * 0.08, duration: 0.7 }}
                    className="relative glass-card border overflow-hidden cursor-none group transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl"
                    style={{ borderColor: theme.border }}
                    data-hover
                  >
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at center,${theme.accent2}15,transparent 70%)`,
                      }}
                    />

                    <div className="p-8 text-center">
                      <div className="flex justify-center mb-6">
                        <div
                          className="w-full max-w-[220px] rounded-2xl flex items-center justify-center border-2 shadow-lg p-4"
                          style={{
                            background: `${theme.accent2}10`,
                            borderColor: `${theme.accent2}30`,
                          }}
                        >
                          <span
                            className="font-cinzel text-lg tracking-[2px] uppercase"
                            style={{ color: theme.textDim }}
                          >
                            {sponsor.name}
                          </span>
                        </div>
                      </div>

                      <h3
                        className={`font-cinzel font-bold text-xl mb-2 tracking-wide ${sponsor.color}`}
                      >
                        {sponsor.name}
                      </h3>

                      <div
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium"
                        style={{
                          backgroundColor: `${theme.accent2}20`,
                          color: theme.accent2,
                          border: `1px solid ${theme.accent2}40`,
                        }}
                      >
                        <span className="mr-1">✦</span>
                        {sponsor.tier}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </section>

        {/* Become a sponsor CTA */}
        <section className="py-20 px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="max-w-2xl mx-auto text-center glass-card border p-12 relative overflow-hidden"
            style={{ borderColor: theme.border }}
          >
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{
                background: `linear-gradient(90deg,transparent,${theme.accent},${theme.accent2},transparent)`,
              }}
            />
            <div className="text-4xl mb-4">🤝</div>
            <h2
              className="font-cinzel font-bold text-2xl mb-4"
              style={{ color: theme.text }}
            >
              Become a Sponsor
            </h2>
            <p
              className="font-light leading-relaxed mb-8 max-w-md mx-auto"
              style={{ color: theme.textMid }}
            >
              Partner with Atulyam and place your brand at the heart of a
              vibrant, creative, 3,000+ student cultural universe.
            </p>
            <motion.a
              href="mailto:sponsors@atulyam.edu"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block px-12 py-4 font-mono text-[0.72rem] font-bold tracking-[3px] uppercase text-black cursor-none clip no-underline"
              style={{
                background: `linear-gradient(135deg,${theme.accent},${theme.accent}cc)`,
                boxShadow: `0 0 28px ${theme.accent}44`,
              }}
            >
              Get in Touch ✦
            </motion.a>
          </motion.div>
        </section>
      </main>
    </>
  );
}
