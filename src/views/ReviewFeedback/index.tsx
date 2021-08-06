import styled from "styled-components";
import { Card } from "src/Card";
import { primaryLightColor, primaryMediumColor, borderColor } from "src/colors";
import { usePeople } from "src/data";
import { MainLayout } from "src/layouts";
import { Link } from "src/links";
import { Loading } from "../Loading";
import { NotFound } from "../NotFound";
import { Feedback } from "./Feedback";

const Avatar = styled.img`
  border-radius: 50%;
  height: 50px;
  width: 50px;
`;
const FeedbackContainer = styled.div`
  flex: 1;
`;
const H1 = styled.h1`
  margin-bottom: 32px;
  margin-top: 0;
`;
const Layout = styled.div`
  display: flex;
`;
const PeopleList = styled.div`
  border-right: 1px solid ${borderColor};
`;
const PersonLink = styled(Link)`
  align-items: center;
  border-bottom: 1px solid ${borderColor};
  color: black;
  cursor: pointer;
  display: flex;
  font-size: 16px;
  gap: 12px;
  padding: 15px 10px 15px 20px;
  text-decoration: none;
  transition: 200ms ease-out;
  width: 250px;
  &:hover {
    background-color: ${primaryLightColor};
    transition: none;
  }
  &.current {
    background-color: ${primaryMediumColor};
    transition: none;
  }
`;

type Props = {
  personId?: string;
};

export function ReviewFeedback(props: Props) {
  const { personId } = props;
  const people = usePeople();
  if (people === "loading") return <Loading />;
  const person = personId ? people.find((p) => p.id === personId) : undefined;
  if (personId && !person) return <NotFound />;
  return (
    <MainLayout title="Review Feedback | Honesto">
      <H1>Review Feedback</H1>
      <Card>
        <Layout>
          <PeopleList>
            {people.map((p) => (
              <PersonLink
                className={p.id === person?.id ? "current" : ""}
                key={p.id}
                href={`/review/${encodeURIComponent(p.id)}`}
              >
                <Avatar alt="User avatar" src={p.avatarUrl} />
                <div>{p.name}</div>
              </PersonLink>
            ))}
          </PeopleList>
          <FeedbackContainer>
            {person && <Feedback person={person} />}
          </FeedbackContainer>
        </Layout>
      </Card>
    </MainLayout>
  );
}
