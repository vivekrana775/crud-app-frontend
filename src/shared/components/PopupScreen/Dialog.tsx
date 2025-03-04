import React, { CSSProperties, ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  ClickAwayListener,
  Box,
} from "@mui/material";
import { CrossIconSvg } from "../../../assets/icons/CrossIconSvg";

type PopupDialogProps = {
  open: boolean;
  onClose?: any;
  title?: any;
  children: ReactNode;
  style?: CSSProperties;
  titleStyle?: CSSProperties;
  onCloseState?: any;
  contentContainerStyles?: CSSProperties;
};

const PopupDialog = ({
  open,
  onClose,
  title,
  children,
  style,
  titleStyle,
  contentContainerStyles,
}: PopupDialogProps) => {
  const handleClickAway = () => {
    onClose();
  };

  return (
    <ClickAwayListener onClickAway={() => handleClickAway}>
      <Box className="HideScrollbar">
        <Dialog
          className="HideScrollbar"
          PaperProps={{
            sx: {
              borderRadius: "16px",
              padding: "24px",
              width: "100%",
              "&.MuiDialog-paper": {
                maxWidth: "none",
                height: "fit-content",
              },
              ...style,
            },
          }}
          open={open}
          onClose={handleClickAway}
        >
          <DialogTitle
            sx={{
              padding: "0px",
              // fontSize: "18px !important",
              fontWeight: "500",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Box sx={{ ...titleStyle }}>{title}</Box>
            <Box
              onClick={() => {
                onClose();
              }}
              sx={{
                cursor: "pointer",
                alignSelf: "start",
                width: "24px",
                height: "24px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CrossIconSvg width={"24px"} height={"24px"} color="white" />
            </Box>
          </DialogTitle>
          <DialogContent
            className="HideScrollbar"
            sx={{
              padding: "0px",
              // maxWidth: "240px",
              "&.MuiDialogContent-root": {
                overflowY: "scroll !important",
              },
              ...contentContainerStyles,
            }}
          >
            {children}
          </DialogContent>
        </Dialog>
      </Box>
    </ClickAwayListener>
  );
};

export default PopupDialog;
