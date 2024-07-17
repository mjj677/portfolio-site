import styles from "./StackStyles.module.css";
import Image from "next/image";

export const Stack = () => {
  return (
    <section id="skills" className={styles.container}>
      <h1>Stack</h1>
      <div className={styles.skillList}>
        <span>
          <section className={styles.skillSection}>
            <h3>Languages</h3>
            <div className={styles.icons}>
              <Image
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                alt="javascript"
                width={50}
                height={50}
              />
              {/* <Image
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
                alt="python"
                width={50}
                height={50}
              /> */}
              <Image
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                alt="css3"
                width={50}
                height={50}
              />
              <Image
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                alt="html5"
                width={50}
                height={50}
              />
              {/* <Image
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
                alt="typescript"
                width={50}
                height={50}
              /> */}
            </div>
          </section>
          <section className={styles.skillSection}>
            <h3>Front-End</h3>
            <div className={styles.icons}>
              <Image
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                alt="react"
                width={50}
                height={50}
              />
              <Image
                src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg"
                alt="nextjs"
                width={50}
                height={50}
              />
              <Image
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
                alt="bootstrap"
                width={50}
                height={50}
              />
            </div>
          </section>
          <section className={styles.skillSection}>
            <h3>Back-End & Databases</h3>
            <div className={styles.icons}>
              <Image
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                alt="nodejs"
                width={50}
                height={50}
              />
              <Image
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
                alt="express"
                width={50}
                height={50}
              />
              <Image
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
                alt="mongodb"
                width={50}
                height={50}
              />
              <Image
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
                alt="postgresql"
                width={50}
                height={50}
              />
            </div>
          </section>
          <section className={styles.skillSection}>
            <h3>Testing</h3>
            <div className={styles.icons}>
              <Image
                className={styles.jestIcon}
                src="https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg"
                alt="jest"
                width={50}
                height={50}
              />
            </div>
          </section>
        </span>
      </div>
    </section>
  );
};
