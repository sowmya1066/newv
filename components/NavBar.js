// components/NavBar.js
import Link from "next/link";
import styles from "../app/page.module.css";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <img src="/image.png" alt="Logo" />
      </div>
      <div className={styles.navLinks}>
        <Link href="/nav1">Nav1</Link>
        <Link href="/nav2">Nav2</Link>
        <Link href="/nav3">Nav3</Link>
      </div>
      <div className={styles.resume}>
        <Link href="/resume">Resume</Link>
      </div>
    </nav>
  );
};

export default NavBar;
