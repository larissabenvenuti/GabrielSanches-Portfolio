"use client";

import { motion } from "framer-motion";
import styles from "./HomePanel.module.scss";
import { panelVariants } from "@/utils/animations";

export default function HomePanel() {
  return (
    <motion.div
      variants={panelVariants}
      initial="hidden"
      animate="enter"
      exit="exit"
      className={styles.panel}
    >
      <div className={styles.homeContent}>
        <h2 className={styles.subtitle}>// IDENTIFICATION</h2>
        <h1 className={styles.title}>GABRIEL SANCHES</h1>
        <h3 className={styles.role}>3D VEHICLE ARTIST</h3>
        <p className={styles.description}>
          Specialized in low and midpoly vehicle models, as well as Texture
          Baking, Substance Painter texturing and PBR assets.
        </p>
        <div className={styles.statsRow}>
          <div className={styles.statBox}>
            <span className={styles.statValue}>05+</span>
            <span className={styles.statLabel}>YEARS_EXP</span>
          </div>
          <div className={styles.statBox}>
            <span className={styles.statValue}>AAA</span>
            <span className={styles.statLabel}>QUALITY_FOCUS</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
