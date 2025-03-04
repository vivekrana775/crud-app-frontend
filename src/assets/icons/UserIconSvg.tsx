import React from "react";
import { IconColor } from "./interface/ColorInterface";

export const UserIconSvg: React.FC<IconColor> = ({
  color,
  width,
  height,
  transform,
}) => (
  <svg
    width={width || "64"}
    height={height || "64"}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="31.9987"
      cy="15.9987"
      r="10.6667"
      stroke={color || "#3D3D3D"}
      stroke-width="2"
    />
    <ellipse
      cx="31.9987"
      cy="45.3346"
      rx="18.6667"
      ry="10.6667"
      stroke={color || "#3D3D3D"}
      stroke-width="2"
    />
  </svg>
);
