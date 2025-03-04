import Modal from "@mui/material/Modal";
import React from "react";
import "./PopupScreen.css";
import "./PopupScreen.module.sass";

type Props = {
  openDialog?: any;
  children?: any;
};

const PopupScreenDialog: React.FC<Props> = ({ children, openDialog }) => {
  const handleClose = () => {
    // setShowModalView(false);
  };
  return (
    <Modal
      disableAutoFocus={true}
      open={openDialog}
      onClose={handleClose}
      className="dialog-wrapper"
      sx={{
        outline: "0 !important",
        border: "none !important",
        borderRadius: "16px",
      }}
    >
      {children}
    </Modal>
  );
};

export default PopupScreenDialog;
