import React from "react";
import { IconColor } from "./interface/ColorInterface";

export const DashboardIconSvg: React.FC<IconColor> = ({
  color,
  width,
  height,
  transform,
}) => (
  <svg
    width={width || "24"}
    height={height || "24"}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13 7.17647C13 10 12.5 10 8 10C3.5 10 3 10 3 7C3 4 3.5 4 8 4C12.5 4 13 4 13 7.17647Z"
      stroke={color || "white"}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M11 16.8235C11 14 11.5 14 16 14C20.5 14 21 14 21 17C21 20 20.5 20 16 20C11.5 20 11 20 11 16.8235Z"
      stroke={color || "white"}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21 7.17647C21 10 20.6 10 19 10C17.4 10 17 10 17 7C17 4 17.4 4 19 4C20.75 4 21 4 21 7.17647Z"
      stroke={color || "white"}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M3 16.8235C3 14 3.4 14 5 14C6.6 14 7 14 7 17C7 20 6.6 20 5 20C3.25 20 3 20 3 16.8235Z"
      stroke={color || "white"}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
