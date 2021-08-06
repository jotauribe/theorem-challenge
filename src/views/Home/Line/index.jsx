import styles from "./styles.css";
import { PrimaryButton } from "src/buttons";

export function Line({ person }) {
  return (
    <div className={styles.container}>
      <img alt="User avatar" className={styles.avatar} src={person.avatarUrl} />
      <div className={styles.name}>{person.name}</div>
      <PrimaryButton action={`/give/${encodeURIComponent(person.id)}`}>
        Give Feedback
      </PrimaryButton>
    </div>
  );
}
