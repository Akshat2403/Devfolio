import styles from "../assets/styles/navbar.module.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <div className={styles.icon}>Ak.</div>
      <section>
        <Link to="/">Home</Link>
        <Link to="#work">Work</Link>
        {/* <Link to="/me">Me</Link> */}
      </section>
    </nav>
  );
};
export default Navbar;
