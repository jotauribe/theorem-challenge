import { Redirect } from "react-router-dom";
import { Person, usePersonById, useQuestionsFor } from "src/data";
import { Loading } from "../Loading";
import { NotFound } from "../NotFound";
import { State } from "./State";

function RedirectToFirstQuestion(props: { person: Person }) {
  const { person } = props;
  const questions = useQuestionsFor(person);
  if (questions === "loading") return <Loading />;
  return (
    <Redirect
      to={`/give/${encodeURIComponent(person.id)}/${encodeURIComponent(
        questions.first.id
      )}`}
    />
  );
}

type Props = {
  personId: string;
  questionId?: string;
};

export function GiveFeedback(props: Props) {
  const { personId, questionId } = props;
  const person = usePersonById(personId);
  if (person === "loading") return <Loading />;
  if (person === "not-found") return <NotFound />;
  if (!questionId) return <RedirectToFirstQuestion person={person} />;
  return <State key={personId} person={person} questionId={questionId} />;
}
