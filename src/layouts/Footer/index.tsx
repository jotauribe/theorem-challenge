import styled from "styled-components";
import { accentColor } from "src/colors";
import logo from "./Theorem-logo.svg";

const Copyright = styled.div`
  font-size: 13px;
`;

const Root = styled.div`
  align-items: stretch;
  background-color: ${accentColor};
  box-sizing: border-box;
  color: white;
  display: flex;
  gap: 10px;
  justify-content: space-between;
  min-height: 60px;
  padding: 0 32px;
  & > * {
    align-items: center;
    display: flex;
  }
`;

export function Footer() {
  return (
    <Root>
      <a href="https://www.theorem.co/">
        <img alt="Theorem logo" src={logo} width={110} />
      </a>
      <Copyright>
        Copyright {new Date().getFullYear()} Theorem, LLC. All Rights Reserved.
      </Copyright>
    </Root>
  );
}
