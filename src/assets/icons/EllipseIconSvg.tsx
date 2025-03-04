import React from "react";
import { IconColor } from "./interface/ColorInterface";

export const EllipseIconSvg: React.FC<IconColor> = ({
  color,
  width,
  height,
  opacity,
  transform,
}) => (
  <svg
    width={width || "4"}
    height={height || "4"}
    viewBox="0 0 4 4"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="2"
      cy="2"
      r="2"
      fill={color || "white"}
      fill-opacity={opacity || "0.12"}
    />
  </svg>
);
