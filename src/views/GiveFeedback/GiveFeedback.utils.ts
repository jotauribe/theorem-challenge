import { Feedback, FeedbackPiece, Question } from "src/data";

type Answers = Map<string, string>;
type MaybeFeedback = "loading" | Feedback | { answers: never[] };

export const buildAnswers = (questions: Question[], answers: Answers) => {
  const questionAsnwerPairs = questions.map((question) => ({
    question,
    answer: answers.get(question.id) || "",
  }));
  return questionAsnwerPairs.filter((a) => Boolean(a.answer));
};

export const areAllQuestionsAnswered = (
  questions: Question[],
  answers: Answers,
  prevAnswers: FeedbackPiece[]
) => {
  const answeredQuestions = buildAnswers(questions, answers) || [];
  return [...prevAnswers, ...answeredQuestions].length >= questions.length;
};

export const getLastAnsweredQuestion = (feedback: MaybeFeedback) => {
  if (feedback === "loading" || !feedback?.answers) return undefined;
  const lastIndex = feedback.answers?.length - 1;
  const lastAnswer = feedback.answers[lastIndex] || ({} as FeedbackPiece);
  return lastAnswer?.question;
};

export const getDefaultValue = (
  id: string,
  feedback: MaybeFeedback,
  answers: Answers
) => {
  if (feedback === "loading" || !feedback?.answers) return "";
  const answer = feedback.answers.find((a) => a.question.id === id)?.answer;
  return answer || answers.get(id) || "";
};
