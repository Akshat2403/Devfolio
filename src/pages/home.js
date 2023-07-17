import styles from "../assets/styles/home.module.css";
import { Helmet } from "react-helmet";
import Navbar from "../components/navbar";
import ParticleHome from "../components/particlehome";
import Typewriter from "typewriter-effect";
import { FiAtSign, FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import Work from "../components/work";
import { useRef } from "react";
import navstyles from "../assets/styles/navbar.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  const workref = useRef(null);

  const handleClick = () => {
    console.log("here");
    workref.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <ParticleHome />
      <nav>
        <div className={navstyles.icon}>Ak.</div>
        <section>
          <Link to="#">Home</Link>
          <div onClick={handleClick}>Work</div>
          {/* <Link to="/me">Me</Link> */}
        </section>
      </nav>
      <section className={styles.type}>
        <article>
          Hi, I'm <br />
          Akshat,
          <br />
          <div className={styles.typewrapper}>
            <pre style={{ margin: 0, fontFamily: "Lexend" }}>a </pre>
            <Typewriter
              options={{
                strings: [
                  "<div style='color:#4EE45D'>Developer</div>",
                  "<div style='color:#6254FF'> Student</div>",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </article>

        <div className={styles.social}>
          <a href="https://github.com/Akshat2403">
            <FiGithub style={{ width: "40px" }} />
          </a>
          <a href="https://www.linkedin.com/in/akshat2403/">
            <FiLinkedin style={{ width: "40px" }} />
          </a>
          <a href="https://www.instagram.com/akshat_2403/">
            <FiInstagram style={{ width: "40px" }} />
          </a>
        </div>
      </section>
      <div ref={workref}>
        <Work />
      </div>
    </>
  );
};
export default Home;
