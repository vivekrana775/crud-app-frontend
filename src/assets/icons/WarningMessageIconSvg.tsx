import React from "react";
import { IconColor } from "./interface/ColorInterface";

export const WarningMessageIconSvg: React.FC<IconColor> = ({
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
      d="M16 16.0078L16 10.6745"
      stroke="#FCCB44"
      stroke-width="2.26667"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M16.0964 22.3387C16.4645 22.3387 16.763 22.0402 16.763 21.672C16.763 21.3038 16.4645 21.0054 16.0964 21.0054C15.7282 21.0054 15.4297 21.3038 15.4297 21.672C15.4297 22.0402 15.7282 22.3387 16.0964 22.3387Z"
      fill="#FCCB44"
      stroke="#FCCB44"
      stroke-width="2.26667"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
