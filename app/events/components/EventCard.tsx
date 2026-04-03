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
  const [showModal, setShowModal] = useState(false);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    setTilt({
      x: ((e.clientY - r.top) / r.height - 0.5) * 12,
      y: -((e.clientX - r.left) / r.width - 0.5) * 12,
    });
  };

<<<<<<< HEAD
  const handleCardClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
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
        onClick={handleCardClick}
        className="relative overflow-hidden cursor-pointer group transition-all duration-300 glass-card rounded-xl border-2 border-transparent bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md hover:border-white/30 shadow-lg hover:shadow-2xl"
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
        
        {/* Scan to Register Button Overlay */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full px-4 py-2 font-mono text-[0.65rem] font-bold tracking-[2px] uppercase text-black cursor-pointer rounded-lg transition-all duration-200"
            style={{
              background: `linear-gradient(135deg, ${event.color}, ${event.color}cc)`,
              boxShadow: `0 0 20px ${event.color}44`,
            }}
          >
            Scan QR to Register ✦
          </motion.button>
        </motion.div>
      </motion.article>
      
      {/* QR Code Modal */}
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="bg-white rounded-2xl p-4 max-w-lg w-full mx-4 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="text-center">
              {/* Event Poster Only */}
              {event.image ? (
                <div className="w-full rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={event.image}
                    alt={event.name}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
              ) : (
                <div className="w-full h-96 rounded-lg flex items-center justify-center shadow-lg" style={{ background: event.color }}>
                  <div className="text-center text-white">
                    <div className="text-8xl mb-4">{event.icon}</div>
                    <p className="text-xl font-semibold">{event.name}</p>
                    <p className="text-lg mt-2">{event.tagline}</p>
                  </div>
                </div>
              )}
              
              {/* Time Details - Small & Centered */}
              <div className="mt-4 text-center">
                <p className="text-xs text-gray-600 font-medium">
                  {event.date} • {event.dayTimeVenue} • {event.venue}
                </p>
              </div>
              
              {/* Additional Details */}
              <div className="mt-3 text-center space-y-1">
                {event.prize && (
                  <p className="text-xs text-gray-700 font-semibold">
                    🏆 {event.prize}
                  </p>
                )}
                <p className="text-xs text-gray-600">
                  👥 {event.teamSize}
                </p>
                <p className="text-xs text-gray-500 max-w-xs mx-auto leading-tight">
                  {event.description}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
=======
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
>>>>>>> 319a6d59df40c5b899f068c005c72c050c3dcc93
  );
}
