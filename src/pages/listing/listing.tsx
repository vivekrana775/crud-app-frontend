import React, { useEffect, useState } from "react";
import LayoutTable from "./layout/Table";
import { Box } from "@mui/material";
import { getUserIdFromCookies } from "../../utils/extensions";
import { getUserListings } from "../../services/component";

const listing = ({ userListings }) => {
  const [loading, setLoading] = useState(false);

  const columnItems = [
    { id: "title", label: "title" },
    { id: "description", label: "descripiton" },
    { id: "Date Created", label: "Date Created" },
  ];

  return (
    <>
      <Box
        sx={{
          width: "100%",
          // overflowY: "scroll",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <LayoutTable
            loading={loading}
            rows={userListings}
            columns={columnItems}
          />
        </Box>
      </Box>
    </>
  );
};

export default listing;
