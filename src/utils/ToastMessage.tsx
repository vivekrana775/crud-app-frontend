import { Box, Typography } from "@mui/material";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SuccessMessageIconSvg } from "../assets/icons/SuccessMessageIconSvg";
import { ErrorMessageIconSvg } from "../assets/icons/ErrorMessageIconSvg";
import { WarningMessageIconSvg } from "../assets/icons/WarningMessageIconSvg";
import { NotifyMessageIconSvg } from "../assets/icons/NotifyMessageIconSvg";
import { colors } from "./colors";

export const toastSuccess: any = (title?: string, message?: string) =>
  toast(
    <Box
      sx={{
        display: "flex",
        borderRadius: "16px",
        backgroundColor: colors.primaryGrey,
      }}
    >
      <Box
        sx={{
          width: "86px",
          minWidth: "86px",
          bgcolor: "#80C242",
          borderTopLeftRadius: "16px",
          borderBottomLeftRadius: "16px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <SuccessMessageIconSvg />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "16px 0px 16px 16px",
          gap: "8px",
          backgroundColor: colors.primaryGrey,
        }}
      >
        <Typography sx={{ color: "text.secondary" }} variant="body1">
          {title || "-"}
        </Typography>
        <Typography sx={{ color: "rgba(255, 255, 255, 0.6)" }} variant="body2">
          {message ? message : ``}
        </Typography>
      </Box>
    </Box>,
    {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      bodyClassName: "toastBoby",
      style: {
        borderRadius: "16px",
        padding: "0px !important",
      },
    }
  );

export const toastError: any = (title?: string, message?: string) =>
  toast(
    <Box
      sx={{
        display: "flex",
        borderRadius: "16px",
        backgroundColor: colors.primaryGrey,
      }}
    >
      <Box
        sx={{
          width: "86px",
          minWidth: "86px",
          bgcolor: "red",
          borderTopLeftRadius: "16px",
          borderBottomLeftRadius: "16px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ErrorMessageIconSvg />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "16px 0px 16px 16px",
          gap: "8px",
        }}
      >
        <Typography sx={{ color: "text.secondary" }} variant="body1">
          {title || "-"}
        </Typography>
        <Typography sx={{ color: "rgba(255, 255, 255, 0.6)" }} variant="body2">
          {message ? message : ``}
        </Typography>
      </Box>
    </Box>,
    {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      bodyClassName: "toastBoby",
      style: {
        borderRadius: "16px",
        padding: "0px !important",
      },
    }
  );

export const toastWarning: any = (title?: string, message?: string) =>
  toast(
    <Box
      sx={{
        display: "flex",
        borderRadius: "16px",
        backgroundColor: colors.primaryGrey,
      }}
    >
      <Box
        sx={{
          width: "86px",
          minWidth: "86px",
          bgcolor: "#FCCB44",
          borderTopLeftRadius: "16px",
          borderBottomLeftRadius: "16px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <WarningMessageIconSvg />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "16px 0px 16px 16px",
          gap: "8px",
        }}
      >
        <Typography sx={{ color: "text.secondary" }} variant="body1">
          {title || "-"}
        </Typography>
        <Typography sx={{ color: "rgba(255, 255, 255, 0.6)" }} variant="body2">
          {message ? message : ``}
        </Typography>
      </Box>
    </Box>,
    {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      bodyClassName: "toastBoby",
      style: {
        borderRadius: "16px",
        padding: "0px !important",
      },
    }
  );

export const toastNotification: any = (title?: string, message?: string) =>
  toast(
    <Box
      sx={{
        display: "flex",
        borderRadius: "16px",
        backgroundColor: colors.primaryGrey,
      }}
    >
      <Box
        sx={{
          width: "86px",
          minWidth: "86px",
          bgcolor: "#4FAAF9",
          borderTopLeftRadius: "16px",
          borderBottomLeftRadius: "16px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <NotifyMessageIconSvg />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "16px 0px 16px 16px",
          gap: "8px",
        }}
      >
        <Typography sx={{ color: "text.secondary" }} variant="body1">
          {title || "Notice"}
        </Typography>
        <Typography sx={{ color: "rgba(255, 255, 255, 0.6)" }} variant="body2">
          {message ? message : ``}
        </Typography>
      </Box>
    </Box>,
    {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      bodyClassName: "toastBoby",
      style: {
        borderRadius: "16px",
        padding: "0px !important",
      },
    }
  );
