import React from "react";
import { IconColor } from "./interface/ColorInterface";

export const MessageIconSvg: React.FC<IconColor> = ({
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
      d="M8.69628 9.05793H14.7279M8.69628 12.5141H12.5346M13.1107 18.9268H14.1721C17.0589 18.9268 19.5701 16.8499 20.2476 13.9021C20.5841 12.4382 20.5841 10.9113 20.2476 9.44741L20.1588 9.06088C19.5057 6.21958 17.377 4.01204 14.6641 3.36264L14.283 3.27141C12.7712 2.90953 11.2013 2.90953 9.68953 3.27141L9.46648 3.32481C6.65677 3.99738 4.45212 6.28371 3.77571 9.22642C3.40585 10.8355 3.40923 12.5287 3.77909 14.1378C4.46607 17.1265 6.48688 19.6138 9.19777 20.7728L9.31593 20.8233C10.489 21.3248 11.8329 20.7208 12.3142 19.4902C12.4467 19.1515 12.7622 18.9268 13.1107 18.9268Z"
      stroke={color || "white"}
      stroke-width="1.8"
      stroke-linecap="round"
    />
  </svg>
);
