import React from "react";
import { IconColor } from "./interface/ColorInterface";

export const EditIconSvg: React.FC<IconColor> = ({
  color,
  width,
  height,
  transform,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || "24"}
    height={height || "25"}
    viewBox="0 0 18 18"
    fill="none"
  >
    <path
      d="M8.24914 13.9276C7.14104 15.0584 3.39053 15.1597 3.12137 14.8466C2.85221 14.5334 2.97359 10.8793 4.07306 9.75125C5.17254 8.62324 7.63732 6.18095 9.76771 4.05627C12.8049 1.01895 16.9809 5.19527 13.9438 8.23259C11.8134 10.3573 9.35724 12.7967 8.24914 13.9276Z"
      stroke={color || "black"}
      stroke-width="1.125"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9.375 4.875L12.75 8.25"
      stroke={color || "black"}
      stroke-width="1.125"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10.5 15H14.25"
      stroke={color || "black"}
      stroke-width="1.125"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
