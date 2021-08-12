import { Redirect } from "react-router-dom";
import {
  Person,
  useFeedbackFor,
  usePersonById,
  useQuestionsFor,
} from "src/data";
import { Loading } from "../Loading";
import { NotFound } from "../NotFound";
import { getLastAnsweredQuestion } from "./GiveFeedback.utils";
import { State } from "./State";

type RedirectToFirstQuestionProps = {
  person: Person;
  feedbackId: string;
};

function RedirectToFirstQuestion(props: RedirectToFirstQuestionProps) {
  const { person, feedbackId } = props;
  const feedback = useFeedbackFor(person);
  const questions = useQuestionsFor(person);
  const queryParams = feedbackId
    ? `feedbackId=${encodeURIComponent(feedbackId)}`
    : "";

  if (questions === "loading") return <Loading />;
  const firstQuestion = getLastAnsweredQuestion(feedback) || questions.first;

  return (
    <Redirect
      to={`/give/${encodeURIComponent(person.id)}/${encodeURIComponent(
        firstQuestion.id
      )}?${queryParams}`}
    />
  );
}

type GiveFeedbackProps = {
  personId: string;
  questionId?: string;
  feedbackId?: string;
};

export function GiveFeedback(props: GiveFeedbackProps) {
  const { personId, questionId, feedbackId = "" } = props;
  const person = usePersonById(personId);
  if (person === "loading") return <Loading />;
  if (person === "not-found") return <NotFound />;
  if (!questionId)
    return <RedirectToFirstQuestion person={person} feedbackId={feedbackId} />;
  return (
    <State
      key={personId}
      person={person}
      questionId={questionId}
      feedbackId={feedbackId}
    />
  );
}
