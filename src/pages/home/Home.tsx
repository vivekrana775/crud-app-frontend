import {
  Box,
  CircularProgress,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

import Search from "../../shared/components/Search";
import ComponentCard from "./components/ComponentCard";
import Seperator2 from "../../shared/components/Seperator2";
import { colors } from "../../utils/colors";
import { ButtonPrimary } from "../../shared/components/button/Buttons";
import AddListPopup from "../../components/AddList";
import { createUserItem, getUserItems } from "../../services/component";
import { getUserIdFromCookies } from "../../utils/extensions";
import { toastError, toastSuccess } from "../../utils/ToastMessage";
import Listing from "../listing/listing";

type Props = {};

const Home = (props: Props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const userId = getUserIdFromCookies();
  const [isActiveAddListPopup, setIsActiveAddListPopup] =
    useState<boolean>(false);
  const [render, setRender] = useState(false);
  const [userListings, setUserListings] = useState([]);

  const handleSaveList = async (data: any) => {
    if (!userId) {
      toastError("Failed", "Please login add the list.");
      return;
    }

    if (!data?.title) {
      toastError("Failed", "Please provide the title.");
    }

    await createUserItem({ ...data, userId })
      .then(() => {
        setIsActiveAddListPopup(false);
        toastSuccess("Success", "Successfully added the list.");
        setRender((prev) => !prev);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const fetchUserListings = async () => {
    await getUserItems({ userId })
      .then((res: any) => {
        setUserListings(res);
      })
      .catch((err: any) => {
        console.log("err", err);
      });
  };

  useEffect(() => {
    fetchUserListings();
  }, [render]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        paddingTop: { xs: "24px", md: "80px" },
        paddingBottom: { xs: "40px", md: "80px" },
        // paddingX: { xs: "24px", md: "40px", lg: "80px" },
        height: "100%",
        position: "relative",
        gap: { xs: "0px", md: "80px" },
      }}
    >
      {isActiveAddListPopup && (
        <AddListPopup
          activeDialog={isActiveAddListPopup}
          setActiveDialog={setIsActiveAddListPopup}
          handleSaveList={handleSaveList}
        />
      )}

      {/* header Section */}

      <Typography
        sx={{
          fontSize: { xs: "32px", sm: "58px", lg: "58px" },
          fontWeight: "600",
          color: "text.secondary",
          background:
            "linear-gradient(81deg, rgba(255,255,255,1) 0%, rgba(48,48,48,1) 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          // maxWidth: "35%",
          width: { xs: "100%", sm: "100%", lg: "100%" },
          textAlign: "center",
        }}
        // variant="h1"
      >
        CRUD APP
      </Typography>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ButtonPrimary
          sx={{
            height: "46px !important",
            width: "30%",
            padding: "15px 32px",
            border: "1px solid #3D3D3D",
          }}
          onClick={() => {
            setIsActiveAddListPopup(true);
          }}
          LabelStyle={{
            fontSize: "18px !important",
            fontWeight: "600",
            lineHeight: "22px",
          }}
          label={"Add an Item"}
        />
      </Box>

      {/* --------Seperator -------- */}
      <Box
        sx={{
          marginY: { xs: "24px", md: "0px", lg: "0px" },
          paddingX: { xs: "24px", md: "40px", lg: "80px" },
        }}
      >
        <Seperator2 />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          paddingTop: { xs: "0px", md: "7px" },
          paddingX: { xs: "24px", md: "40px", lg: "80px" },
          // paddingY: { xs: "48px", lg: "80px" },
          alignItems: "center",
          flex: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flex: 1,
            width: "100%",
            gap: "40px",
          }}
        >
          <Typography variant="h3" color={"white"}>
            User Items
          </Typography>

          <Box
            sx={{
              display: "grid",
              width: "100%",
              boxSizing: "border-box",
              gridGap: "24px",
              gridTemplateColumns: {
                xs: "repeat(auto-fit, minmax(270px, 1fr))",
                sm: "repeat(2, 1fr)",
                md: "repeat(auto-fit, minmax(360px, 1fr))",
              }, // Adjust card size and fit into available space
              "@media screen and (max-width: 579px)": {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                flexWrap: "wrap",
              },
            }}
          >
            <Listing userListings={userListings} setRender={setRender} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
