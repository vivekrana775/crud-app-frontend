import { Box, BoxProps } from "@mui/material";
import React from "react";
import { PropsWithChildren } from "react";

export type RotateElementProps = PropsWithChildren<
  BoxProps & {
    rotate: string;
    onClick?: () => void;
    sx?: any;
  }
>;

export const RotateElement: React.FC<RotateElementProps> = ({
  rotate,
  onClick,
  children,
  sx,
}) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        rotate: rotate,
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};
