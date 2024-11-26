import styles from "./NavBar.module.css";

import { HomeFilled } from "@ant-design/icons";

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.homeIconAndTitle}>
        <HomeFilled data-testid="home-icon" className={styles.homeIcon} />
        <h1>NPM Package Comparator</h1>
      </div>
      <p>Compare & Recommend the best NPM package</p>
    </nav>
  );
};

export default NavBar
