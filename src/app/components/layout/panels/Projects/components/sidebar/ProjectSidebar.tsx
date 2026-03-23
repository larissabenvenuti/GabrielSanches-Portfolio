"use client";

import styles from "../../ProjectsPanel.module.scss";
import { Project } from "@/data/projects";

interface Props {
  projectsList: Project[];
  activeProject: Project;
  setActiveProject: (proj: Project) => void;
}

export default function ProjectSidebar({ projectsList, activeProject, setActiveProject }: Props) {
  return (
    <div className={styles.sidebar}>
      <div className={styles.menuBox}>
        <div className={styles.boxHeader}>[ SELECT_ASSET ]</div>
        <div className={styles.menuList}>
          {projectsList.map((proj) => (
            <button
              key={proj.id}
              className={`${styles.menuBtn} ${activeProject.id === proj.id ? styles.activeBtn : ""}`}
              onClick={() => setActiveProject(proj)}
            >
              <span className={styles.bracket}>&gt;</span> {proj.name}
            </button>
          ))}
        </div>
      </div>
      <div className={styles.descriptionBox}>
        <div className={styles.boxHeader}>ASSET_DETAILS</div>
        <p>{activeProject.description}</p>
      </div>
    </div>
  );
}