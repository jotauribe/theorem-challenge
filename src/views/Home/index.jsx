import styles from "./styles.css";
import { Card } from "src/Card";
import { MainLayout } from "src/layouts";
import { usePeople } from "src/data";
import { Loading } from "../Loading";
import { Line } from "./Line";

export function Home() {
  const people = usePeople();
  if (people === "loading") return <Loading />;
  return (
    <MainLayout title="Home | Honesto">
      <h1 className={styles.heading}>Give Feedback</h1>
      <Card>
        {people.map((person) => (
          <Line key={person.id} person={person} />
        ))}
      </Card>
    </MainLayout>
  );
}
