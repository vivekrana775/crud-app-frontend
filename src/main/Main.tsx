import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import {
  useNavigate,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import {
  ClickAwayListener,
  CssBaseline,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  paperClasses,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import MainContainer from "../shared/components/MainContainer";
import { ImageContainer } from "../shared/components/ImageContainer";
import { WikiLogo } from "../assets/icons/icons";
import { DrawerExpandlessIcon } from "../assets/icons/DrawerExpandlessIcon";
import { useGlobalContext } from "../App";
import { SearchIconSvg } from "../assets/icons/SearchIconSvg";
import Cookies from "js-cookie";
import LoginDialog from "../login/LoginDialog";
import SignupDialog from "../signup/SignupDialog";
import { focusInput } from "../utils/extensions";
import { HomeCoverBg } from "../assets/images/image";
import NotifyDynamicBanner from "../components/NotifyDynamicBanner";
import { loginUserByToken } from "../services/authentication";
import Home from "../pages/home/Home";
//@ts-ignore
import User from "./User";

// sidebar width
const drawerWidth = 264;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  borderRight: "1px solid rgba(255, 255, 255, 0.12)",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    maxWidth: `100%`,
    opacity: 1,
    background: "transparent", // Ensure full opacity black
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  background: "transparent", // Ensure full opacity black
  boxShadow: "none !important", // Disable box shadow to avoid lightening effect
  height: "120px",
  opacity: 1,
  marginRight: "0px",
  "@media (max-width:425px)": {
    height: "96px",
  },
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",

  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const Main: React.FC = () => {
  const theme = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  // Check if the current route is in the noBgRoutes list

  const {
    navigations,
    activeNavigation,
    setActiveNavigation,
    userDetails,
    searchProductBy,
    activeLoginDialog,
    setActiveLoginDialog,
    activeSignupDialog,
    setActiveSignupDialog,

    setUserDetails,
  } = useGlobalContext();

  const sidebarBreakpoint = useMediaQuery(theme.breakpoints.up(1280));

  // Refrence for search input
  const searchInputRef = useRef<HTMLInputElement | null>(null);

  // -----Appbar search handling state-----
  const [showHeaderSearchBar, setShowHeaderSearchBar] =
    useState<boolean>(false);

  // ------Sidebar handling states and functions------
  const [open, setOpen] = React.useState(true);
  const [showSidemenu, setShowSidemenu] = useState<boolean>(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    if (window.innerWidth < 1280) setShowSidemenu(false);
    else {
      setOpen(false);
    }
  };

  // -----Appbar search handling functions-----
  const handleSearchBar = () => {
    setShowHeaderSearchBar(!showHeaderSearchBar);
  };

  useEffect(() => {
    window.localStorage.setItem(
      "ACTIVE_NAVIGATION",
      JSON.stringify(activeNavigation)
    );
  }, [activeNavigation]);

  useEffect(() => {}, [userDetails]);

  //This function is called when a user logged in through google
  const verifyUserByToken = async (token: string) => {
    try {
      const data = {
        token,
      };

      // Await the loginUser function call
      const res: any = await loginUserByToken(data);
      if (
        res?.data?.token !== undefined &&
        res?.data?.token !== "" &&
        res?.data?.token !== null
      ) {
        localStorage.setItem("jstoken", res.data.token);
        Cookies.set("jstoken", res.data.token);
        Cookies.set("user", JSON.stringify(res.data));
        Cookies.set("userId", JSON.stringify(res.data.id));
        setUserDetails(res?.data?.user);
        navigate("/");
      } else {
        navigate("/login");
        switch (res?.response?.data?.message) {
          case "Failed to authenticate user":
            console.log("Invalid Email or password! Please try again.");
            break;
          default:
            console.log(res?.response?.data?.message);
            break;
        }
      }
    } catch (error: any) {
      navigate("/login");
      console.log(error, error.code);
    } finally {
      // setShowLoading(false);
    }
  };

  useEffect(() => {
    // Extract the 'user' parameter from the URL
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
      // Parse the user data from the URL'
      try {
        verifyUserByToken(token);
      } catch (error) {
        navigate("/login");
        console.error("Failed to parse user data", error);
      }
    }
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        bgcolor: "background.main",
        width: "100%",
        justifyContent: "center",
        maxWidth: "100%",
        minHeight: "100vh",
        height: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          bgcolor: "background.main",
          width: "100%",
          justifyContent: "center",
          position: "relative !important",
          alignItems: "center",
          minHeight: "100vh",
          height: "100%",
        }}
      >
        <CssBaseline />
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AppBar
            position="relative"
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginRight: !open ? "0px" : "0px",
              borderBottom:
                window.location.pathname !== "/"
                  ? "1px solid rgba(255, 255, 255, 0.12)"
                  : "none",
              flex: "1",
              opacity: 1,
              width: {
                xs: "100%",
              },
              maxWidth: {
                xs: "1800px",
              },
              transition: theme.transitions.create(["width"], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
              }),
              [theme.breakpoints.down("lg")]: {
                marginLeft: 0,
                ...(open && {
                  transition: theme.transitions.create(["margin"], {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.enteringScreen,
                  }),
                }),
              },
            }}
            open={open}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                height: "100%",
                width: "100%",
                gap: "35px",
                paddingX: { xs: "24px", sm: "40px", lg: "80px" },
              }}
            >
              <Box
                onClick={() => {
                  setActiveNavigation((prevNav: any) => {
                    window.localStorage.setItem("ACTIVE_NAVIGATION", "/");
                    return "/";
                  });
                  navigate("/");
                }}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "fit-content",
                  cursor: "pointer",
                }}
              >
                <ImageContainer
                  style={{ width: "54px", height: "54px" }}
                  height="54px"
                  title="Main Logo"
                >
                  {WikiLogo}
                </ImageContainer>
              </Box>
              <Box
                onClick={() => {
                  navigate("/");
                }}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "fit-content",
                  cursor: "pointer",
                }}
              >
                <Typography
                  variant="subtitle1"
                  style={{
                    color: "white",
                    fontWeight: 600,
                    lineHeight: "100%",
                    marginBottom: "0px",
                  }}
                >
                  My Listings
                </Typography>
              </Box>

              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flex: 1,
                }}
              >
                {sidebarBreakpoint ? (
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      height: "100%",
                      width: "fit-content",
                    }}
                  >
                    <List
                      sx={{
                        display: "flex",
                        gap: "24px",
                      }}
                    >
                      {navigations
                        ?.filter((a: any) => a !== null)
                        ?.map((item: any, index: number) => {
                          return (
                            <ListItem
                              key={item.text}
                              sx={{
                                display: "flex",
                                paddingY: "0px",
                                backgroundColor: "none",
                                paddingLeft: "0px",
                                paddingRight: "0px",
                              }}
                            >
                              <ListItemButton
                                disableRipple
                                sx={{
                                  display: "flex",
                                  justifyContent: open ? "initial" : "center",
                                  borderRadius: "12px",
                                  paddingX: "0px",
                                  "&.MuiListItemButton-root": {
                                    ":hover": {
                                      backgroundColor: "transparent",
                                    },
                                  },
                                }}
                                onClick={() => {
                                  setActiveNavigation((prevNav: any) => {
                                    window.localStorage.setItem(
                                      "ACTIVE_NAVIGATION",
                                      JSON.stringify(
                                        item?.subNavigations
                                          ? JSON.stringify(prevNav)
                                          : JSON.stringify(item)
                                      )
                                    );
                                    return item?.subNavigations
                                      ? prevNav
                                      : item;
                                  });

                                  navigate(item?.to);
                                }}
                              >
                                <ListItemText
                                  primary={
                                    <Typography
                                      variant="subtitle1"
                                      style={{
                                        color: "white",
                                        fontWeight: 600,
                                        lineHeight: "100%",
                                        marginBottom: "0px",
                                      }}
                                    >
                                      {item.text}
                                    </Typography>
                                  }
                                  sx={{
                                    opacity: open ? 1 : 0,
                                    color: "text.secondary",
                                  }}
                                />
                              </ListItemButton>
                            </ListItem>
                          );
                        })}
                    </List>
                  </Box>
                ) : (
                  <></>
                )}

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    height: "100%",
                    gap: "32px",
                    width: { xs: "100%", lg: "fit-content" },
                  }}
                >
                  {window.location.pathname !== "/" && (
                    <Box
                      onClick={() => {
                        handleSearchBar();
                        focusInput("appbarSearch");
                        navigate("/");
                      }}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        cursor: "pointer",
                      }}
                    >
                      <SearchIconSvg width="20px" height="20px" color="white" />
                    </Box>
                  )}

                  {!Cookies.get("jstoken") ? (
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-end",
                        height: "100%",
                        gap: "24px",
                        width: "100%",
                      }}
                    >
                      <Typography
                        onClick={() => {
                          navigate("/signup");
                        }}
                        sx={{
                          fontWeight: "600",
                          cursor: "pointer",
                        }}
                        color={"white"}
                        variant="subtitle1"
                      >
                        Sign up
                      </Typography>

                      <Typography
                        onClick={() => {
                          navigate("/login");
                        }}
                        sx={{
                          fontWeight: "600",
                          cursor: "pointer",
                        }}
                        color={"white"}
                        variant="subtitle1"
                      >
                        Log in
                      </Typography>
                    </Box>
                  ) : (
                    <Box
                      display="flex"
                      alignItems="center"
                      justifySelf="flex-end"
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "20px",
                          zIndex: 10,
                        }}
                      >
                        {Cookies.get("user") && <User className="user" />}
                      </Box>
                    </Box>
                  )}

                  {sidebarBreakpoint ? (
                    <></>
                  ) : (
                    <Toolbar
                      sx={{
                        padding: "0px !important",
                        minHeight: "auto !important",
                        width: "24px",
                        height: "24px",
                      }}
                    >
                      <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        sx={{
                          // marginRight: 2,
                          marginLeft: "0px",
                          padding: "0px",
                          [theme.breakpoints.up("lg")]: {
                            display: "none",
                          },
                        }}
                        onClick={() => {
                          setShowSidemenu((prev) => !prev);
                          setOpen(true);
                        }}
                      >
                        <MenuIcon
                          sx={{
                            width: "24px",
                            height: "24px",
                            margin: "0px !important",
                            color: "white",
                          }}
                        />
                      </IconButton>
                    </Toolbar>
                  )}
                </Box>
              </Box>
            </Box>
          </AppBar>
        </Box>

        {/* -------------Sidebar------------- */}
        {showSidemenu && (
          <ClickAwayListener
            onClickAway={() => {
              setShowSidemenu(false);
            }}
          >
            <Drawer
              sx={{
                display: { xs: showSidemenu ? "block" : "none", lg: "block" },
                [`& .${paperClasses.root}`]: {
                  margin: "16px 0px 16px 16px",
                  borderRadius: "16px",
                  border: "none",
                  maxHeight: `calc(100vh - 32px)`,
                  minWidth: "76px",
                  position: "absolute",
                  "&:hover": {},
                },
              }}
              variant="permanent"
              open={open}
            >
              {/* Toggle expand button */}
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  right: 0,
                  zIndex: 1,
                  width: "100%",
                  borderRadius: "0px",
                  ...(open && { display: "none" }),
                }}
              >
                <MenuIcon sx={{ width: "100%", height: "100%", opacity: 0 }} />
              </IconButton>

              <DrawerHeader
                sx={{
                  display: "flex",
                  justifyContent: open ? "space-between" : "center",
                  margin: open ? "16px 24px 40px 24px" : "16px 0px 0px 0px",
                  alignContent: "center",
                }}
              >
                {open ? (
                  <Box
                    onClick={() => {
                      navigate("/");
                    }}
                    sx={{
                      width: "50px",
                      height: "35px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                  >
                    <ImageContainer
                      style={{ width: "50px", height: "35px" }}
                      height="28px"
                      title="Main Logo"
                    >
                      {WikiLogo}
                    </ImageContainer>
                  </Box>
                ) : (
                  <Box
                    onClick={() => {
                      navigate("/");
                    }}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                      padding: "16px 0px 0px 0px",
                      cursor: "pointer",
                    }}
                  >
                    <ImageContainer
                      style={{
                        maxWidth: "42px",
                      }}
                      width="50px"
                      height="35px"
                      title="Main Logo"
                    >
                      {WikiLogo}
                    </ImageContainer>
                  </Box>
                )}
                {/* Toggle collapse button */}
                {open && (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "fit-content",
                      height: "fit-content",
                    }}
                    onClick={handleDrawerClose}
                  >
                    <DrawerExpandlessIcon color="white" />
                  </Box>
                )}
              </DrawerHeader>

              <Box
                display="flex"
                sx={{
                  justifyContent: "space-between",
                  width: "100%",
                  height: "100%",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <List>
                    {navigations
                      ?.filter((a: any) => a !== null)
                      ?.map((item: any, index: number) => {
                        return (
                          <ListItem
                            key={item.text}
                            sx={{
                              display: "block",
                              paddingY: "0px",
                              paddingLeft: open ? "24px" : "16px",
                              paddingRight: open ? "24px" : "16px",
                            }}
                          >
                            <ListItemButton
                              disableRipple
                              sx={{
                                minHeight: 48,
                                display: "flex",
                                justifyContent: open ? "initial" : "center",
                                borderRadius: "12px",
                                paddingX: "12px",
                                bgcolor:
                                  open &&
                                  (item?.subNavigations?.length > 0 ||
                                    item?.subNavigations !== undefined)
                                    ? "transparent"
                                    : activeNavigation?.text === item?.text ||
                                      item?.subNavigations?.some(
                                        (subItem: any) =>
                                          subItem?.text ===
                                          activeNavigation?.text
                                      )
                                    ? "primary.main"
                                    : "transparent",
                                "&:hover": {
                                  bgcolor:
                                    item?.subNavigations?.length > 0 ||
                                    item?.subNavigations !== undefined
                                      ? "transparent"
                                      : activeNavigation?.text === item?.text
                                      ? "primary.main"
                                      : "transparent",
                                },
                              }}
                              onClick={() => {
                                setActiveNavigation((prevNav: any) => {
                                  window.localStorage.setItem(
                                    "ACTIVE_NAVIGATION",
                                    JSON.stringify(
                                      item?.subNavigations
                                        ? JSON.stringify(prevNav)
                                        : JSON.stringify(item)
                                    )
                                  );
                                  return item?.subNavigations ? prevNav : item;
                                });

                                navigate(item?.to);
                              }}
                            >
                              <ListItemText
                                primary={
                                  <Typography
                                    variant="body2"
                                    style={{
                                      color:
                                        item?.subNavigations?.length > 0 ||
                                        item?.subNavigations !== undefined
                                          ? "transparent"
                                          : activeNavigation?.text ===
                                            item?.text
                                          ? "black"
                                          : "white",
                                      fontWeight: 500,
                                      lineHeight: "100%",
                                      marginBottom: "0px",
                                    }}
                                  >
                                    {item.text}
                                  </Typography>
                                }
                                sx={{
                                  opacity: open ? 1 : 0,
                                  color: "text.secondary",
                                }}
                              />
                            </ListItemButton>
                          </ListItem>
                        );
                      })}
                  </List>
                </Box>
              </Box>
            </Drawer>
          </ClickAwayListener>
        )}

        {/* -------All Routes section-------- */}
        <Box
          sx={{
            width: {
              xs: "100%",
            },
            maxWidth: {
              xs: "100%",
            },
            bgcolor: "transparent",
            marginLeft: {
              xs: "0px",
            },
            // marginTop: "120px",
            // paddingX: { xs: "16px", lg: "0px" },
            display: "flex",
            flex: 1,
          }}
        >
          <MainContainer
            styleMainContainer={{
              width: "100%",
              backgroundColor: "transparent",
              height: "100%",
            }}
          >
            {activeLoginDialog && (
              <LoginDialog
                activeDialog={activeLoginDialog}
                handleDialog={() => setActiveLoginDialog(false)}
              />
            )}
            {activeSignupDialog && (
              <SignupDialog
                activeDialog={activeSignupDialog}
                handleDialog={() => setActiveSignupDialog(false)}
              />
            )}

            <Box
              component="main"
              sx={{
                width: "100%",
                maxWidth: {
                  md: "100%",
                },
                height: "100%",
              }}
            >
              {/* Main ROUTES */}
              <Routes>
                <Route path="/" element={<Home />} />
                {/* Notfound Routes  */}
                <Route path="*" element={<Navigate to="/404" replace />} />
                {/* <Route path="/404" element={<NotFound />} /> */}
              </Routes>
            </Box>
          </MainContainer>
        </Box>

        {/* --------Footer Section-------- */}
      </Box>
    </Box>
  );
};

export default Main;
