import { Box, Typography } from "@mui/material";
import React from "react";
import { colors } from "../../utils/colors";
import { CSSProperties } from "@mui/styled-engine-sc";

type Props = {
  title: React.ReactNode | string; 
  sx?: CSSProperties;
  onClick?: any;
  isActive?: boolean;
  index?: any;
};

const Chip = (props: Props) => {
  return (
    <Box
      key={props?.index}
      onClick={props?.onClick && props?.onClick}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "10px",
        boxShadow: "inset 0px 0px 0px 1px #3D3D3D",
        bgcolor: props?.isActive ? "#CCFF00" : colors.primaryGrey,
        width: "fit-content",
        minWidth: "fit-content",
        padding: "8px 12px",
        height: "fit-content",
        gap: "16px",
        ...props?.sx,
      }}
    >
      <Typography
        color={props?.isActive ? "black" : "rgba(255, 255, 255, 0.5)"}
        variant="body2"
      >
        {props?.title}
      </Typography>
    </Box>
  );
};

export default Chip;
