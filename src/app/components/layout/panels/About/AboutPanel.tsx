"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import styles from "./AboutPanel.module.scss";
import { panelVariants } from "@/utils/animations";
import ContactLinks from "./components/ContactLinks";

export default function AboutPanel() {
  const [showContact, setShowContact] = useState(false);

  return (
    <motion.div
      variants={panelVariants}
      initial="hidden"
      animate="enter"
      exit="exit"
      className={styles.panel}
    >
      <div className={styles.header}>
        <h2 className={styles.subtitle}>// ARTIST_PROFILE</h2>
        <div className={styles.systemStatus}>
          STATUS: ACTIVE_PROFESSIONAL <br /> LOC: RJ_BR
        </div>
      </div>
      <h1 className={styles.title}>BIO_SYSTEM.</h1>

      <div className={styles.mainLayout}>
        <div className={styles.contentContainer}>
          <motion.div
            className={styles.imageWrapper}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className={styles.squareImage}>
              <Image
                src="/assets/images/profile-pic.jpg"
                alt="Gabriel Sanches"
                fill
                unoptimized
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={styles.imageDecor}></div>
          </motion.div>

          <div className={styles.bioData}>
            <h2 className={styles.name}>GABRIEL SANCHES</h2>
            <div className={styles.manifestoBox}>
              <div className={styles.boxHeader}>
                MANIFESTO_LOG <span>ENT: 2002.BR</span>
              </div>
              <p>
                Digital artist and game developer specializing in{" "}
                <strong>immersive 3D vehicle modeling</strong> and high-fidelity
                assets. My work bridges the gap between raw mechanical data and
                stunning real-time performance.
              </p>
              <p>
                Currently obsessed with high-to-low poly baking workflows and
                procedural PBR material creation. When not perfecting digital
                models, I apply this same precision to hands-on car
                restoration—bringing authentic mechanical insight to every 3D
                asset I craft.
              </p>
            </div>

            <div className={styles.statsRow}>
              <div className={styles.statBlock}>
                <span>EXPERIENCE</span>
                <strong>05_YRS</strong>
              </div>
              <div className={styles.statBlock}>
                <span>SPECIALTY</span>
                <strong>VEHICLES</strong>
              </div>
              <div className={styles.statBlock}>
                <span>QUALITY</span>
                <strong>AAA_STD</strong>
              </div>
              <button
                className={`${styles.connectBtn} ${showContact ? styles.activeBtn : ""}`}
                onClick={() => setShowContact(!showContact)}
              >
                {showContact ? "[ CLOSE_LINK ]" : "[ INIT_CONTACT ]"}
              </button>
            </div>
          </div>
        </div>
        <AnimatePresence>{showContact && <ContactLinks />}</AnimatePresence>
      </div>
    </motion.div>
  );
}
