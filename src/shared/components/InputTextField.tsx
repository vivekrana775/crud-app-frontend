import { Box } from "@mui/material";
import React from "react";

const InputTextField = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        borderRadius: "12px",
        maxWidth: "480px",
        gap: "12px",
      }}
    >
      <label
        htmlFor="LoginInputFields"
        style={{
          fontSize: "18px",
          fontWeight: "600",
          display: "flex",
          alignItems: "center",
          letterSpacing: "0.48px",
          color: "#FFFFFF",
        }}
      >
        Email
        <span
          style={{
            color: "red",
            marginLeft: "2px",
          }}
        >
          *
        </span>
      </label>
      <input
        id="LoginInputFields"
        type="email"
        placeholder="Email"
        className="placeholder"
        style={{
          backgroundColor: "#1B1B1B",
          borderRadius: "14px",
          height: "54px",
          padding: "15px 0px 15px 24px",
          width: "100%",
          outline: "none",
          fontWeight: "400",
          lineHeight: "24px",
        }}
        onChange={(e) => { }}
        // value={value}
        required
        onFocus={(e) => {
          e.target.style.color
        }}
        onBlur={(e) => {
          e.target.style.color
        }}
      />
    </Box>
  );
};

export default InputTextField;
