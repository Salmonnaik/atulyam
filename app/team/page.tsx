"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import CustomCursor from "../components/CustomCursor";
import SakuraPetals from "../components/SakuraPetals";
import Footer from "../components/Footer";
import { useTheme } from "../context/ThemeContext";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  social?: {
    instagram?: string;
    linkedin?: string;
    github?: string;
  };
}

interface TeamCategory {
  key: string;
  title: string;
  emoji: string;
  members: TeamMember[];
}

const GalaxyCanvas = dynamic(() => import("../components/GalaxyCanvas"), {
  ssr: false,
  loading: () => null,
});

const fade = (d = 0) => ({
  initial: { opacity: 0, y: 36 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.1, delay: d, ease: [0.16, 1, 0.3, 1] },
});

const teamCategories: TeamCategory[] = [
  {
    key: "chairman",
    title: "Atulyam Chairman",
    emoji: "👨‍💼",
    members: [
      {
        name: "Dr. Koji Sambyo",
        role: "Chairman",
        image: "/factuly/Dr. Koj Sambyo.jpg",
      },
    ],
  },
  {
    key: "faculty_coordinator",
    title: "Faculty Committee",
    emoji: "🧑‍🏫",
    members: [
      {
        name: "Dr. Jumrik Taipodia",
        role: "Faculty Coordinator, Dance Club",
        image: "/factuly/Dr. Jumrik Taipodia.jpg",
      },
      {
        name: "Dr. Nabam Rich",
        role: "Faculty Coordinator, Theatre Club",
        image: "/factuly/Dr. Nabam Rich.jpg",
      },
      {
        name: "Dr. Brajagopal Datta",
        role: "Faculty Coordinator, Media and Photography Club",
        image: "/factuly/Dr. Brajagopal Datta.jpg",
      },
      {
        name: "Dr. Yang Saring",
        role: "Faculty Coordinator, Art Club (Painting, Drawing, Classical Art, Fashion)",
        image: "/factuly/Dr. Yang Saring.jpg",
      },
      {
        name: "Dr. Vijayakumar",
        role: "Literary Club (Book, Poetry, Oratory, Humour, Writing, Debate)",
        image: "/factuly/vijay-kumar.jpeg",
      },
      {
        name: "Dr. Kimjolly Lhouvum",
        role: "Nodal Officer, Cultural Clubs",
        image: "/factuly/Dr Kimjolly Lhouvum.jpg",
      },
    ],
  },
  {
    key: "head_coordinator",
    title: "Head Coordinator",
    emoji: "⭐",
    members: [
      {
        name: "Rahul Mengnia",
        role: "Head Coordinator",
        image: "/team/rahul.JPG",
        social: {
          instagram:
            "https://www.instagram.com/t.mengnia?igsh=MWhmOHFvdGR1bGI1cg==",
        },
      },
    ],
  },
  {
    key: "assistant_head_coordinator",
    title: "Assistant Head Coordinator",
    emoji: "✨",
    members: [
      {
        name: "Lishi Teshi",
        role: "Assistant Head Coordinator",
        image: "/team/lishi.jpeg",
        social: {
          instagram:
            "https://www.instagram.com/lishi_teshi?igsh=Nm9zMzA1emtyZg==",
        },
      },
      {
        name: "Dungwa Mossang",
        role: "Assistant Head Coordinator",
        image: "/team/Dungwamossang.jpg",
        social: {
          instagram: "https://instagram.com/dungamosang",
        },
      },
    ],
  },
  {
    key: "web",
    title: "Web Team",
    emoji: "💻",
    members: [
      {
        name: "Banoth Charan",
        role: "Devolper",
        image: "/team/banothcharan.jpg",
        social: {
          instagram:
            "https://www.instagram.com/charan_cherry_212?igsh=MWpyZHR1MnVvbnlrNw==",
          linkedin:
            "https://www.linkedin.com/in/banoth-charan?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          github: "https://github.com/Charancherry-code",
        },
      },
      {
        name: "Salmon Naik",
        role: "Devolper",
        image: "/team/salmon.jpeg",
        social: {
          instagram:
            "https://www.instagram.com/dream_boy_salmon?igsh=MW1pMDBncnRzMm1xbw==",
          linkedin: "https://www.linkedin.com/in/salmon-naik-boda",
          github: "https://github.com/Salmonnaik",
        },
      },
      {
        name: "Karan Kumar Sah",
        role: "Devolper",
        image: "/team/karan.jpeg",
        social: {
          instagram: "https://instagram.com/krotrn.ks",
          linkedin: "https://linkedin.com/in/krotrn",
          github: "https://github.com/krotrn",
        },
      },
      {
        name: "Harshal Tondare",
        role: "Devolper",
        image: "/team/harshal.jpeg",
        social: {
          instagram: "https://www.instagram.com/harsh_3/",
          linkedin: "https://www.linkedin.com/in/harshal-tondare/",
          github: "https://github.com/Harshal-Tondare",
        },
      },
    ],
  },
  {
    key: "finance_head",
    title: "Finance Head",
    emoji: "💰",
    members: [
      {
        name: "Kipa Gungyo",
        role: "Finance Head",
        image: "/team/kipa.jpeg",
        social: {
          instagram:
            "https://www.instagram.com/kipagungyo?igsh=MXV4bzQxeXpoc2ltaw==",
        },
      },
    ],
  },
  {
    key: "event_coordinators",
    title: "Event Head",
    emoji: "🎯",
    members: [
      {
        name: "Bashu Singh",
        role: "Event Head",
        image: "/team/bashu.jpeg",
        social: {
          instagram:
            "https://www.instagram.com/vashu._.irl?igsh=aGloODE4Z3JtZzM1",
        },
      },
      {
        name: "Siddhant",
        role: "Event Head",
        image: "/team/sidhant .jpeg",
        social: {
          instagram:
            "https://www.instagram.com/siddhant_hendry?igsh=N2VsNDR1a2s5am52",
        },
      },
      {
        name: "Ankit Jha",
        role: "Event Head",
        image: "/team/ankit.png",
        social: {
          instagram: "https://instagram.com/ankitjha",
        },
      },
    ],
  },
  {
    key: "sponsorship",
    title: "Sponsorship Team",
    emoji: "🏆",
    members: [
      {
        name: "John Dalbera",
        role: "Sponsorship Team",
        image: "/team/jhon.jpeg",
        social: {
          instagram:
            "https://www.instagram.com/johndalbera?igsh=MWw3ODUzdXgxeDJ4Zg%3D%3D&utm_source=qr",
        },
      },
      {
        name: "Gerna Panyang",
        role: "Sponsorship Team",
        image: "/team/gerna.jpeg",
        social: {
          instagram:
            "https://www.instagram.com/gernap_?igsh=MWZzdDM2aXdsdHNucw%3D%3D&utm_source=qr",
        },
      },
      {
        name: "Kago Doding",
        role: "Sponsorship Team",
        image: "/team/kago.jpeg",
        social: {
          instagram: "https://instagram.com/kagododing",
        },
      },
      {
        name: "Uma Shanker",
        role: "Sponsorship Team",
        image: "/team/uma.png",
        social: {
          instagram:
            "https://www.instagram.com/nitian_umashankar?igsh=cXZ4ZWpvYmM2eTBw",
        },
      },
    ],
  },
  {
    key: "pr",
    title: "PR Team",
    emoji: "📣",
    members: [
      {
        name: "Aba Sonam",
        role: "PR Team",
        image: "/team/sonam.jpeg",
        social: {
          instagram:
            "https://www.instagram.com/sonams_journal?igsh=MThnaXV1NTQweThrbQ%3D%3D&utm_source=qr",
        },
      },
      {
        name: "James Tamang",
        role: "PR Team",
        image: "/team/james.jpg",
        social: {
          instagram:
            "https://www.instagram.com/james_____tamang?igsh=MWV4MnNlanUwMHVuMA==",
        },
      },
      {
        name: "Pansa Bhai",
        role: "PR Team",
        image: "/team/pansa.jpeg",
        social: {
          instagram: "https://instagram.com/chaiputpansa",
        },
      },
    ],
  },
  {
    key: "editing",
    title: "Media and Graphics Head",
    emoji: "✂️",
    members: [
      {
        name: "Nong Own Emphum",
        role: "Media and Graphics Head",
        image: "/team/nong.jpg",
        social: {
          instagram: "https://instagram.com/nongownemphum",
        },
      },
      {
        name: "Rahman",
        role: "Media and Graphics Head",
        image: "/team/rahman.jpeg",
        social: {
          instagram:
            "https://www.instagram.com/attaur515?igsh=MTY1NW5rdmxjZDlsbQ%3D%3D&utm_source=qr",
        },
      },
    ],
  },
  {
    key: "editing11",
    title: "Design Head",
    emoji: "🧑‍🎨",
    members: [
      {
        name: "Nada Karlo",
        role: "Design Head",
        image: "/team/karlo.jpeg",
        social: {
          instagram: "https://instagram.com/nadakarlo",
        },
      },
      {
        name: "Nabam Agu",
        role: "Design Head",
        image: "/team/nabam agu.jpeg",
        social: {
          instagram:
            "https://www.instagram.com/agu_nabam_27?igsh=a3cwNjVuc29pNjV3",
        },
      },
    ],
  },
  {
    key: "volunteer_incharge",
    title: "Volunteer Head",
    emoji: "🧑‍🤝‍🧑",
    members: [
      {
        name: "Sagar Yadav",
        role: "Volunteer Head",
        image: "/team/sagar.jpeg",
        social: {
          instagram: "https://www.instagram.com/lifeof_sgr/",
        },
      },
      {
        name: "Nayato Mengnia",
        role: "Volunteer Head",
        image: "/team/nayto.JPG",
        social: {
          instagram: "https://instagram.com/nayatomengnia",
        },
      },
      {
        name: "Nabam Tabin",
        role: "Volunteer Head",
        image: "/team/tabin.jpg",
        social: {
          instagram:
            "https://www.instagram.com/nabam_tabin?igsh=ZG1vdnpoZ2xjc2cx&utm_source=qr",
        },
      },
      {
        name: "Akshay Tadepalli",
        role: "Volunteer Head",
        image: "/team/akshay.jpeg",
        social: {
          instagram:
            "https://www.instagram.com/tadepalli.akshay?igsh=cHpvdTMzNXRrZGd3",
        },
      },
    ],
  },
  {
    key: "management",
    title: "Management Head",
    emoji: "🧭",
    members: [
      {
        name: "Johnson Ngi",
        role: "Management Head",
        image: "/team/jhonson.jpeg",
        social: {
          instagram: "https://instagram.com/johnsonngi",
        },
      },
      {
        name: "Himanshu Ranjan",
        role: "Management Head",
        image: "/team/himanshu.jpeg",
        social: {
          instagram:
            "https://www.instagram.com/hiim_anshuu_?igsh=MThvcWRuMDRxMTB0cw==",
        },
      },
    ],
  },
];

