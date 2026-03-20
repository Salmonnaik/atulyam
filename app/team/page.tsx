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

const teamCategories = [
  {
    key: "chairman",
    title: "Addovedi Chairman",
    emoji: "👨‍💼",
    members: [
      {
        name: "Dr. Abhik Banerjee",
        role: "Chairman",
        image: "/faculty/Dr. Abhik Banerjee.jpg",
      },
    ],
  },
  {
    key: "faculty_coordinator",
    title: "Faculty Coordinator",
    emoji: "🧑‍🏫",
    members: [
      {
        name: "Dr. Brajagopal Datta",
        role: "Faculty Coordinator",
        image: "/faculty/Dr. Brajagopal Datta.jpg",
      },
      {
        name: "Dr. Jayakesh K",
        role: "Faculty Coordinator",
        image: "/faculty/Dr. Jayakesh K.jpg",
      },
      {
        name: "Dr. Sahadev Roy",
        role: "Faculty Coordinator",
        image: "/faculty/Dr. Sahadev Roy.jpg",
      },
      {
        name: "Dr. Subhasish Banerjee",
        role: "Faculty Coordinator",
        image: "/faculty/Dr. Subhasish Banerjee.jpg",
      },
      {
        name: "Dr. Sandip Kumar Mandal",
        role: "Faculty Coordinator",
        image: "/faculty/Dr. Sandip Kumar Mandal.jpg",
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
        image: "/team/lyshi.jpeg",
      },
      {
        name: "Dunga Mosang",
        role: "Assistant Head Coordinator",
        image: "/team/Dungwamossang.jpg",
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
      },
      {
        name: "Siddhant",
        role: "Event Head",
        image: "/team/sidhant .jpeg",
      },
      {
        name: "Ankit Jha",
        role: "Event Head",
        image: "/team/ankit.png",
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
      },
      {
        name: "Salmon Naik",
        role: "Devolper",
        image: "/team/salmon.jpeg",
      },
      {
        name: "Karan Kumar Sah",
        role: "Devolper",
        image: "/team/karan.jpeg",
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
      },
      {
        name: "Gerna Panyang",
        role: "Sponsorship Team",
        image: "/team/gerna.jpeg",
      },
      {
        name: "Kago Doding",
        role: "Sponsorship Team",
        image: "/team/kago.jpeg",
      },
      {
        name: "Uma Shanker",
        role: "Sponsorship Team",
        image: "",
      },
    ],
  },
  {
    key: "pr",
    title: "PR Team",
    emoji: "📣",
    members: [
      {
        name: "Abs Sonam",
        role: "PR Team",
        image: "/team/sonam.jpeg",
      },
      {
        name: "James Tamang",
        role: "PR Team",
        image: "/team/james.jpg",
      },
      {
        name: "Chaiput Pansa",
        role: "PR Team",
        image: "",
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
      },
      {
        name: "Rahman",
        role: "Media and Graphics Head",
        image: "/team/rahman.jpeg",
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
        image: "",
      },
      {
        name: "Nayato Mengnia",
        role: "Volunteer Head",
        image: "/team/nayto.JPG",
      },
      {
        name: "Nabam Tabin",
        role: "Volunteer Head",
        image: "/team/tabin.jpg",
      },
      {
        name: "Akshay Tadepalli",
        role: "Volunteer Head",
        image: "/team/akshay.jpeg",
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
      },
      {
        name: "Himanshu Ranjan",
        role: "Management Head",
        image: "/team/himanshu.jpeg",
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
                        {...fade(0.4 + memberIndex * 0.05)}
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
                                className="font-semibold text-base mb-1"
                                style={{ color: theme.accent }}
                              >
                                {member.role}
                              </p>
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
