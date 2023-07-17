import styles from "../assets/styles/work.module.css";
import Navbar from "../components/navbar";
import ParticleHome from "../components/particlehome";
const Work = () => {
  const projects = [
    {
      name: "PassPortal",
      organisation: "Alcheringa IIT Guwahati",
      link: "https://card.alcehringa.in",
      time: "2023",
    },
    {
      name: "Echo",
      organisation: "Group Project",
      link: "https://github.com/Akshat2403/EchoApp",
      time: "2023",
    },
    {
      name: "Jossa Data Analysis",
      organisation: "Coding Club IIT Guwahati",
      link: "https://github.com/Akshat2403/jossadataanalysis",
      time: "2023",
    },
    {
      name: "Campus Ambassador",
      organisation: "Alcheringa IIT Guwahati",
      link: "https://ambassador.alcheringa.in",
      time: "2022",
    },
    {
      name: "Rock-O-Phonix",
      organisation: "Alcheringa IIT Guwahati",
      link: "https://rocko.alcheringa.in",
      time: "2022",
    },
    {
      name: "Alcheringa",
      organisation: "Alcheringa IIT Guwahati",
      link: "https://7e54be.alcheringa.in",
      time: "2023",
    },
  ];
  return (
    <>
      <ParticleHome />
      <Navbar />
      <div className={styles.wrapperflex}>
        {projects.map((project) => (
          <div key={project.name} className={styles.wrapper}>
            <a href={project.link}>
              <div>{project.time}</div>
              <div className={styles.heading}>{project.name}</div>
              <div>{project.organisation}</div>
            </a>
          </div>
        ))}
      </div>
    </>
  );
};
export default Work;
