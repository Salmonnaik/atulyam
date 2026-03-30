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

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 55 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.85,
        delay: index * 0.07,
        ease: [0.16, 1, 0.3, 1],
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
      className="relative overflow-hidden cursor-none group transition-all duration-300 glass-card"
      data-hover
    >
      <div className="w-full bg-black/20">
        {event.image ? (
          <Image
            src={event.image}
            alt={event.name}
            width={1200}
            height={800}
            className="w-full h-auto object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            priority={index < 6}
          />
        ) : (
          <div
            className="w-full h-[320px]"
            style={{ background: event.color }}
          />
        )}
      </div>
    </motion.article>
  );
}