export default function Team() {
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
            私たちのチーム
          </motion.p>
          <motion.h1
            {...fade(0.42)}
            className="font-cinzel font-black t-hero leading-[0.9] tracking-[5px]"
            style={{
              fontSize: "clamp(3.2rem,11vw,10rem)",
              filter: `drop-shadow(0 0 50px ${theme.accent}25)`,
            }}
          >
            TEAM
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
            チーム
          </motion.p>
        </section>

        {/* ── TEAM SECTION ── */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div {...fade(0.2)} className="text-center mb-16">
              <h2
                className="font-cinzel font-bold text-4xl tracking-wider mb-6"
                style={{ color: theme.accent }}
              >
                Meet Our Team
              </h2>
              <p
                className="text-lg max-w-3xl mx-auto"
                style={{ color: theme.text }}
              >
                The brilliant minds behind ATULYAM – Haru no Stars. Each member
                brings unique expertise and passion to make this festival
                unforgettable.
              </p>
            </motion.div>

            {/* Display all team categories in linear layout */}
            <div className="space-y-20">
              {teamCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.key}
                  {...fade(0.3 + categoryIndex * 0.1)}
                  className="space-y-8"
                >
                  <h3
                    className="font-cinzel font-bold text-2xl text-center"
                    style={{ color: theme.accent2 }}
                  >
                    {category.emoji} {category.title}
                  </h3>

                  <div
                    className={`grid gap-6 items-stretch ${
                      category.members.length === 1
                        ? "grid-cols-1 max-w-md mx-auto"
                        : category.members.length === 2
                          ? "grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto"
                          : category.members.length === 3
                            ? "grid-cols-1 md:grid-cols-3 max-w-4xl mx-auto"
                            : "md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                    }`}
                  >
                    {category.members.map((member, memberIndex) => (
                      <motion.div
                        key={member.name}
                        whileHover={{ y: -8, scale: 1.02 }}
                        className="group cursor-pointer h-full"
                      >
                        <div
                          className="p-8 rounded-lg border transition-all duration-300 h-full flex flex-col"
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
                            <div
                              className="w-36 h-36 lg:w-48 lg:h-48 xl:w-52 xl:h-52 mx-auto rounded-md overflow-hidden border group-hover:scale-110 transition-transform duration-300"
                              style={{ borderColor: `${theme.accent}80` }}
                            >
                              {member.image ? (
                                <Image
                                  src={member.image}
                                  alt={member.name}
                                  width={208}
                                  height={208}
                                  className="w-full h-full object-cover"
                                />
                              ) : (
                                <div
                                  className="w-full h-full flex items-center justify-center text-3xl"
                                  style={{
                                    backgroundColor: `${theme.accent}22`,
                                  }}
                                >
                                  {category.emoji}
                                </div>
                              )}
                            </div>

                            <div>
                              <h4
                                className="font-bold text-2xl mb-1"
                                style={{ color: theme.accent2 }}
                              >
                                {member.name}
                              </h4>
                              <p
                                className="font-semibold text-base mb-3"
                                style={{ color: theme.accent }}
                              >
                                {member.role}
                              </p>

                              {/* Social Media Links */}
                              {member.social && (
                                <div className="flex justify-center gap-3">
                                  {member.social.instagram && (
                                    <motion.a
                                      href={member.social.instagram}
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
                                  {category.key === "web" &&
                                    member.social.linkedin && (
                                      <motion.a
                                        href={member.social.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="cursor-none transition-all"
                                        style={{ color: theme.accent2 }}
                                        title="LinkedIn"
                                      >
                                        <svg
                                          className="w-4 h-4"
                                          fill="currentColor"
                                          viewBox="0 0 24 24"
                                        >
                                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                      </motion.a>
                                    )}
                                  {member.social.github && (
                                    <motion.a
                                      href={member.social.github}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      whileHover={{ scale: 1.1, y: -2 }}
                                      whileTap={{ scale: 0.95 }}
                                      className="cursor-none transition-all"
                                      style={{ color: theme.accent2 }}
                                      title="GitHub"
                                    >
                                      <svg
                                        className="w-4 h-4"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                      >
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                      </svg>
                                    </motion.a>
                                  )}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
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
