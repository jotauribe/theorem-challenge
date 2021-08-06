import { ReactNode } from "react";
import styled from "styled-components";
import { primaryLightColor, primaryColor } from "src/colors";
import { Link } from "src/links";

const Button = styled.button`
  background-color: transparent;
  border: 1px solid ${primaryColor};
  border-radius: 4px;
  color: black;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  padding: 11px 29px;
  transition: 200ms ease-out;
  text-decoration: none;
  &:hover {
    background-color: ${primaryLightColor};
    transition: none;
  }
`;

type Props = {
  action: string | (() => void);
  children: ReactNode;
};

export function SecondaryButton(props: Props) {
  const { action, children } = props;
  if (typeof action === "string")
    return (
      <Button as={Link} href={action}>
        {children}
      </Button>
    );
  return <Button onClick={action}>{children}</Button>;
}
