"use client";

import { motion } from "framer-motion";
import styles from "../AboutPanel.module.scss";

export default function ContactLinks() {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      className={styles.contactPanel}
    >
      <div className={styles.contactHeader}>// SECURE_COMM_LINKS</div>
      <div className={styles.linksGrid}>
        <a href="mailto:ezoyeahh@gmail.com" className={styles.linkItem}>
          <span>PROTOCOL</span>
          <strong>[ E_MAIL ]</strong>
        </a>
        <a
          href="https://www.artstation.com/ezosama"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.linkItem}
        >
          <span>PORTFOLIO</span>
          <strong>[ ARTSTATION ]</strong>
        </a>
        <a
          href="https://sketchfab.com/EzoYEAHH"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.linkItem}
        >
          <span>MODELS_DB</span>
          <strong>[ SKETCHFAB ]</strong>
        </a>
        <a
          href="https://github.com/EzoWasTaken"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.linkItem}
        >
          <span>CODE_REPO</span>
          <strong>[ GITHUB ]</strong>
        </a>
        <a
          href="https://discord.com/users/ezooooo"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.linkItem}
        >
          <span>VOIP_SYNC</span>
          <strong>[ DISCORD ]</strong>
        </a>
      </div>
    </motion.div>
  );
}
