import { ReactNode } from "react";
import styled from "styled-components";
import { accentColor, primaryColor } from "src/colors";
import { Link } from "src/links";

const Button = styled.button`
  display: flex;
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
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
  &:hover {
    background-color: ${accentColor};
    transition: none;
  }
`;

type Props = {
  disabled?: boolean;
  action: string | (() => void);
  children: ReactNode;
};

export function PrimaryButton(props: Props) {
  const { action, children, ...otherProps } = props;
  if (typeof action === "string")
    return (
      <Button as={Link} href={action} {...otherProps}>
        {children}
      </Button>
    );
  return (
    <Button {...otherProps} onClick={action}>
      {children}
    </Button>
  );
}
