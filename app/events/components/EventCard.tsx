// app/events/components/EventCard.tsx
"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { EventItem } from "@/types";

export default function EventCard({
  event,
  index,
}: {
  event: EventItem;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    setTilt({
      x: ((e.clientY - r.top) / r.height - 0.5) * 12,
      y: -((e.clientX - r.left) / r.width - 0.5) * 12,
    });
  };

  const handleRegisterClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const link = event.registrationLink || 'https://forms.google.com/example';
    window.open(link, '_blank');
  };

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 55, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.85,
        delay: index * 0.07,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{
        scale: 1.05,
        y: -5,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      style={{
        rotateX: tilt.x,
        rotateY: tilt.y,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={onMove}
      onMouseLeave={() => {
        setTilt({ x: 0, y: 0 });
      }}
      className="relative overflow-hidden cursor-pointer group transition-all duration-300 glass-card rounded-xl border-2 border-transparent bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md hover:border-white/30 shadow-lg hover:shadow-2xl"
      data-hover
    >
      <motion.div 
        className="w-full bg-black/20 relative"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {/* Shimmer effect on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent z-10"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
        {event.image ? (
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={event.image}
              alt={event.name}
              width={1200}
              height={800}
              className="w-full h-auto object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              priority={index < 6}
            />
          </motion.div>
        ) : (
          <motion.div
            className="w-full h-[320px]"
            style={{ background: event.color }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </motion.div>
      
      {/* Register Button Overlay */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      >
        <motion.button
          onClick={handleRegisterClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full px-4 py-2 font-mono text-[0.65rem] font-bold tracking-[2px] uppercase text-black cursor-pointer rounded-lg transition-all duration-200"
          style={{
            background: `linear-gradient(135deg, ${event.color}, ${event.color}cc)`,
            boxShadow: `0 0 20px ${event.color}44`,
          }}
        >
          Register Now ✦
        </motion.button>
      </motion.div>
    </motion.article>
  );
}
