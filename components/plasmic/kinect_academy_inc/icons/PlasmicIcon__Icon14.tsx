/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon14IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon14Icon(props: Icon14IconProps) {
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
          "M1 12C1 6.477 5.477 2 11 2c5.387 0 9.779 4.26 9.992 9.594l1.3-1.301a1 1 0 1 1 1.415 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 1.414-1.414l1.282 1.282a8 8 0 1 0-1.766 5.453 1 1 0 0 1 1.554 1.258A9.98 9.98 0 0 1 11 22C5.477 22 1 17.523 1 12m11-6a1 1 0 1 0-2 0v6a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L12 11.586z"
        }
        clipRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default Icon14Icon;
/* prettier-ignore-end */
