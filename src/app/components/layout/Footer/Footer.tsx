"use client";

import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footerInfo}>
      <span className={styles.credit}>
        SYSTEM_ARCHITECT:{" "}
        <a
          href="https://github.com/larissabenvenuti"
          target="_blank"
          rel="noopener noreferrer"
        >
          Larissa Benvenuti
        </a>
      </span>
      <span>LAT: -22.5050 | LNG: -43.1786</span>
    </footer>
  );
}