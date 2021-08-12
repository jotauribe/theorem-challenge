import styled from "styled-components";
import { MainLayout } from "src/layouts";
import { PrimaryButton, SecondaryButton } from "src/buttons";
import { Person, Question, useQuestionsFor } from "src/data";
import { borderColor } from "src/colors";
import { Loading } from "../Loading";
import AvatarComponent from "../../components/Avatar";

const Avatar = styled(AvatarComponent)`
  border-radius: 50%;
  margin-right: 30px;
`;

const Buttons = styled.div`
  align-items: flex-end;
  display: flex;
  justify-content: space-between;
`;

const PrimaryButtonsContainer = styled.div`
  align-items: flex-end;
  display: flex;
  justify-content: space-between;
  & > * {
    margin-right: 1rem;
  }
`;

const Container = styled.div`
  background-color: white;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  padding: 40px;
`;

const H1 = styled.h1`
  font-size: 28px;
  font-weight: 300;
  margin: 0;
`;

const QuestionContainer = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 40px;
`;

const Textarea = styled.textarea`
  border: none;
  border: 1px solid ${borderColor};
  box-sizing: border-box;
  font-family: serif;
  font-size: 18px;
  margin-bottom: 40px;
  min-height: 300px;
  min-width: 300px;
  padding: 16px 20px;
  resize: vertical;
  width: 100%;
`;

type Props = {
  answers: Map<string, string>;
  defaultValue: string;
  onChange: (answer: string) => void;
  onSubmit: () => void;
  person: Person;
  question: Question;
  feedbackId?: string;
};

const createUrlToNextQuestion = (
  person: Person,
  nextQuestion: Question,
  queryParams: string
) => {
  return `/give/${encodeURIComponent(person.id)}/${encodeURIComponent(
    nextQuestion?.id
  )}?${queryParams}`;
};

export function View(props: Props) {
  const {
    answers,
    defaultValue,
    onChange,
    onSubmit,
    person,
    question,
    feedbackId,
  } = props;
  const questions = useQuestionsFor(person);
  if (questions === "loading") return <Loading />;
  const nextQuestion = questions.next(question);
  const prevQuestion = questions.prev(question);
  const isNextButtonEnabled = (answers.get(question.id)?.length || 0) > 0;
  // prettier-ignore
  const queryParams = feedbackId ? `feedbackId=${encodeURIComponent(feedbackId)}` : "";
  // prettier-ignore
  const urlToNextQuestion = createUrlToNextQuestion(person, nextQuestion as Question, queryParams);
  const nextButtonAction = isNextButtonEnabled ? urlToNextQuestion : () => {};

  return (
    <MainLayout title="Give Feedback | Honesto">
      <Container>
        <QuestionContainer>
          <Avatar height={100} width={100} src={person.avatarUrl} />
          <H1>{question.text}</H1>
        </QuestionContainer>
        <Textarea
          autoFocus
          defaultValue={defaultValue}
          onChange={(e) => onChange(e.target.value)}
        />
        <Buttons>
          <div>
            {prevQuestion && (
              <SecondaryButton
                action={`/give/${encodeURIComponent(
                  person.id
                )}/${encodeURIComponent(prevQuestion.id)}?${queryParams}`}
              >
                Previous
              </SecondaryButton>
            )}
          </div>
          <PrimaryButtonsContainer>
            {answers.size > 0 && (
              <SecondaryButton action={onSubmit}>Save Progress</SecondaryButton>
            )}
            {nextQuestion && (
              <SecondaryButton
                action={urlToNextQuestion}
                onClick={() => onChange("Question Skipped")}
              >
                Skip
              </SecondaryButton>
            )}
            {nextQuestion ? (
              <PrimaryButton
                disabled={!isNextButtonEnabled}
                action={nextButtonAction}
              >
                Next
              </PrimaryButton>
            ) : (
              <PrimaryButton action={onSubmit}>Complete</PrimaryButton>
            )}
          </PrimaryButtonsContainer>
        </Buttons>
      </Container>
    </MainLayout>
  );
}
