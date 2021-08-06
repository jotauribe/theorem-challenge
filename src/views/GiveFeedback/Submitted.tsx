import styled from "styled-components";
import { Card } from "src/Card";
import { accentColor, primaryColor } from "src/colors";
import { Person } from "src/data";
import { MainLayout } from "src/layouts";
import { Link } from "src/links";

const A = styled(Link)`
  color: ${primaryColor};
  font-weight: bold;
  text-decoration: none;
  &:hover {
    color: ${accentColor};
  }
`;

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
type Props = {
  person: Person;
};

export function Submitted(props: Props) {
  const { person } = props;
  return (
    <MainLayout title="Feedback submitted | Honesto">
      <Card>
        <Message>
          <H1>Submitted</H1>
          <P>Your feedback has been submitted!</P>
          <P>
            You can see it on the{" "}
            <A href={`/review/${encodeURIComponent(person.id)}`}>
              review feedback
            </A>{" "}
            page.
          </P>
        </Message>
      </Card>
    </MainLayout>
  );
}
