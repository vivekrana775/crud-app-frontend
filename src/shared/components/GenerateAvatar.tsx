import React from "react";

interface GenerateAvatarProps {
  text: string;
  height?: string;
  width?: string;
  fontSize?: string;
  fill?: string;
  color?: string;
}

const GenerateAvatar: React.FC<GenerateAvatarProps> = ({
  text,
  height,
  width,
  fill,
  color,
  fontSize = "26",
}) => {
  const textStyle = {
    color: "#ffffff",
    lineHeight: 1,
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={width}
      height={height}
      viewBox="0 0 64 64"
      version="1.1"
    >
      <circle
        fill={fill || "#A0AEC0"}
        width={width || "100%"}
        height={height || "100%"}
        cx="32"
        cy="32"
        r="32"
      />
      <text
        x="50%"
        y="50%"
        style={textStyle}
        alignment-baseline="middle"
        text-anchor="middle"
        font-size={fontSize}
        font-weight="400"
        dy=".1em"
        dominant-baseline="middle"
        fill={color || "#ffffff"}
      >
        {text}
      </text>
    </svg>
  );
};

export default GenerateAvatar;
