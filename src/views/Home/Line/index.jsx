import styled from "styled-components";
import styles from "./styles.css";
import { PrimaryButton } from "src/buttons";
import Avatar from "src/components/Avatar";
import { useFeedbackFor } from "src/data";

const ActionButton = styled(PrimaryButton)`
  background-color: ${(props) => (props.status === "COMPLETED" ? "green" : "")};
`;

const getButtonLabel = (status) => {
  if (status === "INCOMPLETED") return "Complete Feedback";
  if (status === "COMPLETED") return "Feedback Completed";
  return "Give Feedback";
};

export function Line({ person, feedbackStatus }) {
  const feedback = useFeedbackFor(person);
  const queryParams = feedback?.id ? `feedbackId=${feedback.id}` : "";
  const action =
    feedbackStatus !== "COMPLETED"
      ? `/give/${encodeURIComponent(person.id)}?${queryParams}`
      : () => {};

  return (
    <div className={styles.container}>
      <Avatar className={styles.avatar} src={person.avatarUrl} />
      <div className={styles.name}>{person.name}</div>
      <ActionButton status={feedbackStatus} action={action}>
        {getButtonLabel(feedbackStatus)}
      </ActionButton>
    </div>
  );
}
