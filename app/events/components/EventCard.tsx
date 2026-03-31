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
  const [isFlipped, setIsFlipped] = useState(false);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    setTilt({
      x: ((e.clientY - r.top) / r.height - 0.5) * 12,
      y: -((e.clientX - r.left) / r.width - 0.5) * 12,
    });
  };

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
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
        rotateY: tilt.y + (isFlipped ? 180 : 0),
        transformStyle: "preserve-3d",
      }}
      onMouseMove={onMove}
      onMouseLeave={() => {
        setTilt({ x: 0, y: 0 });
      }}
      onClick={handleCardClick}
      className="relative overflow-hidden cursor-pointer group transition-all duration-300 glass-card rounded-xl border-2 border-transparent bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md hover:border-white/30 shadow-lg hover:shadow-2xl"
      data-hover
    >
      {/* Front of card */}
      <motion.div 
        className="w-full bg-black/20 relative backface-hidden"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        style={{ backfaceVisibility: 'hidden' }}
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

      {/* Back of card */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-md border-2 border-white/30 rounded-xl p-6 flex flex-col justify-center items-center text-center backface-hidden"
        style={{ 
          backfaceVisibility: 'hidden',
          rotateY: 180 
        }}
      >
        <div className="text-4xl mb-4">{event.icon}</div>
        <h3 className="text-xl font-bold text-white mb-2">{event.name}</h3>
        <p className="text-sm text-white/80 mb-4">{event.tagline}</p>
        <div className="space-y-2 text-xs text-white/70">
          <p><span className="font-semibold">Date:</span> {event.date}</p>
          <p><span className="font-semibold">Venue:</span> {event.venue}</p>
          <p><span className="font-semibold">Time:</span> {event.dayTimeVenue}</p>
          <p><span className="font-semibold">Team Size:</span> {event.teamSize}</p>
          <p><span className="font-semibold">Fee:</span> {event.fee}</p>
          {event.prize !== "TBA" && <p><span className="font-semibold">Prize:</span> {event.prize}</p>}
        </div>
        <div className="mt-4 flex flex-wrap gap-1 justify-center">
          {event.tags.map((tag, i) => (
            <span 
              key={i}
              className="px-2 py-1 text-xs rounded-full bg-white/20 text-white/80"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.article>
  );
}
