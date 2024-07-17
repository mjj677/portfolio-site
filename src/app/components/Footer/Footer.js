import styles from "./FooterStyles.module.css"


export const Footer = () => {
  return (
    <section id="footer" className={styles.container}>
        <p>&copy; 2024 Matthew Johnston <br />
        All rights reserved <br />
        Built with Next.js and JavaScript
        </p>
    </section>
  )
}

export default Footer