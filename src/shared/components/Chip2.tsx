import { Box, Typography } from "@mui/material";
import React from "react";
import { CSSProperties } from "@mui/styled-engine-sc";
import { colors } from "../../utils/colors";
import { CrossIconSvg } from "../../assets/icons/CrossIconSvg";

type Props = {
  title: string;
  sx?: CSSProperties;
  onRemove?: any;
};

const Chip2 = (props: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "10px",
        boxShadow: "inset 0px 0px 0px 1px #3D3D3D",
        bgcolor: colors.primaryGrey,
        width: "fit-content",
        padding: "8px 12px",
        gap: "16px",
        ...props?.sx,
      }}
    >
      <Typography color={"rgba(255, 255, 255, 0.5)"} variant="body2">
        {props?.title}
      </Typography>

      <Box sx={{ cursor: "pointer" }} onClick={props?.onRemove}>
        <CrossIconSvg width="12px" height="12px" color="white" />
      </Box>
    </Box>
  );
};

export default Chip2;
