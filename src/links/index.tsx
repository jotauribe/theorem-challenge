import { AnchorHTMLAttributes } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const RoutingLink = styled(NavLink)`
  &.active {
    pointer-events: none;
  }
`;

export function Link(props: AnchorHTMLAttributes<HTMLAnchorElement>) {
  const { href } = props;
  if (href === "/" || href?.match(/^\/[^/]/))
    return <RoutingLink {...props} exact to={href} />;
  return <a {...props} />;
}
