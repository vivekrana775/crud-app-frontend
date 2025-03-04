import React from "react";
import { IconColor } from "./interface/ColorInterface";

export const ImageIconSvg: React.FC<IconColor> = ({
  color,
  width,
  height,
  transform,
}) => (
  <svg
    width={width || "44"}
    height={height || "44"}
    viewBox="0 0 44 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M38.5 22.9706C38.5 34.8333 34.8333 38.5 22 38.5C9.16667 38.5 5.5 34.8333 5.5 22C5.5 9.16667 9.16667 5.5 22 5.5C34.8333 5.5 38.5 9.16667 38.5 22.9706Z"
      stroke={color || "#CCFF00"}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6.41602 29.3333C6.41602 29.3333 8.24935 22 12.8327 22C17.416 22 18.8483 31.1667 22.916 31.1667C26.9837 31.1667 27.4993 27.5 30.2493 27.5C32.9993 27.5 35.7493 33 35.7493 33"
      stroke={color || "#CCFF00"}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <circle
      cx="27.5007"
      cy="16.4987"
      r="3.66667"
      stroke={color || "#CCFF00"}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
