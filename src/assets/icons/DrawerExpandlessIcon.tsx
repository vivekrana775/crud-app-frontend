import React from "react";
import { IconColor } from "./interface/ColorInterface";

export const DrawerExpandlessIcon: React.FC<IconColor> = ({
  color,
  width,
  height,
  transform,
}) => (
  <svg
    width={width || "27"}
    height={height || "16"}
    viewBox="0 0 27 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.4714 3.52827C10.7317 3.78862 10.7317 4.21073 10.4714 4.47108L6.94279 7.99967L10.4714 11.5283C10.7317 11.7886 10.7317 12.2107 10.4714 12.4711C10.211 12.7314 9.78892 12.7314 9.52858 12.4711L5.52858 8.47108C5.26823 8.21073 5.26823 7.78862 5.52858 7.52827L9.52858 3.52827C9.78892 3.26792 10.211 3.26792 10.4714 3.52827Z"
      fill={color || "white"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.4714 3.52827C21.7317 3.78862 21.7317 4.21073 21.4714 4.47108L17.9428 7.99967L21.4714 11.5283C21.7317 11.7886 21.7317 12.2107 21.4714 12.4711C21.211 12.7314 20.7889 12.7314 20.5286 12.4711L16.5286 8.47108C16.2682 8.21073 16.2682 7.78862 16.5286 7.52827L20.5286 3.52827C20.7889 3.26792 21.211 3.26792 21.4714 3.52827Z"
      fill={color || "white"}
    />
  </svg>
);
