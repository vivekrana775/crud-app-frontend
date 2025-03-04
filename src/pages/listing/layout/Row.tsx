import React, { useState } from "react";
import {
  Box,
  TableCell,
  TableRow,
  Typography,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ImageContainer } from "../../../shared/components/ImageContainer";
import { EditIcon, TrashIcon } from "../../../assets/icons/icons";
import { toastError, toastSuccess } from "../../../utils/ToastMessage";
import { deleteListById, updateList } from "../../../services/component";
import { getFormattedDateFull } from "../../../utils/extensions";
import AddListPopup from "../../../components/AddList";

interface TableRowProps {
  row: any;
  setRender: any;
  handleRefreshData: () => void;
}

const Row: React.FC<TableRowProps> = ({
  row,
  handleRefreshData,
  setRender,
}) => {
  const navigate = useNavigate();
  const [isActiveListingViewDialog, setIsActiveListingViewDialog] =
    useState(false);
  const [isActiveListingEditDialog, setIsActiveListingEditDialog] =
    useState(false);

  // Handle Delete Action
  const handleDeleteListing = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      deleteListById({ listId: row.id })
        .then(() => {
          setRender((prev) => !prev);
          toastSuccess("Deleted Successfully");
        })
        .catch((err) => {
          console.log("err", err);
          toastError("Failed", "Something went wrong while deleting.");
        });
    } catch (error) {
      console.error("Delete Error:", error);
      toastError("Something went wrong while deleting.");
    }
  };

  // Handle Edit Action
  const handleEdit = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsActiveListingEditDialog(true);
  };

  // Toggle Dialog Open/Close
  const toggleViewDialog = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setIsActiveListingViewDialog((prev) => !prev);
  };
  const toggleEditDialog = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setIsActiveListingEditDialog((prev) => !prev);
  };

  const handleEditList = async (data) => {
    if (!data?.id) {
      toastError("Failed", "Id is not there.");
      return;
    }

    await updateList(data)
      .then(() => {
        row.title = data?.title;
        row.description = data?.description;
        toastSuccess("Success", "Successfully added the list.");
      })
      .catch((err) => {
        console.log("err", err);
      });
    setIsActiveListingEditDialog(false);
  };

  return (
    <>
      <TableRow
        onClick={toggleViewDialog}
        sx={{
          cursor: "pointer",
          ":hover": {
            bgcolor: "rgba(255, 255, 255, 0.06)",
          },
          display: "flex",
          gap: "36px",
          paddingRight: "80px",
          height: "100px",
          borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
        }}
        hover
        tabIndex={-1}
        key={row?.id}
      >
        {/* Name Cell */}
        <TableCell
          sx={{
            borderBottom: "none",
            flex: 1,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ color: "#FFFFFF", fontWeight: 300 }}
            variant="body2"
          >
            {row?.title || "N/A"}
          </Typography>
        </TableCell>
        <TableCell
          sx={{
            borderBottom: "none",
            flex: 1,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ color: "#FFFFFF", fontWeight: 300 }}
            variant="body2"
          >
            {row?.description || "N/A"}
          </Typography>
        </TableCell>

        {/* Creation Date Cell */}
        <TableCell
          sx={{
            flex: 1,
            borderBottom: "none",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography sx={{ color: "white", fontWeight: 300 }} variant="body2">
            {getFormattedDateFull(row?.createdAt)}
          </Typography>
        </TableCell>

        {/* Action Buttons */}
        <TableCell
          sx={{
            flex: 1,
            borderBottom: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <IconButton
            onClick={handleEdit}
            sx={{
              color: "white",
              ":hover": {
                color: "#90caf9",
              },
            }}
            size="small"
          >
            <ImageContainer
              style={{ width: "24px", height: "24px" }}
              title="Edit"
            >
              {EditIcon}
            </ImageContainer>
          </IconButton>

          <IconButton
            onClick={handleDeleteListing}
            sx={{
              color: "white",
              ":hover": {
                color: "#f44336",
              },
            }}
            size="small"
          >
            <ImageContainer
              style={{ width: "24px", height: "24px" }}
              title="Delete"
            >
              {TrashIcon}
            </ImageContainer>
          </IconButton>
        </TableCell>
        {isActiveListingEditDialog && (
          <AddListPopup
            activeDialog={isActiveListingEditDialog}
            setActiveDialog={setIsActiveListingEditDialog}
            handleEditList={handleEditList}
            isEditing={true}
            data={row}
          />
        )}
      </TableRow>
    </>
  );
};

export default Row;
