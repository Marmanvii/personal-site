import Image from "next/image";
import styles from "./page.module.css";
import { sourceCodePro } from "./fonts/fonts";

export default function Home() {
  return (
    <div className={`${styles.body} ${sourceCodePro.className}`}>
      <div className={styles.content}>W.I.P.</div>
    </div>
  );
}
