import styled from "styled-components";
import { Card } from "../../Card";
import { MainLayout } from "../../layouts";

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

export function NoReviewsYet() {
  return (
    <MainLayout title="Not reviews yet">
      <Card>
        <Message>
          <H1>No feedback to review yet</H1>
          <P>
            There is no feedback to review at this time. Please, try giving some
            feedback first.
          </P>
        </Message>
      </Card>
    </MainLayout>
  );
}
