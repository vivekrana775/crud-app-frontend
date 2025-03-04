import {
  Box,
  Button,
  CircularProgress,
  SxProps,
  Tooltip,
  Typography,
} from "@mui/material";
import { CSSProperties, MouseEvent, ReactNode } from "react";
import DefaultLoading from "../../Loading/DefaultLoading";

interface ButtonProps {
  endIcon?: ReactNode;
  startIcon?: ReactNode;
  label: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  sx?: SxProps;
  isLoading?: boolean;
  disabled?: boolean;
  textStyle?: SxProps;
  LabelStyle?: CSSProperties;
  tooltipTitle?: string;
  loadingColor?: any;
}

export const ContainedButton: React.FC<ButtonProps> = ({
  endIcon,
  startIcon,
  label,
  onClick,
  sx,
  isLoading,
  LabelStyle,
}) => {
  return (
    <Button
      variant="contained"
      startIcon={startIcon}
      endIcon={
        isLoading ? (
          <Box
            sx={{
              width: "42px",
              height: "42px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <DefaultLoading />
          </Box>
        ) : (
          endIcon
        )
      }
      onClick={onClick}
      sx={{
        bgcolor: "primary.main",
        color: "white",
        boxShadow: "none",
        padding: "16px 24px",
        borderRadius: "12px",
        height: "56px",
        textTransform: "none",
        "& .MuiButton-endIcon": {
          marginLeft: "0px !important",
          marginRight: "0px !important",
        },
        ":hover": {
          boxShadow: "none",
          backgroundColor: "black",
        },
        ...sx,
      }}
    >
      <Typography
        sx={{ ...LabelStyle }}
        variant="subtitle2"
        fontWeight="600"
        color="white"
        textAlign="center"
      >
        {label}
      </Typography>
    </Button>
  );
};

export const ButtonPrimary: React.FC<ButtonProps> = ({
  endIcon,
  label,
  onClick,
  sx,
  isLoading,
  disabled,
  LabelStyle,
  tooltipTitle,
  loadingColor
}) => {
  return (
    <Tooltip title={tooltipTitle && tooltipTitle}>
      <Button
        disabled={isLoading || disabled}
        variant="contained"
        endIcon={
          isLoading ? (
            <Box
              sx={{
                width: "24px",
                height: "24px",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "0px",
              }}
            >
              <CircularProgress
                style={{
                  width: "24px",
                  height: "24px",
                  color: loadingColor || "#000000",
                }}
              />
            </Box>
          ) : (
            endIcon
          )
        }
        onClick={onClick}
        sx={{
          bgcolor: "primary.main",
          color: "text.primary",
          borderRadius: "14px",
          boxShadow: "none",
          height: "52px",
          textTransform: "none",
          "& .MuiButton-endIcon": {
            marginLeft: "0px !important",
            marginRight: "0px !important",
          },
          ":hover": {
            boxShadow: "none",
            backgroundColor: "primary.main",
          },
          ":disabled": {
            boxShadow: "none",
            bgcolor: "primary.main",
          },
          ...sx,
        }}
      >
        {!isLoading && (
          <Typography
            sx={{ ...LabelStyle }}
            variant="body1"
            textAlign="center"
            fontWeight={600}
          >
            {label}
          </Typography>
        )}
      </Button>
    </Tooltip>
  );
};

export const ButtonSecondary: React.FC<ButtonProps> = ({
  endIcon,
  startIcon,
  label,
  onClick,
  LabelStyle,
  disabled,
  sx,
}) => {
  return (
    <Button
      disabled={disabled || false}
      variant="contained"
      startIcon={startIcon}
      endIcon={endIcon}
      onClick={onClick}
      sx={{
        boxShadow: "none",
        bgcolor: "rgba(255, 255, 255, 0.06)",
        color: "white",
        padding: "16px 24px",
        borderRadius: "16px",
        height: "52px",
        border: "1.6px solid #3D3D3D",
        "& .MuiButton-endIcon": {
          marginLeft: "0px !important",
          marginRight: "0px !important",
        },
        ":hover": {
          boxShadow: "none",
          border: "1.6px solid #3D3D3D",
          bgcolor: "rgba(255, 255, 255, 0.06)",
        },
        textTransform: "none",
        ...sx,
      }}
    >
      <Typography
        sx={{ ...LabelStyle }}
        variant="subtitle1"
        color="text.secondary"
        textAlign="center"
        fontWeight={600}
      >
        {label}
      </Typography>
    </Button>
  );
};
