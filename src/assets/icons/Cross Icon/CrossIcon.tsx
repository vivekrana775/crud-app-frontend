import React from "react";
import { IconColor } from "../interface/ColorInterface";

const CrossIcon: React.FC<IconColor> = ({
  color,
  width,
  height,
  transform,
}) => {
  return (
    <svg
      width={width || "32"}
      height={height || "32"}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 24L24 8"
        stroke="#FFFFFF"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M24 24L8 8"
        stroke="#FFFFFF"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default CrossIcon;
