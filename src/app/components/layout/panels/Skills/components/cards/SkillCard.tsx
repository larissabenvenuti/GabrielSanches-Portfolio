"use client";
import styles from "../../SkillsPanel.module.scss";
import { motion } from "framer-motion";

interface Props {
  icon: string;
  techRef: string;
  title: string;
  desc: string;
  level: string;
}

export default function SkillCard({ icon, techRef, title, desc, level }: Props) {
  return (
    <motion.div whileHover={{ scale: 1.02 }} className={styles.skillCard}>
      <div className={styles.cardHeader}>
        <span className={styles.iconPlaceholder}>{icon}</span>
        <span className={styles.techRef}>{techRef}</span>
      </div>
      <h3>{title}</h3>
      <p>{desc}</p>
      <div className={styles.proficiencyLog}>
        <span>PROFICIENCY_LVL:</span>
        <strong className={styles.levelHighlight}>[ {level} ]</strong>
      </div>
    </motion.div>
  );
}