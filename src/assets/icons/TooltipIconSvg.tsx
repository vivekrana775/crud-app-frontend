import React from "react";
import { IconColor } from "./interface/ColorInterface";

export const TooltipIconSvg: React.FC<IconColor> = ({
  color,
  width = 20,
  height = 20,
  transform,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10 16.875C6.20304 16.875 3.125 13.797 3.125 10C3.125 6.20304 6.20304 3.125 10 3.125C13.797 3.125 16.875 6.20304 16.875 10C16.875 13.797 13.797 16.875 10 16.875ZM1.875 10C1.875 14.4873 5.51269 18.125 10 18.125C14.4873 18.125 18.125 14.4873 18.125 10C18.125 5.51269 14.4873 1.875 10 1.875C5.51269 1.875 1.875 5.51269 1.875 10Z"
      fill={color || "#A0AEC0"}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10 13.9583C10.3452 13.9583 10.625 13.6785 10.625 13.3333V10C10.625 9.65482 10.3452 9.375 10 9.375C9.65482 9.375 9.375 9.65482 9.375 10V13.3333C9.375 13.6785 9.65482 13.9583 10 13.9583Z"
      fill={color || "#A0AEC0"}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9.375 6.66667C9.375 7.01184 9.65482 7.29167 10 7.29167H10.0083C10.3535 7.29167 10.6333 7.01184 10.6333 6.66667C10.6333 6.32149 10.3535 6.04167 10.0083 6.04167H10C9.65482 6.04167 9.375 6.32149 9.375 6.66667Z"
      fill={color || "#A0AEC0"}
    />
  </svg>
);
