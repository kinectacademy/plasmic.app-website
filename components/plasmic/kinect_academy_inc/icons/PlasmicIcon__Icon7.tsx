/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon7IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon7Icon(props: Icon7IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      xmlSpace={"preserve"}
      fill={"#000"}
      version={"1.0"}
      viewBox={"0 0 64 64"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path fill={"#B4CCB9"} d={"M52 56H36V44h-8v12H12V8h40z"}></path>

      <path
        fill={"#394240"}
        d={
          "M56 0H8C5.789 0 4 1.789 4 4v56c0 2.211 1.789 4 4 4h48c2.211 0 4-1.789 4-4V4c0-2.211-1.789-4-4-4m-4 56H36V44h-8v12H12V8h40z"
        }
      ></path>

      <path
        fill={"#394240"}
        d={"M36 16h8v8h-8zm-16 0h8v8h-8zm0 16h8v8h-8zm16 0h8v8h-8z"}
      ></path>
    </svg>
  );
}

export default Icon7Icon;
/* prettier-ignore-end */
