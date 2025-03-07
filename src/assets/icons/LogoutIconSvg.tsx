import React from "react";
import { IconColor } from "./interface/ColorInterface";

export const LogoutIconSvg: React.FC<IconColor> = ({
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
      d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4"
      stroke={color || "white"}
      stroke-width="1.5"
      stroke-linecap="round"
    />
    <path
      d="M4 12H14M14 12L11 9M14 12L11 15"
      stroke={color || "white"}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
