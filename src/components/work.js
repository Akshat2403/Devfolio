import styles from "../assets/styles/work.module.css";
import Navbar from "../components/navbar";
import ParticleHome from "../components/particlehome";
const Work = ({ ref }) => {
  const projects = [
    {
      name: "ScoobyStudy",
      organisation: "V7 Associates",
      link: "https://scoobystudy.vercel.app/",
      time: "2024",
    },
    {
      name: "Alcheringa.in",
      organisation: "Alcheringa IIT Guwahati",
      link: "https://alcheringa24.vercel.app/",
      time: "2024",
    },
    {
      name: "CardPortal",
      organisation: "Alcheringa IIT Guwahati",
      link: "https://card.alcheringa.in",
      time: "2024",
    },
    {
      name: "Echo",
      organisation: "Group Project",
      link: "https://github.com/Akshat2403/EchoApp",
      time: "2023",
    },
    {
      name: "Josaa Data Analysis",
      organisation: "Coding Club IIT Guwahati",
      link: "https://github.com/Akshat2403/josaadataanalysis",
      time: "2023",
    },
    {
      name: "Registration Portal",
      organisation: "Alcheringa IIT Guwahati",
      link: "https://registration.alcheringa.in/",
      time: "2023",
    },
    {
      name: "Parliamentary Debate",
      organisation: "Alcheringa IIT Guwahati",
      link: "https://pd.alcheringa.in/",
      time: "2023",
    },
    {
      name: "Vogue Nation",
      organisation: "Alcheringa IIT Guwahati",
      link: "https://vogue.alcheringa.in/",
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
    // {
    //   name: "Alcheringa",
    //   organisation: "Alcheringa IIT Guwahati",
    //   link: "https://7e54be.alcheringa.in",
    //   time: "2023",
    // },
  ];
  return (
    <div className={styles.wrapperflex} id="work" ref={ref}>
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
  );
};
export default Work;
