import React from "react";
import { IconColor } from "./interface/ColorInterface";

export const LogoutIcon: React.FC<IconColor> = ({
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
      d="M11 18C11 20 11 21 7 21C3 21 3 20 3 12C3 4 3 3 7 3C11 3 11 4 11 6"
      stroke={color || "#1E191A"}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M11 12H21"
      stroke={color || "#1E191A"}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M17 16L21 12L17 8"
      stroke={color || "#1E191A"}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
