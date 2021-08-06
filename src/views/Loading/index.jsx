import styled from "styled-components";
import { MainLayout } from "src/layouts";
import { Spinner } from "src/Spinner";

const Container = styled.div`
  align-items: center;
  display: flex;
  gap: 20px;
  justify-content: center;
  min-height: 400px;
  width: 100%;
`;

const H1 = styled.h1`
  font-size: 24px;
`;

export function Loading() {
  return (
    <MainLayout title="Loading">
      <Container>
        <Spinner />
        <H1>Loading...</H1>
      </Container>
    </MainLayout>
  );
}
