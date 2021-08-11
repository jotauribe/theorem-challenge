import styled from "styled-components";
import { Card } from "src/Card";
import { primaryLightColor, primaryMediumColor, borderColor } from "src/colors";
import { useProvidedFeedback } from "src/data";
import { MainLayout } from "src/layouts";
import { Link } from "src/links";
import { Loading } from "../Loading";
import { NotFound } from "../NotFound";
import { Feedback } from "./Feedback";
import AvatarComponent from "../../components/Avatar";
import NoReviewsYet from "../../components/NoReviewsYet";

const Avatar = styled(AvatarComponent)`
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
  const feedback = useProvidedFeedback();
  if (feedback === "loading") return <Loading />;
  const selectedPerson = personId
    ? feedback.find((f) => f.person.id === personId)?.person
    : undefined;
  if (personId && !selectedPerson) return <NotFound />;
  if (!feedback.length) return <NoReviewsYet />;
  return (
    <MainLayout title="Review Feedback | Honesto">
      <H1>Review Feedback</H1>
      <Card>
        <Layout>
          <PeopleList>
            {feedback.map((f) => (
              <PersonLink
                className={f.person.id === selectedPerson?.id ? "current" : ""}
                key={f.person.id}
                href={`/review/${encodeURIComponent(f.person.id)}`}
              >
                <Avatar src={f.person.avatarUrl} />
                <div>{f.person.name}</div>
              </PersonLink>
            ))}
          </PeopleList>
          <FeedbackContainer>
            {selectedPerson && <Feedback person={selectedPerson} />}
          </FeedbackContainer>
        </Layout>
      </Card>
    </MainLayout>
  );
}
