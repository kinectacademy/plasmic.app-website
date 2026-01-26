/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon5Icon(props: Icon5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        fillRule={"evenodd"}
        d={
          "M1.5 4.075C.897 2.467 2.467.897 4.075 1.5l17.14 6.428c1.907.715 1.65 3.488-.354 3.842l-7.727 1.364-1.364 7.727c-.354 2.005-3.127 2.26-3.842.354zm1.873-.702L9.8 20.513l1.364-7.727a2 2 0 0 1 1.622-1.622L20.513 9.8z"
        }
        clipRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default Icon5Icon;
/* prettier-ignore-end */
