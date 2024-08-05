import Link from "next/link";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <img src="/image.png" alt="Logo" />
      </div>
      <div className={styles.navLinks}>
        <Link href="/nav1">Skill</Link>
        <Link href="/nav2">Work</Link>
        <Link href="/nav3">Contact</Link>
      </div>
      <div className={styles.resume}>
        <Link href="/resume">Resume</Link>
      </div>
    </nav>
  );
};

export default NavBar;
