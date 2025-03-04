import { Box } from "@mui/material";

const MainContainer = ({ children, styleMainContainer, style }: any) => {
  return (
    <Box
      sx={{
        width: "100%",
        ...style,
      }}
    >
      <Box
        sx={{
          maxWidth: "1800px",
          width: "100%",
          alignSelf: "center",
          marginLeft: "auto",
          marginRight: "auto",
          ...styleMainContainer,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default MainContainer;
