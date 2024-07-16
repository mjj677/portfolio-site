import styles from "./HeroStyles.module.css";
import Image from "next/image";

export const Hero = () => {
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.themeContainer}>
        <Image
          className={styles.hero}
          src="/images/hero-img.png"
          alt="A cartoon style profile picture"
          width={300}
          height={300}
        />
        <Image
          className={styles.themeIcon}
          src="/images/sun.svg"
          alt="Theme icon"
          width={50}
          height={50}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Matthew
          <br />
          Johnston
        </h1>
        <h2>Junior Software Developer</h2>
        <span>
          <a href="https://github.com/mjj677" target="_blank">
            <Image
              src="/images/github-light.svg"
              alt="GitHub icon"
              width={50}
              height={50}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/mattjohnston677/"
            target="_blank"
          >
            <Image
              src="/images/linkedin-light.svg"
              alt="LinkedIn icon"
              width={50}
              height={50}
            />
          </a>
        </span>
        <p>
          Aspiring young software developer with a passion for technology and a
          keen eagerness to launch a successful career in the tech industry.
          Dedicated to continuous learning and innovation, ready to make a
          meaningful impact.
        </p>
        <a href="/resume.pdf" download>
          <button className="hover" >Resume</button>
        </a>
      </div>
    </section>
  );
};
