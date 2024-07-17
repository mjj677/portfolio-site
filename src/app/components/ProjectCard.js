import Image from "next/image";
import styles from "./Projects/ProjectsStyles.module.css";

export const ProjectCard = ({imageSrc, link, h3, p}) => {

  return (
    <a href={link} target="_blank">
      <Image className={`${styles.projectLogo} hover`} src={imageSrc.src} width={imageSrc.width} height={imageSrc.height} alt={`${h3} logo`}/>
      <h3>{h3}</h3>
      <p>
        {p}
      </p>
    </a>
  );
};
