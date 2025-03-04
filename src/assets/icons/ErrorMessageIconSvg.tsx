import { IconColor } from "./interface/ColorInterface";

export const ErrorMessageIconSvg: React.FC<IconColor> = ({
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
      cx="16.5713"
      cy="15.4287"
      r="12"
      fill="white"
      stroke="white"
      stroke-width="2.26667"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 20.1429L21.1429 11"
      stroke="#E03137"
      stroke-width="1.64571"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21.1429 20.1429L12 11"
      stroke="#E03137"
      stroke-width="1.64571"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
