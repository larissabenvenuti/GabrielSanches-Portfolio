"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./AnimatedBackground.module.scss";

export default function AnimatedBackground() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className={styles.backgroundContainer}>
      <div className={styles.movingGrid}></div>
      <div className={styles.particlesContainer}>
        {isMounted &&
          [...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className={styles.particle}
              animate={{
                y: ["100vh", "-10vh"],
                x: Math.random() * 50 - 25,
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 10,
              }}
              style={{
                left: `${Math.random() * 100}vw`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 20 + 10}px`,
              }}
            />
          ))}
      </div>
    </div>
  );
}