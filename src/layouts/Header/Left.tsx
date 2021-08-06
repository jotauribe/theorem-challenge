import styled from "styled-components";
import { Link } from "src/links";

const Container = styled.div`
  display: flex;
  gap: 10px;
  & > * {
    align-items: center;
    display: flex;
    padding-left: 15px;
    padding-right: 15px;
  }
`;

const LinkText = styled.div`
  align-items: center;
  border: 5px solid transparent;
  display: flex;
  .active & {
    border-bottom: 5px ridge white;
  }
`;

const Logo = styled(Link)`
  color: white;
  font-size: 28px;
  font-weight: bold;
  /* Adjust vertical align visually */
  padding-bottom: 2px;
  text-decoration: none;
`;

const NavLink = styled(Link)`
  align-items: stretch;
  color: white;
  display: flex;
  font-size: 18px;
  font-weight: bold;
  /* Adjust vertical align visually */
  padding-top: 6px;
  text-decoration: none;
`;

export function Left() {
  return (
    <Container>
      <Logo href="/">Honesto</Logo>
      <NavLink href="/">
        <LinkText>Give feedback</LinkText>
      </NavLink>
      <NavLink href="/review">
        <LinkText>Review feedback</LinkText>
      </NavLink>
    </Container>
  );
}
