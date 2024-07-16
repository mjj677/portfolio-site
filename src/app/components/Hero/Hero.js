'use client'
import styles from "./HeroStyles.module.css";
import Image from "next/image";
import { useTheme } from "../ThemeContext";
import heroIcon from "/public/images/hero-img.png"
import {HeroImages} from "./HeroImages";



export const Hero = () => {

  const { theme, toggleTheme } = useTheme();

  const themeIconSrc = theme === 'light' ? HeroImages.themeIcon.light : HeroImages.themeIcon.dark
  const githubIconSrc = theme === 'light' ? HeroImages.githubIcon.light : HeroImages.githubIcon.dark
  const linkedIconSrc = theme === 'light' ? HeroImages.githubIcon.light : HeroImages.githubIcon.dark

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.themeContainer}>
        <Image
          className={styles.hero}
          src={heroIcon}
          alt="A cartoon style profile picture"
          width={300}
          height={300}
        />
        <Image
          className={styles.themeIcon}
          src={themeIconSrc}
          alt="Theme icon"
          width={50}
          height={50}
          onClick={toggleTheme}
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
              src={githubIconSrc}
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
              src={linkedIconSrc}
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
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
};
