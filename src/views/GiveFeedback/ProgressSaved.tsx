import styled from "styled-components";
import { Card } from "src/Card";
import { MainLayout } from "src/layouts";

const H1 = styled.h1`
  font-size: 28px;
  margin: 0 0 40px;
`;

const Message = styled.div`
  font-size: 18px;
  line-height: 1.4;
  padding: 40px 40px 50px;
`;

const P = styled.p`
  margin: 0;
`;

export function ProgressSaved() {
  return (
    <MainLayout title="Feedback submitted | Honesto">
      <Card>
        <Message>
          <H1>Progress Saved</H1>
          <P>Your feedback draft has been saved!</P>
        </Message>
      </Card>
    </MainLayout>
  );
}
