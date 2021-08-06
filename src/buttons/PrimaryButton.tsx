import { ReactNode } from "react";
import styled from "styled-components";
import { accentColor, primaryColor } from "src/colors";
import { Link } from "src/links";

const Button = styled.button`
  background-color: ${primaryColor};
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  padding: 12px 30px;
  text-decoration: none;
  transition: 200ms ease-out;
  &:hover {
    background-color: ${accentColor};
    transition: none;
  }
`;

type Props = {
  action: string | (() => void);
  children: ReactNode;
};

export function PrimaryButton(props: Props) {
  const { action, children } = props;
  if (typeof action === "string")
    return (
      <Button as={Link} href={action}>
        {children}
      </Button>
    );
  return <Button onClick={action}>{children}</Button>;
}
