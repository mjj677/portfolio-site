import styles from "./NavbarStyles.module.css";

export const Navbar = () => {
    return (
      <nav className={styles.navbar}>
        <a href="#hero" className={styles.navItem}><p>Info</p></a>
        <a href="#projects" className={styles.navItem}><p>Projects</p></a>
        <a href="#skills" className={styles.navItem}><p>Tech Stack</p></a>
        <a href="#contact" className={styles.navItem}><p>Contact</p></a>
      </nav>
    );
  };

export default Navbar;
