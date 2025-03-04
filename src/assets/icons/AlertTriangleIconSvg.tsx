import React from "react";
import { IconColor } from "./interface/ColorInterface";

export const AlertTriangleIconSvg: React.FC<IconColor> = ({
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
      d="M12 14L12 10"
      stroke={color || "white"}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M20.818 17.9906C21.3409 18.8795 20.7 20 19.6688 20H4.33122C3.3 20 2.65913 18.8795 3.18198 17.9906L10.8508 4.95372C11.3663 4.07731 12.6337 4.07731 13.1492 4.95372L20.818 17.9906Z"
      stroke={color || "white"}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 17.5C12.2761 17.5 12.5 17.2761 12.5 17C12.5 16.7239 12.2761 16.5 12 16.5C11.7239 16.5 11.5 16.7239 11.5 17C11.5 17.2761 11.7239 17.5 12 17.5Z"
      fill={color || "white"}
      stroke={color || "white"}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
