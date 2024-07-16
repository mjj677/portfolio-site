import styles from "./styles/page.module.css";
import { Hero } from "./components/Hero/Hero.js";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
    </main>
  );
}
