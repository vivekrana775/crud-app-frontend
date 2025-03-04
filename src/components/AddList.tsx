import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { CrossIconSvg } from "../assets/icons/CrossIconSvg";
import {
  ButtonPrimary,
  ButtonSecondary,
} from "../shared/components/button/Buttons";
import TextInput from "../shared/components/TextInput";
import { toastError } from "../utils/ToastMessage";

type Props = {
  activeDialog: any;
  handleDialog?: any;
  handleSaveList?: any;
  handleEditList?: any;
  isEditing?: any;
  data?: any;
  setActiveDialog: any;
};

const AddListPopup: React.FC<Props> = (props: Props) => {
  const { setActiveDialog, handleSaveList, isEditing, handleEditList, data } =
    props;
  const [title, setTitle] = useState(isEditing ? data?.title : "");
  const [description, setDescription] = useState(
    isEditing ? data?.description : ""
  );

  return (
    props?.activeDialog && (
      <>
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            bgcolor: "rgba(0, 0, 0, 0.60)",
            zIndex: 5000,
          }}
        >
          <Box
            sx={{
              width: "100vw",
              height: "100vh",
              border: "1px solid red",
              bgcolor: "rgba(0, 0, 0, 0.60)",
              filter: "blur(62px)",
            }}
          />
        </Box>

        <Box
          sx={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 6000,
          }}
        >
          <Box
            sx={{
              width: "510px",
              padding: "24px",
              // minHeight: "270px",
              height: "auto",
              bgcolor: "#1B1B1B",
              borderRadius: "14px",
              border: "1px solid #3D3D3D",
              cursor: "default",
              position: "relative",
            }}
          >
            {/* Dialog content */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                justifyContent: "center",
                gap: "24px",
              }}
            >
              {/* Title section */}
              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "24px",
                    lineHeight: "28px",
                    fontWeight: "600",
                    color: "#FFFFFF",
                  }}
                >
                  {isEditing ? "Edit" : "Add"} List
                </Typography>
                <Box
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveDialog(false);
                  }}
                  sx={{
                    position: "absolute",
                    right: "20px",
                    top: "20px",
                    cursor: "pointer",
                    color: "white",
                  }}
                >
                  <CrossIconSvg />
                </Box>
              </Box>
              <Box
                sx={{
                  width: "100%",
                }}
              >
                <Box sx={{ marginBottom: "24px" }}>
                  <TextInput
                    style={{ flex: 1 }}
                    label="Title"
                    lableStyles={{
                      fontSize: "16px !important",
                      fontWeight: "600",
                      lineHeight: "22px",
                    }}
                    placeholder="Enter Title"
                    type="text"
                    inputStyles={{
                      borderRadius: "14px !important",
                      height: "54px",
                      fontSize: "16px",
                      fontWeight: "400",
                      padding: "16px",
                      color: "#FFFFFF",
                    }}
                    value={title}
                    onChange={(e: any) => setTitle(e.target.value)}
                  />

                  <Typography
                    className="err_field"
                    id="createProductTitlebNotExist"
                    color="red"
                    variant="body2"
                  ></Typography>
                </Box>
                <Box>
                  <TextInput
                    style={{ flex: 1 }}
                    label="Description"
                    lableStyles={{
                      fontSize: "16px !important",
                      fontWeight: "600",
                      lineHeight: "22px",
                    }}
                    placeholder="Enter Description"
                    type="text"
                    inputStyles={{
                      borderRadius: "14px !important",
                      height: "54px",
                      fontSize: "16px",
                      fontWeight: "400",
                      padding: "16px",
                      color: "#FFFFFF",
                    }}
                    value={description}
                    onChange={(e: any) => setDescription(e.target.value)}
                  />

                  <Typography
                    className="err_field"
                    id="createProductTitlebNotExist"
                    color="red"
                    variant="body2"
                  ></Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "32px",
                }}
              >
                {/* -------Action buttons container------- */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px",
                    width: "218px",
                  }}
                >
                  <ButtonSecondary
                    sx={{
                      height: "46px",
                      width: "100%",
                      background: "transparent",
                      borderRadius: "14px",
                      padding: "15px 23.5px",
                    }}
                    onClick={() => {
                      setActiveDialog(false);
                    }}
                    LabelStyle={{
                      fontSize: "18px !important",
                      fontWeight: "600",
                      lineHeight: "22px",
                    }}
                    label="Cancel"
                  />
                  <ButtonPrimary
                    sx={{
                      height: "46px !important",
                      width: "100%",
                      padding: "15px 32px",
                      border: "1px solid #3D3D3D",
                    }}
                    onClick={() => {
                      if (isEditing) {
                        handleEditList({ title, description, id: data?.id });
                      } else {
                        handleSaveList({ title, description });
                      }
                    }}
                    LabelStyle={{
                      fontSize: "18px !important",
                      fontWeight: "600",
                      lineHeight: "22px",
                    }}
                    label={"Save"}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </>
    )
  );
};

export default AddListPopup;
