import styles from "./styles/page.module.css";
import { Hero } from "./components/Hero/Hero.js";
import { Projects } from "./components/Projects/Projects";
import { Stack } from "./components/Stack/Stack";
import { ContactForm } from "./components/ContactForm/ContactForm";
import { Footer } from "./components/Footer/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Projects />
      <Stack />
      <ContactForm />
      <Footer />
    </main>
  );
}
