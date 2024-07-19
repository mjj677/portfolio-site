"use client";

import styles from "./ProjectsStyles.module.css";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import chatPFQ from "/public/images/full.png";
import northitt from "/public/images/northitt.png";
import newsAPI from "/public/images/news.png";
import { projectDescriptions } from "./projectDescriptions";
import { ProjectCard } from "../ProjectCard";

export const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (inView) {
      setAnimate(true);
    } else {
      setAnimate(false);
    }
  }, [inView]);

  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div
        className={`${styles.projectsContainer} ${
          animate ? styles.animate : ""
        }`}
        ref={ref}
      >
        <ProjectCard
          imageSrc={chatPFQ}
          link="https://github.com/mjj677/chat-pfq-server"
          h3={"chatPFQ"}
          p={projectDescriptions.chatPFQ.desc}
        />
        <ProjectCard
          imageSrc={northitt}
          link="https://github.com/mjj677/nc-news-fe"
          h3={"Northitt"}
          p={projectDescriptions.northitt.desc}
        />
        <ProjectCard
          imageSrc={newsAPI}
          link="https://github.com/mjj677/nc-news"
          h3={"The News API"}
          p={projectDescriptions.newsAPI.desc}
        />
      </div>
    </section>
  );
};

export default Projects;
