import styles from "./ProjectsStyles.module.css";
import Image from "next/image";
import chatPFQ from "/public/images/full.png";

export const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <a href="https://github.com/mjj677/chat-pfq-server" target="_blank">
          <Image className="hover" src={chatPFQ} alt="chatPFQ logo" />
          <h3>chatPFQ</h3>
          <p>
            chatPFQ is a sophisticated communication platform that leverages
            advanced technologies to provide seamless real-time messaging and
            insightful analytics. Developed using React Native for the mobile
            application and React for the web application, chatPFQ ensures a
            smooth and consistent user experience across all devices. The
            backend infrastructure is powered by an Express.js and Socket.IO
            server, facilitating real-time communication between users.
          </p>
        </a>
      </div>
    </section>
  );
};
