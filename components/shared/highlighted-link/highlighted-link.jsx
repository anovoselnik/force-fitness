import Link from "next/link";
import styles from "./highlighted-link.module.css";

export const HighlightedLink = ({ href, text }) => (
  <Link href={`/${href}`} passHref>
    <span className={styles.link}>
      <a>{text}</a>
      <img src="./img/arrow.png" />
    </span>
  </Link>
);
