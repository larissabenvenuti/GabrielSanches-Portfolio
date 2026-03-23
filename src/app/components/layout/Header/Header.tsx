"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Header.module.scss";

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Header({ activeTab, setActiveTab }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const tabs = ["HOME", "PROJECTS", "SKILLS", "ABOUT"];

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    setIsMenuOpen(false); 
  };

  return (
    <header className={styles.topBar}>
      <div className={styles.systemInfo}>
        <span>SYS.VER.1.0</span>
        <span className={styles.blinkingDot}></span>
        <span>ONLINE</span>
      </div>

      <nav className={styles.desktopNav}>
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`${styles.navButton} ${activeTab === tab ? styles.active : ""}`}
          >
            <span className={styles.navBrackets}>[</span>
            {tab}
            <span className={styles.navBrackets}>]</span>
          </button>
        ))}
      </nav>

      <button
        className={styles.hamburgerBtn}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? "[ CLOSE ]" : "[ MENU ]"}
      </button>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className={styles.mobileNavOverlay}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <nav className={styles.mobileNav}>
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabClick(tab)}
                  className={`${styles.navButton} ${activeTab === tab ? styles.active : ""}`}
                >
                  <span className={styles.navBrackets}>[</span>
                  {tab}
                  <span className={styles.navBrackets}>]</span>
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
