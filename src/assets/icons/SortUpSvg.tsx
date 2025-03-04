import React from "react";
import { IconColor } from "./interface/ColorInterface";

export const SortUpSvg: React.FC<IconColor> = ({
  color,
  width,
  height,
  transform,
}) => (
  <svg
    width={width || "14"}
    height={height || "14"}
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.46055 5.11867C6.75848 4.82503 7.24152 4.82503 7.53945 5.11867L10.275 7.81485C10.7556 8.28853 10.4152 9.09844 9.73558 9.09844H4.26442C3.58476 9.09844 3.24438 8.28853 3.72498 7.81485L6.46055 5.11867Z"
      fill={color || "#CBD5E0"}
    />
  </svg>
);
