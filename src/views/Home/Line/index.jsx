import styles from "./styles.css";
import { PrimaryButton } from "src/buttons";
import Avatar from "src/components/Avatar";

export function Line({ person }) {
  return (
    <div className={styles.container}>
      <Avatar className={styles.avatar} src={person.avatarUrl} />
      <div className={styles.name}>{person.name}</div>
      <PrimaryButton action={`/give/${encodeURIComponent(person.id)}`}>
        Give Feedback
      </PrimaryButton>
    </div>
  );
}
