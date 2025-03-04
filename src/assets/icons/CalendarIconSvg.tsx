import React from "react";
import { IconColor } from "./interface/ColorInterface";

export const CalendarIconSvg: React.FC<IconColor> = ({
  color,
  width = 24,
  height = 24,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M21 13C21 19.1111 19 21 12 21C5 21 3 19.1111 3 12.5C3 5.88889 5 4 12 4C19 4 21 5.88889 21 13Z"
      stroke={color || "black"}
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M16 6L16 3"
      stroke={color || "black"}
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8 6L8 3"
      stroke={color || "black"}
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <line
      x1="7.9"
      y1="10.1"
      x2="16.1"
      y2="10.1"
      stroke={color || "black"}
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
