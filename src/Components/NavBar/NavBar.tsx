import styles from "./NavBar.module.css";

import { HomeFilled } from "@ant-design/icons";

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <HomeFilled className={styles.homeIcon} />
      <h1>NPM Package Comparator</h1>
      <p>Compare & Recommend the best NPM package</p>
    </nav>
  );
}
