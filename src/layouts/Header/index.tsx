import styled from "styled-components";
import { accentColor } from "src/colors";
import { Left } from "./Left";
import { Right } from "./Right";

const Root = styled.div`
  align-items: stretch;
  background-color: ${accentColor};
  box-shadow: 0px 0px 4px rgb(0 0 0 / 25%);
  box-sizing: border-box;
  color: white;
  display: flex;
  gap: 10px;
  justify-content: space-between;
  min-height: 76px;
  min-width: 100%;
  padding: 0 32px;
`;

export function Header() {
  return (
    <Root>
      <Left />
      <Right />
    </Root>
  );
}
