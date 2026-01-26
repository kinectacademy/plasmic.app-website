/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon16IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon16Icon(props: Icon16IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      version={"1.1"}
      viewBox={"-5.5 0 32 32"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M1.188 5.594h18.438c.625 0 1.188.563 1.188 1.188V25.22c0 .625-.563 1.188-1.188 1.188H1.188C.563 26.408 0 25.845 0 25.22V6.782c0-.625.563-1.188 1.188-1.188m13.593 11.687h2.875l.125-2.75h-3V12.5c0-.781.156-1.219 1.156-1.219h1.75l.063-2.563s-.781-.125-1.906-.125c-2.75 0-3.969 1.719-3.969 3.563v2.375H9.844v2.75h2.031v7.625h2.906z"
        }
      ></path>
    </svg>
  );
}

export default Icon16Icon;
/* prettier-ignore-end */
