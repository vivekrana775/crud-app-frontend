import { Box, Typography } from "@mui/material";
import { colors } from "../../../utils/colors";
import { ImageContainer } from "../../../shared/components/ImageContainer";
import { CopyIcon, DeleteButton, TrashIcon } from "../../../assets/icons/icons";

type Props = {
  data: {
    code: number;
    url: string;
  };
  setResponseCodeArr?: any;
  isEditingList?: boolean;
};

const ComponentCard = ({ data, setResponseCodeArr, isEditingList }: Props) => {
  const code = data?.code;
  const handleRemoveFromList = () => {
    setResponseCodeArr((prev: any) =>
      prev.filter((item: any) => item !== code)
    );
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        borderRadius: "12px",
        bgcolor: colors.primaryGrey,
        width: "100%",
        maxWidth: "360px",
        minWidth: "200px",
        overflow: "hidden",
        position: "relative",
        transition: "transform 0.2s ease",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      {/* Image Container */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          aspectRatio: "4/3",
          backgroundImage: `url(${data?.url})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          borderRadius: "12px",
          transition: "all 0.3s ease",
          "&:hover .overlay": {
            opacity: 1,
          },
        }}
      >
        {/* Hover Overlay */}
        <Box
          className="overlay"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            bgcolor: "rgba(0, 0, 0, 0.5)",
            opacity: 0,
            transition: "opacity 0.3s ease",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "12px",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "white",
              fontWeight: "bold",
            }}
          >
            Code: {data?.code}
          </Typography>
        </Box>
      </Box>
      {isEditingList && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "17px",
          }}
        >
          <Box
            onClick={(e: any) => {
              e.stopPropagation();
              e.preventDefault();
              handleRemoveFromList();
            }}
            sx={{
              width: "46px",
              height: "46px",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              bgcolor: "white",
              cursor: "pointer",
              zIndex: "100",
            }}
          >
            <ImageContainer
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              title="Delete"
            >
              {TrashIcon}
            </ImageContainer>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default ComponentCard;
