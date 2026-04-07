// app/components/Footer.tsx
"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTheme } from "@/app/context/ThemeContext";

export default function Footer() {
  const { theme } = useTheme();
  return (
    <footer
      className="relative z-10 pt-8 pb-6 px-8 border-t"
      style={{ borderColor: theme.border }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Left: Brand Info */}
          <div className="text-center md:text-left">
            <div
              className="font-cinzel text-lg tracking-[4px] mb-1"
              style={{
                color: theme.accent,
                textShadow: `0 0 14px ${theme.accent}`,
              }}
            >
              ATULYAM
            </div>
            <p
              className="font-jp text-xs tracking-[4px] mb-2"
              style={{ color: theme.textDim }}
            >
              春の星々 · Haru no Stars
            </p>
            <p
              className="text-xs leading-relaxed"
              style={{ color: theme.textMid }}
            >
              Annual Cultural & Technical Festival
              <br />
              April 9-11, 2026
              <br />
              NIT ARUNACHAL PRADESH
            </p>
          </div>

          {/* Center: Quick Links */}
          <div className="text-center">
            <h4
              className="font-bold text-sm mb-3"
              style={{ color: theme.accent2 }}
            >
              Quick Links
            </h4>
            <div className="flex flex-col gap-1">
              {[
                ["Home", "/"],
                ["Events", "/events"],
                ["Roadmap", "/roadmap"],
                ["Artists", "/hall-of-attraction"],
                ["Merch", "/merch"],
                ["Gallery", "/gallery"],
                ["Team", "/team"],
                ["Sponsors", "/sponsors"],
              ].map(([l, h]) => (
                <Link
                  key={h}
                  href={h}
                  className="font-mono text-xs no-underline cursor-none hover:opacity-80 transition-opacity"
                  style={{ color: theme.textDim }}
                >
                  {l}
                </Link>
              ))}
            </div>
          </div>

          {/* Right: Contact & Credits */}
          <div className="text-center md:text-right">
            <h4
              className="font-bold text-sm mb-3"
              style={{ color: theme.accent2 }}
            >
              Contact
            </h4>
            <div className="space-y-1 mb-3">
                   <p className="text-xs" style={{ color: theme.textMid }}>
                📧 atulyam@nitap.ac.in
              </p>
              <p className="text-xs" style={{ color: theme.textMid }}>
                📱 +91 92335 68948
              </p>
              <p className="text-xs" style={{ color: theme.textMid }}>
                📍 NIT College Campus, MAIN STAGE
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
            >
              <Link
                href="/web-team"
                className="font-mono text-[0.75rem] tracking-[2px] no-underline cursor-none transition-all duration-300 block"
                style={{
                  color: "#ff2d78",
                  textShadow: "0 0 10px rgba(255, 45, 120, 0.5)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#ff6b9d";
                  e.currentTarget.style.textShadow =
                    "0 0 85px rgba(255, 45, 120, 0.8)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#ff2d78";
                  e.currentTarget.style.textShadow =
                    "0 0 10px rgba(255, 45, 120, 0.5)";
                }}
              >
                Website is developed by Web Team
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t pt-4" style={{ borderColor: theme.border }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-mono text-[0.75rem] tracking-[2px]"
              style={{
                color: "#00f5ff",
                textShadow: "0 0 10px rgba(0, 245, 255, 0.5)",
              }}
            >
              &copy; 2026 ATULYAM. All Rights Reserved.
            </motion.p>

            {/* Social Links */}
            <div className="flex gap-3">
              {[
                {
                  name: "Facebook",
                  url: "https://facebook.com/atulyam",
                  svg: (
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  ),
                },
                {
                  name: "Instagram",
                  url: "https://instagram.com/atulyam",
                  svg: (
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.405a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
                    </svg>
                  ),
                },
                {
                  name: "LinkedIn",
                  url: "https://linkedin.com/company/atulyam",
                  svg: (
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  ),
                },
                {
                  name: "Twitter",
                  url: "https://twitter.com/atulyam",
                  svg: (
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  ),
                },
                {
                  name: "YouTube",
                  url: "https://youtube.com/@atulyam",
                  svg: (
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  ),
                },
              ].map(({ name, url, svg }) => (
                <motion.a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="cursor-none transition-all"
                  style={{ color: theme.accent2 }}
                  title={name}
                >
                  {svg}
                </motion.a>
              ))}
            </div>

            {/* Additional Info */}
            <p className="text-xs" style={{ color: theme.textDim }}>
              🎪 3 Days • 50+ Events • 10,000+ Attendees
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
