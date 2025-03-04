import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

// function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
//   event.preventDefault();
//   console.info("You clicked a breadcrumb.");
// }

interface breadcrumbsArgs {
  breadcrumbs: React.ReactNode[];
  style?: React.CSSProperties;
}

export default function CustomBreadCrumb(breadcrumbsArgs: breadcrumbsArgs) {
  return (
    <Stack
      sx={{
        marginBottom: "12px",
        ...breadcrumbsArgs?.style,
      }}
      spacing={2}
    >
      <Breadcrumbs
        className="breadcrumb center"
        sx={{ color: "white" }}
        separator={
          <NavigateNextIcon
            sx={{ color: "white !important" }}
            fontSize="small"
          />
        }
        aria-label="breadcrumb"
      >
        {breadcrumbsArgs.breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}
