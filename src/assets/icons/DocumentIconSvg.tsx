import React from "react";
import { IconColor } from "./interface/ColorInterface";

export const DocumentIconSvg: React.FC<IconColor> = ({
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
      d="M9.1687 9.46452H4.95703"
      stroke={color || "white"}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9.1687 7.02214H4.95703"
      stroke={color || "white"}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6.56411 4.58561H4.95703"
      stroke={color || "white"}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9.27967 1.60449C9.27967 1.60449 4.80142 1.60683 4.79442 1.60683C3.18442 1.61674 2.1875 2.67608 2.1875 4.29191V9.65624C2.1875 11.2802 3.192 12.3437 4.816 12.3437C4.816 12.3437 9.29367 12.3419 9.30125 12.3419C10.9112 12.332 11.9088 11.2721 11.9088 9.65624V4.29191C11.9088 2.66791 10.9037 1.60449 9.27967 1.60449Z"
      stroke={color || "white"}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
