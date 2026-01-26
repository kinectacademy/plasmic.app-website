/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon4Icon(props: Icon4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"#000"}
      data-name={"Layer 1"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g
        fill={"none"}
        stroke={"#020202"}
        strokeMiterlimit={"10"}
        strokeWidth={"1.91"}
      >
        <path
          d={
            "M17.07 20.61H9.79a2 2 0 0 1-2-2 2 2 0 0 1 2-2h1.87L5 9.86a2 2 0 0 1-.19-2.65 1.88 1.88 0 0 1 1.47-.68 1.84 1.84 0 0 1 1.35.55l4.06 4.06 4.08-3.06a1.91 1.91 0 0 1 2.5.18A17.2 17.2 0 0 1 22.42 15l.06.19"
          }
        ></path>

        <path
          d={
            "M10.63 10.12A4.7 4.7 0 0 0 11 8.17 4.78 4.78 0 1 0 6.26 13a4.7 4.7 0 0 0 1.55-.26"
          }
        ></path>
      </g>
    </svg>
  );
}

export default Icon4Icon;
/* prettier-ignore-end */
