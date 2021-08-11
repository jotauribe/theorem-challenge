import { useState, ImgHTMLAttributes } from "react";
import styled from "styled-components";

import { PersonIcon } from "./PersonIcon";

const StyledImage = styled.img`
  border-radius: 50%;
`;

export function Avatar(props: ImgHTMLAttributes<HTMLImageElement>) {
  const { src, className, ...otherProps } = props;
  const [errorLoadingImg, setErrorLoadingImg] = useState(false);
  const onError = () => {
    if (!errorLoadingImg) setErrorLoadingImg(true);
  };

  return errorLoadingImg ? (
    <PersonIcon
      height={props.height}
      width={props.width}
      className={className}
    />
  ) : (
    <StyledImage
      src={src}
      alt="User avatar"
      className={className}
      onError={onError}
      {...otherProps}
    />
  );
}
