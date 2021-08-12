import { useState } from "react";
import {
  Feedback,
  Person,
  useAddFeedbackFor,
  useFeedbackFor,
  useQuestionsFor,
} from "src/data";
import { Loading } from "../Loading";
import { NotFound } from "../NotFound";
import { Submitted } from "./Submitted";
import { Submitting } from "./Submitting";
import { ProgressSaved } from "./ProgressSaved";
import { View } from "./View";
import {
  buildAnswers,
  areAllQuestionsAnswered,
  getDefaultValue,
} from "./GiveFeedback.utils";

type Props = {
  person: Person;
  questionId: string;
  feedbackId?: string;
};

export function State(props: Props) {
  const { person, questionId, feedbackId = "" } = props;
  // Map from quesion id to answers
  const submission = useAddFeedbackFor(person);
  const feedback = useFeedbackFor(person);
  const questions = useQuestionsFor(person);
  const [answers, setAnswers] = useState<Map<string, string>>(new Map());
  const prevAnswers = (feedback as Feedback)?.answers || [];

  if (questions === "loading") return <Loading />;
  const question = questions.byId(questionId);
  if (!question) return <NotFound />;

  if (submission.status === "loading") return <Submitting />;
  if (submission.status === "success") {
    // prettier-ignore
    const isCompleted = areAllQuestionsAnswered(questions.all, answers, prevAnswers);
    if (isCompleted) return <Submitted person={person} />;
    else return <ProgressSaved />;
  }

  return (
    <View
      key={[person.id, questionId].join("-")}
      answers={answers}
      defaultValue={getDefaultValue(question.id, feedback, answers)}
      person={person}
      question={question}
      feedbackId={feedbackId}
      onChange={(newAnswer) =>
        setAnswers((prev) => {
          // Create a copy to avoid mutation
          const result = new Map(prev);
          result.set(question.id, newAnswer);
          return result;
        })
      }
      onSubmit={() => {
        submission.mutate({
          id: feedbackId,
          answers: [...prevAnswers, ...buildAnswers(questions.all, answers)],
        });
      }}
    />
  );
}
