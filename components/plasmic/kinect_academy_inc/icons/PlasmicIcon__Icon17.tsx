/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon17IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon17Icon(props: Icon17IconProps) {
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
          "M12.002 2C6.369 2 2 6.126 2 11.701c0 2.916 1.195 5.435 3.14 7.174.162.146.26.349.268.57l.056 1.78a.798.798 0 0 0 1.121.705l1.986-.875a.8.8 0 0 1 .533-.04c.912.25 1.883.386 2.895.386C17.63 21.4 22 17.275 22 11.7S17.632 2 12.002 2m5.25 7.579L14.75 13.55a1.28 1.28 0 0 1-1.85.342l-1.992-1.493a.51.51 0 0 0-.615 0l-2.688 2.04c-.356.273-.828-.157-.589-.536L9.52 9.932a1.28 1.28 0 0 1 1.85-.342l1.992 1.493a.51.51 0 0 0 .614 0l2.688-2.04c.36-.277.832.153.589.536"
        }
        clipRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default Icon17Icon;
/* prettier-ignore-end */
