import { Box, BoxProps } from "@mui/material";
import React from "react";
import { CSSProperties, PropsWithChildren } from "react";

export type ImageElementProps = PropsWithChildren<
  BoxProps & {
    height?: string;
    title: string;
    onClick?: () => void;
    style?: CSSProperties;
    imageContainerStyles?: any;
  }
>;

export const ImageContainer: React.FC<ImageElementProps> = ({
  title,
  height,
  children,
  style,
  onClick,
  imageContainerStyles,
}) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        height: height,
        objectFit: "cover",
        cursor: onClick && "pointer",
        ...imageContainerStyles,
      }}
    >
      <img
        style={{ verticalAlign: "baseline", ...style }}
        width="100%"
        height="100%"
        alt={title ?? "Image"}
        src={children?.toString()}
      />
    </Box>
  );
};
