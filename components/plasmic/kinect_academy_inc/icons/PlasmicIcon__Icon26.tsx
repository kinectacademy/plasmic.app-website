/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon26IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon26Icon(props: Icon26IconProps) {
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
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"2"}
        d={"M4 15h16M4 9h16"}
      ></path>

      <circle
        cx={"12"}
        cy={"12"}
        r={"9"}
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"2"}
      ></circle>

      <path
        fill={"currentColor"}
        d={
          "m12 20.818-.714.7a1 1 0 0 0 1.429 0zm0-17.636.715-.7a1 1 0 0 0-1.429 0zM14.6 12a11.56 11.56 0 0 1-3.314 8.118l1.429 1.4A13.56 13.56 0 0 0 16.6 12zm-3.314-8.118A11.56 11.56 0 0 1 14.6 12h2a13.56 13.56 0 0 0-3.885-9.518zM9.4 12a11.56 11.56 0 0 1 3.315-8.118l-1.429-1.4A13.56 13.56 0 0 0 7.4 12zm3.315 8.118A11.56 11.56 0 0 1 9.4 12h-2c0 3.705 1.483 7.066 3.886 9.518z"
        }
      ></path>
    </svg>
  );
}

export default Icon26Icon;
/* prettier-ignore-end */
