import { useState } from "react";
import { Person, useAddFeedbackFor, useQuestionsFor } from "src/data";
import { Loading } from "../Loading";
import { NotFound } from "../NotFound";
import { Submitted } from "./Submitted";
import { Submitting } from "./Submitting";
import { View } from "./View";

type Props = {
  person: Person;
  questionId: string;
};

export function State(props: Props) {
  const { person, questionId } = props;

  // Map from quesion id to answers
  const [answers, setAnswers] = useState<Map<string, string>>(new Map());

  const submission = useAddFeedbackFor(person);

  const questions = useQuestionsFor(person);
  if (questions === "loading") return <Loading />;
  const question = questions.byId(questionId);
  if (!question) return <NotFound />;

  if (submission.status === "loading") return <Submitting />;
  if (submission.status === "success") return <Submitted person={person} />;

  return (
    <View
      defaultValue={answers.get(question.id) || ""}
      key={[person.id, questionId].join("-")}
      onChange={(newAnswer) =>
        setAnswers((prev) => {
          // Create a copy to avoid mutation
          const result = new Map(prev);
          result.set(question.id, newAnswer);
          return result;
        })
      }
      onSubmit={() => {
        submission.mutate(
          questions.all.map((q) => {
            return {
              question: q,
              answer: answers.get(q.id) || "",
            };
          })
        );
      }}
      person={person}
      question={question}
    />
  );
}
