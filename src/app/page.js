import styles from "./styles/page.module.css";
import { Hero } from "./components/Hero/Hero.js";
import { Projects } from "./components/Projects/Projects";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Projects />
    </main>
  );
}
