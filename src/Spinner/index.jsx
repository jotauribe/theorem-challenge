import styles from "./styles.css";

export function Spinner() {
  return (
    // https://loading.io/css/, CC0 license
    <div className={styles.ldsRing}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
