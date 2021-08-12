import styles from "./styles.css";
import { Card } from "src/Card";
import { MainLayout } from "src/layouts";
import { usePeopleWithLatestFeedbackStatus } from "src/data";
import { Loading } from "../Loading";
import { Line } from "./Line";

export function Home() {
  const people = usePeopleWithLatestFeedbackStatus();
  if (people === "loading") return <Loading />;
  return (
    <MainLayout title="Home | Honesto">
      <h1 className={styles.heading}>Give Feedback</h1>
      <Card>
        {people.map(({ person, feedbackStatus }) => (
          <Line
            key={person?.id}
            person={person}
            feedbackStatus={feedbackStatus}
          />
        ))}
      </Card>
    </MainLayout>
  );
}
