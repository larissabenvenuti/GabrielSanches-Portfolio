"use client";

import { motion } from "framer-motion";
import styles from "../../ProjectsPanel.module.scss";
import { Project } from "@/data/projects";

interface Props {
  activeProject: Project;
}

export default function ProjectViewer({ activeProject }: Props) {
  return (
    <div className={styles.viewerContainer}>
      <h3 className={styles.modelTitle}>[ MODEL ]</h3>
      <motion.div 
        key={activeProject.id} 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className={styles.viewerFrame}
      >
        <iframe
          title={activeProject.name}
          className={styles.sketchfabIframe}
          src={`https://sketchfab.com/models/${activeProject.modelId}/embed?autostart=1&ui_theme=dark&dnt=1&transparent=1`}
          allow="autoplay; fullscreen; xr-spatial-tracking"
          allowFullScreen
        ></iframe>
        <div className={styles.scanline}></div>
      </motion.div>
    </div>
  );
}