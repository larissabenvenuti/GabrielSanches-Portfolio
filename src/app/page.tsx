"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import styles from "./page.module.scss";
import AnimatedBackground from "./components/layout/AnimatedBackground/AnimatedBackground";
import Header from "./components/layout/Header/Header";
import HomePanel from "./components/layout/panels/Home/HomePanel";
import ProjectsPanel from "./components/layout/panels/Projects/ProjectsPanel";
import SkillsPanel from "./components/layout/panels/Skills/SkillsPanel";
import AboutPanel from "./components/layout/panels/About/AboutPanel";
import Footer from "./components/layout/Footer/Footer";

export default function PortfolioHUD() {
  const [activeTab, setActiveTab] = useState("HOME");

  return (
    <main className={styles.hudContainer}>
      <AnimatedBackground />
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <section className={styles.contentArea}>
        <AnimatePresence mode="wait">
          {activeTab === "HOME" && <HomePanel key="HOME" />}
          {activeTab === "PROJECTS" && <ProjectsPanel key="PROJECTS" />}
          {activeTab === "SKILLS" && <SkillsPanel key="SKILLS" />}
          {activeTab === "ABOUT" && <AboutPanel key="ABOUT" />}
        </AnimatePresence>
      </section>
      <Footer />
    </main>
  );
}
