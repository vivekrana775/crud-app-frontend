import React from "react";
import { IconColor } from "./interface/ColorInterface";

export const LockIconSvg: React.FC<IconColor> = ({
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
      d="M20 15.5C20 19.5 18.5 21 12 21C5.5 21 4 19.5 4 15.5C4 11.5 5.5 10 12 10C18.5 10 20 11.5 20 15.5Z"
      stroke={color || "#F9B50B"}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 14V17"
      stroke={color || "#F9B50B"}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8 10C8 4.5 8.40001 3 12 3C15.6 3 16 4.5 16 10"
      stroke={color || "#F9B50B"}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
