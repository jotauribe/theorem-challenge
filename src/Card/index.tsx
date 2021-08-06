import { ReactNode } from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  background-color: white;
  border-radius: 4px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
`;

type Props = {
  children: ReactNode;
};

export function Card(props: Props) {
  const { children } = props;
  return <CardContainer>{children}</CardContainer>;
}
