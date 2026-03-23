"use client";
import styles from "../../SkillsPanel.module.scss";

interface Props {
  label: string;
  title: string;
  level: string;
}

export default function SkillMiniCard({ label, title, level }: Props) {
  return (
    <div className={styles.gridItem}>
      <span className={styles.itemLabel}>{label}</span>
      <h4>{title}</h4>
      <span className={styles.levelText}>{level}</span>
    </div>
  );
}
