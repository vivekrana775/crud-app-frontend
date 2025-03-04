import React from "react";
import { IconColor } from "./interface/ColorInterface";

export const SuccessMessageIconSvg: React.FC<IconColor> = ({
  color,
  width,
  height,
  transform,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || "32"}
    height={height || "32"}
    viewBox="0 0 32 32"
    fill="none"
  >
    <circle
      cx="16"
      cy="16"
      r="12"
      fill="white"
      stroke="white"
      stroke-width="2.26667"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10.2861 15.8732L13.764 19.592L21.7147 11.4287"
      stroke={color || "#80C242"}
      stroke-width="2.05714"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
