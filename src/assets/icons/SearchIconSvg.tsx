import React from "react";
import { IconColor } from "./interface/ColorInterface";

export const SearchIconSvg: React.FC<IconColor> = ({
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
    <circle
      cx="11.5"
      cy="11.5"
      r="9.5"
      stroke={color || "#1E191A"}
      stroke-width="1.5"
    />
    <path
      d="M18.5 18.5L22 22"
      stroke={color || "#1E191A"}
      stroke-width="1.5"
      stroke-linecap="round"
    />
  </svg>
);
