import { Box } from "@mui/material";
import React from "react";
import { EllipseIconSvg } from "../../assets/icons/EllipseIconSvg";
import { MagicStarIconSvg } from "../../assets/icons/MagicStarIconSvg";

type Props = {};

const Seperator2 = (props: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        gap: "28px",
      }}
    >
      <Box
        sx={{
          flex: 1,
          height: "1px",
          backgroundColor: "rgba(255, 255, 255, 0.12)",
        }}
      ></Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "16px",
        }}
      >
        <EllipseIconSvg />
        <MagicStarIconSvg />
        <EllipseIconSvg />
      </Box>
      <Box
        sx={{
          flex: 1,
          height: "1px",
          backgroundColor: "rgba(255, 255, 255, 0.12)",
        }}
      ></Box>
    </Box>
  );
};

export default Seperator2;
