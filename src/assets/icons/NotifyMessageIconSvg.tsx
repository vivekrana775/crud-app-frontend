import React from "react";
import { IconColor } from "./interface/ColorInterface";

export const NotifyMessageIconSvg: React.FC<IconColor> = ({
  color,
  width,
  height,
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
      d="M16 21.8999L16 16.5666"
      stroke="#4FAAF9"
      stroke-width="2.26667"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M16.0954 12.0047C16.4636 12.0047 16.762 11.7062 16.762 11.3381C16.762 10.9699 16.4636 10.6714 16.0954 10.6714C15.7272 10.6714 15.4287 10.9699 15.4287 11.3381C15.4287 11.7062 15.7272 12.0047 16.0954 12.0047Z"
      fill="#4FAAF9"
      stroke="#4FAAF9"
      stroke-width="2.26667"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
