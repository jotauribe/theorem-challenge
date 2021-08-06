import styled from "styled-components";

const Answer = styled.div`
  font-size: 18px;
  line-height: 1.35;
`;
const Question = styled.div`
  font-weight: bold;
  margin-bottom: 20px;
`;
const Section = styled.div`
  margin-bottom: 40px;
`;

type Props = {
  answer: string;
  question: string;
};

export function FeedbackSection(props: Props) {
  const { answer, question } = props;

  return (
    <Section>
      <Question>{question}</Question>
      <Answer>{answer}</Answer>
    </Section>
  );
}
