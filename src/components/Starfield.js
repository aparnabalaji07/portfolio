"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Starfield() {
  const [stars, setStars] = useState(null);

  useEffect(() => {
    const generated = Array.from({ length: 40 }, (_, i) => {
      const onRight = Math.random() < 0.7;
      return {
        id: i,
        top: Math.random() * 100,
        left: onRight ? Math.random() * 45 + 55 : Math.random() * 55,
        size: Math.random() * 2 + 1,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 2,
      };
    });
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setStars(generated);
  }, []);

  if (!stars) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-text"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          animate={{ opacity: [0.2, 0.8, 0.2] }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
