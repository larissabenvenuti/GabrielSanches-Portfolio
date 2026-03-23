"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./ProjectsPanel.module.scss";
import { panelVariants } from "@/utils/animations";
import { projectsList, Project } from "@/data/projects";
import ProjectSidebar from "./components/sidebar/ProjectSidebar";
import ProjectViewer from "./components/viewer/ProjectViewer";

export default function ProjectsPanel() {
  const [activeProject, setActiveProject] = useState<Project>(projectsList[0]);

  return (
    <motion.div variants={panelVariants} initial="hidden" animate="enter" exit="exit" className={styles.panel}>
      <div className={styles.header}>
        <div className={styles.simplifiedInfo}>
          <h2 className={styles.subtitle}>PROJECT_GALLERY</h2>
          <span className={styles.technicalInfo}>| SKETCHFAB | WEBGL</span>
        </div>
        <div className={styles.systemStatus}>API: SKETCHFAB <br /> RENDER: WEBGL</div>
      </div>
      <h1 className={styles.title}>VEHICLE_DATABASE.</h1>

      <div className={styles.layout}>
        <ProjectSidebar 
          projectsList={projectsList} 
          activeProject={activeProject} 
          setActiveProject={setActiveProject} 
        />
        <ProjectViewer activeProject={activeProject} />
      </div>
    </motion.div>
  );
}