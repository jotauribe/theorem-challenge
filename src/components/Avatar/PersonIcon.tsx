import { SVGAttributes } from "react";
import styled from "styled-components";

const SVG = styled.svg`
  border-radius: 50%;
  box-sizing: border-box;
  padding: 0.25rem;
  background-color: black;
  font-size: 2rem;
`;

export function PersonIcon(props: SVGAttributes<SVGElement>) {
  const { height } = props;
  const computedHeight = typeof height === "number" ? height * 1.25 : height;

  return (
    <SVG
      stroke="white"
      fill="white"
      strokeWidth="0"
      viewBox="0 0 12 16"
      height="2rem"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      width={computedHeight}
    >
      <path d="M12 14.002a.998.998 0 0 1-.998.998H1.001A1 1 0 0 1 0 13.999V13c0-2.633 4-4 4-4s.229-.409 0-1c-.841-.62-.944-1.59-1-4 .173-2.413 1.867-3 3-3s2.827.586 3 3c-.056 2.41-.159 3.38-1 4-.229.59 0 1 0 1s4 1.367 4 4v1.002z"></path>
    </SVG>
  );
}
