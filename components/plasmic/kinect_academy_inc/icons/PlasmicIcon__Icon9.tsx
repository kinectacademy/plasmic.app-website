/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon9IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon9Icon(props: Icon9IconProps) {
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

      <path
        fill={"#231F20"}
        d={
          "M56 0H8C5.789 0 4 1.789 4 4v56c0 2.211 1.789 4 4 4h20V48h8v16h20c2.211 0 4-1.789 4-4V4c0-2.211-1.789-4-4-4M28 40h-8v-8h8zm0-16h-8v-8h8zm16 16h-8v-8h8zm0-16h-8v-8h8z"
        }
      ></path>
    </svg>
  );
}

export default Icon9Icon;
/* prettier-ignore-end */
