"use client";

import styles from "./StackStyles.module.css";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const SkillImage = ({ src, alt }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  return (
    <Image
      className={`${styles.image} ${inView ? styles.animate : ""}`}
      src={src}
      alt={alt}
      width={50}
      height={50}
      ref={ref}
    />
  );
};

export const Stack = () => {
  return (
    <section id="skills" className={styles.container}>
      <h1>Stack</h1>
      <div className={styles.skillList}>
        <span>
          <section className={styles.skillSection}>
            <h3>Languages</h3>
            <div className={styles.icons}>
              <SkillImage
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                alt="javascript"
              />
              <SkillImage
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                alt="css3"
              />
              <SkillImage
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                alt="html5"
              />
            </div>
          </section>
          <section className={styles.skillSection}>
            <h3>Front-End</h3>
            <div className={styles.icons}>
              <SkillImage
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                alt="react"
              />
              <SkillImage
                src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg"
                alt="nextjs"
              />
              <SkillImage
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
                alt="bootstrap"
              />
            </div>
          </section>
          <section className={styles.skillSection}>
            <h3>Back-End & Databases</h3>
            <div className={styles.icons}>
              <SkillImage
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                alt="nodejs"
              />
              <SkillImage
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
                alt="express"
              />
              <SkillImage
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
                alt="mongodb"
              />
              <SkillImage
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
                alt="postgresql"
              />
            </div>
          </section>
          <section className={styles.skillSection}>
            <h3>Testing</h3>
            <div className={styles.icons}>
              <SkillImage
                className={styles.jestIcon}
                src="https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg"
                alt="jest"
              />
            </div>
          </section>
        </span>
      </div>
    </section>
  );
};

export default Stack;
