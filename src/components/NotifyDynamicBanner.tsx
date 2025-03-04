import { Box, Button, Typography } from "@mui/material";
import React from "react";
import PastDueNotifyIcon from "../assets/icons/PastDueNotifyIcon/PastDueNotifyIcon";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type DynamicBannerProps = {
  title?: string;
  message?: string;
  bgColor?: string;
  textColor?: string;
  width?: string;
  height?: string;
  paddingX?: string;
  buttonText?: string;
  buttonBgColor?: string;
  buttonHoverColor?: string;
  buttonTextColor?: string;
  borderRadius?: string;
  icon?: React.ReactNode;
  onButtonClick?: () => void;
};
const NotifyDynamicBanner: React.FC<DynamicBannerProps> = (props) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        color: props.textColor || "#FFFFFF",
        width: props.width || "100%",
        minHeight: "80px",
        height: props.height || "auto",
        boxSizing: "border-box",
        paddingX: props.paddingX || { xs: "10px", md: "80px" },
        paddingY: { xs: "16px", md: "0" },
        backgroundColor: props.bgColor || "rgba(226, 84, 84, 0.16)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        {props.icon || <PastDueNotifyIcon />}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "16px", md: "20px" },
              fontWeight: "500",
              lineHeight: "22px",
              color: props.textColor || "#E25454",
            }}
          >
            {props.title ? `${props.title}` + "\u00A0" : "Title" + "\u00A0"}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "20px" },
              fontWeight: "400",
              lineHeight: "22px",
              color: props.textColor || "#E25454",
            }}
          >
            {props.message || "Please add your message here."}
          </Typography>
        </Box>
      </Box>
      <Button
        variant="contained"
        sx={{
          width: "fit-contnet",
          backgroundColor: props.buttonBgColor || "#E25454",
          color: props.buttonTextColor || "#FFFFFF",
          padding: { xs: "5px 5px", md: "15px 16px" },
          fontSize: { xs: "10px", md: "16px" },
          fontWeight: "600",
          lineHeight: "22px",
          borderRadius: props.borderRadius || "10px",
          textTransform: "none",
          border: "1px solid #3D3D3D",
          "&:hover": {
            backgroundColor: props.buttonHoverColor || "#C0392B",
          },
        }}
        onClick={props.onButtonClick || (() => alert("Done"))}
      >
        {props.buttonText || "Retry Payment"}
      </Button>
    </Box>
  );
};

export default NotifyDynamicBanner;
