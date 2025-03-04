import {
  Box,
  Button,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { WikiLogo } from "../assets/icons/icons";
import useEnterKeyPress from "../utils/useEnterKeyPress";
import { isValidEmail } from "../utils/extensions";
import TextInput from "../shared/components/TextInput";
import { ImageContainer } from "../shared/components/ImageContainer";
import { LoginCoverImg } from "../assets/images/image";
import Cookies from "js-cookie";
import { loginUser } from "../services/authentication";
import { useGlobalContext } from "../App";
import DefaultLoading from "../shared/Loading/DefaultLoading";

import ErrorMessageIcon from "../assets/icons/ErrorMessageIcon/ErrorMessageIcon";
//@ts-ignore
import EyeOpenIcon from "../assets/icons/EyeIcons/EyeOpenIcon";
//@ts-ignore

import EyeOffIcon from "../assets/icons/EyeIcons/EyeOffIcon";

const Login = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { setUserDetails } = useGlobalContext();

  const breakpoint_down_769 = useMediaQuery(theme.breakpoints.down(769));
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));

  // loading state
  const [showLoading, setShowLoading] = useState(false);
  const [isImagesLoading, setIsImagesLoading] = useState(false);

  // user details states
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");

  const [passwordVisible, setPasswordVisible] = useState(false);
  const signinButtonRef = useRef(null);

  // Error handling states
  const [error, setError] = useState<string>();
  const [errors, setErrors] = useState<Record<string, string>>({});

  // const coverImageList = [];

  const [randomImageUrl, setRandomImageUrl] = useState<string | null>(null);

  const inputField1Ref = useRef(null);
  const inputField2Ref = useRef(null);

  const handleEnterKeyPress = () => {
    !showLoading && login();
  };

  // Use the custom hook
  useEnterKeyPress(handleEnterKeyPress);

  const validateFields = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!loginId.trim() || !isValidEmail(loginId)) {
      newErrors.loginId = "Please enter a valid email address.";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const login = async () => {
    setShowLoading(true);
    if (validateFields()) {
      try {
        setError("");

        const data = {
          username: loginId,
          password: password,
        };

        // Await the loginUser function call
        const res: any = await loginUser(data);
        if (
          res?.data?.token !== undefined &&
          res?.data?.token !== "" &&
          res?.data?.token !== null
        ) {
          console.log("res", res, res.data.user.id);
          localStorage.setItem("jstoken", res.data.token);
          Cookies.set("jstoken", res.data.token);
          Cookies.set("user", JSON.stringify(res.data));
          Cookies.set("userId", res.data.user.id);
          setUserDetails(res?.data?.user);
          navigate("/");
        } else {
          switch (res?.response?.data?.message) {
            case "Failed to authenticate user":
              setError("Invalid Email or password! Please try again.");
              break;
            default:
              setError(res?.response?.data?.message);
              break;
          }
        }
      } catch (error: any) {
        console.log(error, error.code);
      } finally {
        setShowLoading(false);
      }
    } else {
      setShowLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: { xs: "100vh", lg: "auto" },
        width: "100%",
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          height: "100vh",
        }}
      >
        {!breakpoint_down_769 && (
          <Box
            sx={{
              margin: "0",
              padding: "0",
              boxSizing: "border-box",
              display: { xs: "none", sm: "flex" },
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: { xs: "100%", md: "100%" },
              height: "100%",
              flex: 1,
            }}
          >
            {!isImagesLoading && (
              <img
                style={{
                  margin: "0",
                  padding: "0",
                  boxSizing: "border-box",
                  aspectRatio: "720/679",
                  width: "101%",
                  height: "100%",
                  objectFit: "cover",
                }}
                alt="signin cover"
                src={randomImageUrl ? randomImageUrl : LoginCoverImg}
              />
            )}
          </Box>
        )}

        <Box
          className="custom-scrollbar"
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            flex: 1.5,
            height: "100vh",
            bgcolor: "background.default",
            overflowY: "scroll",
            paddingTop: { xs: "60px", md: "80px" },
            paddingBottom: { xs: "40px", md: "80px" },
          }}
        >
          <Box
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              // justifyContent: "center",
              width: "100%",
              alignItems: "center",
              gap: { xs: "0px", md: "81px" },
            }}
          >
            <Box
              onClick={() => {
                navigate("/");
              }}
              sx={{
                mb: { xs: "12px", md: "81px" },
                // position: { xs: "absolute", sm: "static", lg: "static" },
                // top: "60px",
                // width: "100%",
                width: "fit-content",
                paddingY: { xs: "20px", sm: "0px", lg: "0px" },
                cursor: "pointer",
              }}
            >
              <ImageContainer width={"54px"} height={"54px"} title="logo">
                {WikiLogo}
              </ImageContainer>
            </Box>
            <Box
              sx={{
                margin: "0",
                // padding: "0",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                gap: { xs: "0px", sm: "16px", lg: "16px" },
                alignItems: "center",
                width: { xs: "100%", sm: "404px", lg: "480px" },
                justifyContent: "center",
                paddingX: "24px",
                // mt: { xs: "-57px", sm: "0px", lg: "0px" },
                marginY: { md: "auto" },
                padding: { xs: "24px", sm: "0px" },
                paddingTop: { xs: "0px" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "12px",
                  textAlign: "center",
                  width: "100%",
                  mb: { xs: "40px", md: "32px" },
                }}
              >
                <Typography
                  // variant="h1"
                  sx={{
                    fontSize: "32px",
                    fontWeight: "600",
                    color: "text.secondary",
                  }}
                >
                  Sign in
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: { xs: "0px", sm: "12px", lg: "12px" },
                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "24px",
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                      borderRadius: "12px",
                      // maxWidth: "480px",
                    }}
                  >
                    <TextInput
                      id="LoginInputFields"
                      lableStyles={{ fontSize: "12px", fontWeight: "600" }}
                      label="Email"
                      placeholder="Email"
                      inputStyles={{
                        borderRadius: "14px",
                        height: "54px",
                        fontSize: "16px",
                        color: errors.loginId ? "#E25454" : "#FFFFFF",
                        border: errors.loginId ? "1px solid #E25454" : "0",
                      }}
                      sx={{
                        "&::placeholder": {
                          color: errors.loginId ? "#E25454" : "#FFFFFF80",
                        },
                      }}
                      onChange={(e: any) => {
                        setLoginId(e.target.value);
                      }}
                      onNext={inputField1Ref}
                      value={loginId}
                      required
                    />
                    <Typography
                      className="err_field"
                      id="emailNotExist"
                      color="#E25454"
                      variant="body2"
                      display={"flex"}
                      gap={"4px"}
                      marginTop={"12px"}
                      alignItems={"center"}
                      sx={{ width: "100%" }}
                      fontWeight={"400"}
                      fontSize="14px"
                      lineHeight={"16px"}
                      letterSpacing={"8%"}
                    >
                      {errors.loginId && (
                        <>
                          <span>
                            <ErrorMessageIcon />
                          </span>
                          {errors.loginId}
                        </>
                      )}
                    </Typography>
                  </Box>

                  <Box
                    borderRadius={12}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                      borderRadius: "12px",
                      // maxWidth: "480px",
                    }}
                  >
                    <TextInput
                      id="LoginInputFields"
                      lableStyles={{ fontSize: "12px", fontWeight: "600" }}
                      label="Password"
                      placeholder="Password"
                      icononclick={() => setPasswordVisible(!passwordVisible)}
                      icon={passwordVisible ? <EyeOpenIcon /> : <EyeOffIcon />}
                      type={!passwordVisible ? "password" : "text"}
                      onChange={(e: any) => {
                        setPassword(e.target.value);
                      }}
                      onNext={inputField2Ref}
                      value={password}
                      required
                      inputStyles={{
                        borderRadius: "14px",
                        height: "54px",
                        fontSize: "16px",
                        color: "#FFFFFF",
                        border: errors.password ? "1px solid #E25454" : "0px",
                      }}
                      iconstyles={{ width: "17px", height: "15px" }}
                    />
                    <Typography
                      className="err_field"
                      id="loginPassNotExist"
                      color="#E25454"
                      variant="body2"
                      display={"flex"}
                      gap={"4px"}
                      marginTop={"12px"}
                      alignItems={"center"}
                      sx={{ width: "100%" }}
                      fontWeight={"400"}
                      fontSize="14px"
                      lineHeight={"16px"}
                      letterSpacing={"8%"}
                    >
                      {errors.password && (
                        <>
                          <span>
                            <ErrorMessageIcon />
                          </span>
                          {errors.password}
                        </>
                      )}
                    </Typography>
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "16px",
                    width: "100%",
                    justifyContent: "flex-end",
                    // maxWidth: "480px",
                    flexWrap: "wrap",
                  }}
                >
                  <Typography
                    onClick={() => {
                      navigate("/request-reset-password");
                    }}
                    variant="subtitle1"
                    sx={{
                      cursor: "pointer",
                      userSelect: "none",
                      color: "text.secondary",
                    }}
                  >
                    Forgot password?
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "5px",
                  // maxWidth: "480px",
                  mt: { xs: "40px", sm: "16px", lg: "16px" },
                  mb: { xs: "24px", sm: "0px", lg: "0px" },
                }}
              >
                <Button
                  id="signinButton"
                  sx={{
                    width: "100%",
                    height: "54px",
                    textAlign: "center",
                    textTransform: "none",
                    bgcolor: "primary.main",
                    color: "#FFFFFF",
                    borderRadius: "14px",
                    border: "1px solid #718B08",
                    paddingY: "16px",
                    "&:hover": {
                      backgroundColor: "primary.main",
                    },
                  }}
                  ref={signinButtonRef}
                  onClick={() => {
                    !showLoading && login();
                  }}
                  endIcon={
                    showLoading && (
                      <Box
                        sx={{
                          width: "42px",
                          height: "42px",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <DefaultLoading width="42px" height="42px" />
                      </Box>
                    )
                  }
                >
                  <Typography
                    sx={{ color: "text.primary", fontWeight: "700" }}
                    variant="subtitle1"
                  >
                    {!showLoading && "Sign in"}
                  </Typography>
                </Button>
                {error && (
                  <Typography
                    sx={{ width: "100%" }}
                    fontWeight={"400"}
                    display={"flex"}
                    alignItems={"center"}
                    gap={"4px"}
                    fontSize="14px"
                    lineHeight={"16px"}
                    letterSpacing={"8%"}
                    marginTop={"12px"}
                    variant="caption"
                    color="#E25454"
                  >
                    {error && (
                      <>
                        <span>
                          <ErrorMessageIcon />
                        </span>
                        {error}
                      </>
                    )}
                  </Typography>
                )}
                <Typography
                  sx={{
                    marginTop: "10px",
                    fontWeight: "300",
                    color: "rgba(255, 255, 255, 0.5)",
                  }}
                  variant="subtitle1"
                >
                  Don't have an account?{" "}
                  <span
                    onClick={() => {
                      navigate("/signup");
                    }}
                    style={{
                      fontWeight: "300",
                      color: "#CF0",
                      cursor: "pointer",
                    }}
                  >
                    Sign up
                  </span>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
