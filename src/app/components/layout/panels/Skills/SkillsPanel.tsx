"use client";

import { motion } from "framer-motion";
import styles from "./SkillsPanel.module.scss";
import { panelVariants } from "@/utils/animations";
import SkillCard from "./components/cards/SkillCard";
import SkillMiniCard from "./components/cards/SkillMiniCard";

export default function SkillsPanel() {
  return (
    <motion.div
      variants={panelVariants}
      initial="hidden"
      animate="enter"
      exit="exit"
      className={styles.panel}
    >
      <div className={styles.header}>
        <h2 className={styles.subtitle}>// CORE_COMPETENCIES</h2>
        <div className={styles.systemStatus}>
          STATUS: OPTIMAL <br /> SYS.V.1.00
        </div>
      </div>
      <h1 className={styles.title}>SKILLS_MATRIX.</h1>

      <div className={styles.matrixContainer}>
        <div className={styles.mainSkills}>
          <SkillCard
            icon="[B]"
            techRef="TECH_01"
            title="BLENDER"
            desc="Hard surface modeling, high-to-low poly baking, and complex vehicle topology."
            level="ADVANCED"
          />
          <SkillCard
            icon="[S]"
            techRef="TECH_02"
            title="SUBSTANCE PAINTER"
            desc="PBR material authoring, procedural texturing, and photorealistic asset development."
            level="ADVANCED"
          />
        </div>

        <div className={styles.secondaryGrid}>
          <SkillMiniCard
            label="ENGINE"
            title="ROBLOX STUDIO"
            level="ADVANCED"
          />
          <SkillMiniCard
            label="PIPELINE"
            title="3D MODELING"
            level="ADVANCED"
          />
          <SkillMiniCard label="PIPELINE" title="TEXTURING" level="ADVANCED" />
          <SkillMiniCard
            label="PIPELINE"
            title="TEXTURE BAKING"
            level="ADVANCED"
          />
          <SkillMiniCard label="PIPELINE" title="UV MAPPING" level="ADVANCED" />
          <SkillMiniCard label="MEDIA" title="AUDIO" level="ADVANCED" />
        </div>
      </div>
    </motion.div>
  );
}
