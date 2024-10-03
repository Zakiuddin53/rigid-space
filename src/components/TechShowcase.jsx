"use client";

import React from "react";
import { motion } from "framer-motion";

const techLogos = [
  { name: "Gmail", icon: "🔴", color: "#EA4335" },
  { name: "Slack", icon: "🟣", color: "#4A154B" },
  { name: "Outlook", icon: "🔵", color: "#0078D4" },
  { name: "Phone", icon: "⚫", color: "#000000" },
  { name: "Mail", icon: "🔵", color: "#3498DB" },
  { name: "Intercom", icon: "🔵", color: "#1F8DED" },
];

const TechLogo = ({ icon, rotate }) => (
  <motion.div
    className="absolute flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md"
    style={{
      top: `${50 - Math.cos(rotate * Math.PI * 2) * 30}%`,
      left: `${50 + Math.sin(rotate * Math.PI * 2) * 45}%`,
    }}
    whileHover={{ scale: 1.1, zIndex: 10 }}
  >
    <span className="text-2xl">{icon}</span>
  </motion.div>
);

const ConnectingLines = () => (
  <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
    <ellipse
      cx="50%"
      cy="50%"
      rx="45%"
      ry="30%"
      stroke="#E0E0E0"
      strokeWidth="1"
      fill="none"
    />
  </svg>
);

export default function TechShowcase() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="relative w-96 h-64">
        <ConnectingLines />
        {techLogos.map((logo, index) => (
          <TechLogo
            key={logo.name}
            {...logo}
            rotate={index / techLogos.length}
          />
        ))}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-full shadow-lg flex items-center justify-center z-10">
          <div className="text-2xl text-gray-300 tracking-widest">
            ⋮⋮⋮
            <br />
            ⋮⋮⋮
            <br />
            ⋮⋮⋮
          </div>
        </div>
      </div>
    </div>
  );
}
