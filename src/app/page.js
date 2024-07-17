import styles from "./styles/page.module.css";
import dynamic from "next/dynamic";
const Hero = dynamic(() =>
  import("./components/Hero/Hero.js", {
    ssr: false,
  })
);
const ContactForm = dynamic(() =>
  import("./components/ContactForm/ContactForm")
);
const Projects = dynamic(() => import("./components/Projects/Projects"));
const Stack = dynamic(() => import("./components/Stack/Stack"));
const Footer = dynamic(() => import("./components/Footer/Footer"));

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
