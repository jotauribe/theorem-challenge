import styled from "styled-components";
import { MainLayout } from "src/layouts";
import { PrimaryButton, SecondaryButton } from "src/buttons";
import { Person, Question, useQuestionsFor } from "src/data";
import { borderColor } from "src/colors";
import { Loading } from "../Loading";

const Avatar = styled.img`
  border-radius: 50%;
  margin-right: 30px;
`;

const Buttons = styled.div`
  align-items: flex-end;
  display: flex;
  justify-content: space-between;
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
  defaultValue: string;
  onChange: (answer: string) => void;
  onSubmit: () => void;
  person: Person;
  question: Question;
};

export function View(props: Props) {
  const { defaultValue, onChange, onSubmit, person, question } = props;
  const questions = useQuestionsFor(person);
  if (questions === "loading") return <Loading />;
  const nextQuestion = questions.next(question);
  const prevQuestion = questions.prev(question);
  return (
    <MainLayout title="Give Feedback | Honesto">
      <Container>
        <QuestionContainer>
          <Avatar
            alt="User avatar"
            height={100}
            width={100}
            src={person.avatarUrl}
          />
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
                )}/${encodeURIComponent(prevQuestion.id)}`}
              >
                Previous
              </SecondaryButton>
            )}
          </div>
          <div>
            {nextQuestion ? (
              <PrimaryButton
                action={`/give/${encodeURIComponent(
                  person.id
                )}/${encodeURIComponent(nextQuestion.id)}`}
              >
                Next
              </PrimaryButton>
            ) : (
              <PrimaryButton action={onSubmit}>Complete</PrimaryButton>
            )}
          </div>
        </Buttons>
      </Container>
    </MainLayout>
  );
}
