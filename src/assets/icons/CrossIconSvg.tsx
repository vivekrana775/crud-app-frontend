import React from "react";
import { IconColor } from "./interface/ColorInterface";

export const CrossIconSvg: React.FC<IconColor> = ({
  color,
  width,
  height,
  transform,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || "15"}
    height={height || "14"}
    viewBox="0 0 15 14"
    fill="none"
  >
    <path
      d="M3.75 10.5L10.75 3.5"
      stroke={color || "black"}
      stroke-width="1.225"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10.75 10.5L3.75 3.5"
      stroke={color || "black"}
      stroke-width="1.225"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
