import React from "react";
import { IconColor } from "./interface/ColorInterface";

export const FilterIconSvg: React.FC<IconColor> = ({
  color,
  width,
  height,
  transform,
}) => (
  <svg
    width={width || "24"}
    height={height || "24"}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21.0573 8.18219H2.9387C2.3598 8.18219 1.89062 7.71292 1.89062 7.13406C1.89062 6.5552 2.35989 6.08594 2.9387 6.08594H21.0573C21.6361 6.08594 22.1053 6.55525 22.1053 7.13406C22.1053 7.71292 21.6361 8.18219 21.0573 8.18219Z"
      fill={color || "white"}
    />
    <path
      d="M18.1636 13.0455H5.83714C5.25828 13.0455 4.78906 12.5762 4.78906 11.9973C4.78906 11.4184 5.25833 10.9492 5.83714 10.9492H18.1636C18.7424 10.9492 19.2117 11.4185 19.2117 11.9973C19.2118 12.5762 18.7423 13.0455 18.1636 13.0455Z"
      fill={color || "white"}
    />
    <path
      d="M15.6545 17.9126H8.34109C7.76219 17.9126 7.29297 17.4433 7.29297 16.8645C7.29297 16.2856 7.76223 15.8164 8.34109 15.8164H15.6545C16.2334 15.8164 16.7026 16.2857 16.7026 16.8645C16.7026 17.4433 16.2333 17.9126 15.6545 17.9126Z"
      fill={color || "white"}
    />
  </svg>
);
