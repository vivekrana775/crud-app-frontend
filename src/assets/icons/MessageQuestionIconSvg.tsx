import React from "react";
import { IconColor } from "./interface/ColorInterface";

export const MessageQuestionIconSvg: React.FC<IconColor> = ({
  color,
  width,
  height,
}) => (
  <svg
    width={width || "24"}
    height={height || "24"}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17 18.4337H13L8.54999 21.3936C7.88999 21.8336 7 21.3637 7 20.5637V18.4337C4 18.4337 2 16.4337 2 13.4337V7.43359C2 4.43359 4 2.43359 7 2.43359H17C20 2.43359 22 4.43359 22 7.43359V13.4337C22 16.4337 20 18.4337 17 18.4337Z"
      stroke={color || "white"}
      stroke-width="2"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M11.9998 11.3594V11.1494C11.9998 10.4694 12.4198 10.1094 12.8398 9.8194C13.2498 9.5394 13.6598 9.17941 13.6598 8.51941C13.6598 7.59941 12.9198 6.85938 11.9998 6.85938C11.0798 6.85938 10.3398 7.59941 10.3398 8.51941"
      stroke={color || "white"}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M11.9955 13.75H12.0045"
      stroke={color || "white"}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
