import { ReactNode } from "react";
import styled from "styled-components";
import { primaryLightColor, primaryColor } from "src/colors";
import { Link } from "src/links";

const Button = styled.button`
  display: flex;
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
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
  &:hover {
    background-color: ${primaryLightColor};
    transition: none;
  }
`;

type Props = {
  disabled?: boolean;
  action: string | (() => void);
  children: ReactNode;
  onClick?: () => void;
};

export function SecondaryButton(props: Props) {
  const { action, children, ...otherProps } = props;
  if (typeof action === "string")
    return (
      <Button as={Link} href={action} {...otherProps}>
        {children}
      </Button>
    );
  return (
    <Button onClick={action} {...otherProps}>
      {children}
    </Button>
  );
}
