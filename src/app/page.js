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
const Projects = dynamic(() =>
  import("./components/Projects/Projects", { ssr: false })
);
const Stack = dynamic(() => import("./components/Stack/Stack", { ssr: false }));
const Footer = dynamic(() => import("./components/Footer/Footer"));
const Navbar = dynamic(() => import("./components/Navbar/Navbar"))

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Hero />
      <Projects />
      <Stack />
      <ContactForm />
      <Footer />
    </main>
  );
}
