import React from "react";
import { IconColor } from "./interface/ColorInterface";

export const SortDownSvg: React.FC<IconColor> = ({
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
      d="M6.46055 8.87821C6.75848 9.17185 7.24152 9.17185 7.53945 8.87821L10.275 6.18202C10.7556 5.70835 10.4152 4.89844 9.73558 4.89844H4.26442C3.58476 4.89844 3.24438 5.70835 3.72498 6.18202L6.46055 8.87821Z"
      fill={color || "#CBD5E0"}
    />
  </svg>
);
