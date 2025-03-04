import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { WikiLogo } from "../assets/icons/icons";
import useEnterKeyPress from "../utils/useEnterKeyPress";
import { isValidEmail } from "../utils/extensions";
import TextInput from "../shared/components/TextInput";
import { ImageContainer } from "../shared/components/ImageContainer";
import { LoginCoverImg } from "../assets/images/image";
import { registerUser } from "../services/authentication";
import DefaultLoading from "../shared/Loading/DefaultLoading";
import Cookies from "js-cookie";
import { useGlobalContext } from "../App";

import ErrorMessageIcon from "../assets/icons/ErrorMessageIcon/ErrorMessageIcon";
//@ts-ignore
import EyeOpenIcon from "../assets/icons/EyeIcons/EyeOpenIcon";
//@ts-ignore
import EyeOffIcon from "../assets/icons/EyeIcons/EyeOffIcon";

const SignUp = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const { setUserDetails } = useGlobalContext();

  const breakpoint_down_769 = useMediaQuery(theme.breakpoints.down(769));
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  // loading state
  const [showLoading, setShowLoading] = useState(false);
  const [isImagesLoading, setIsImagesLoading] = useState(false);

  // user details states
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [emailBorderColor, setEmailBorderColor] = useState("#3D3D3D");

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
    !showLoading && handleRegister();
  };

  const validateFields = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!loginId.trim() || !isValidEmail(loginId)) {
      newErrors.loginId = "Please enter a valid email address.";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required.";
    }

    if (!firstName.trim()) {
      newErrors.firstName = "First name is required.";
    }

    if (!lastName.trim()) {
      newErrors.lastName = "Last name is required.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = async () => {
    setShowLoading(true);
    if (validateFields()) {
      setError("");
      try {
        const data = {
          email: loginId,
          password: password,
          firstName: firstName,
          lastName: lastName,
        };
        await registerUser(data)
          .then((res: any) => {
            if (
              res?.data?.token !== undefined &&
              res?.data?.token !== "" &&
              res?.data?.token !== null
            ) {
              localStorage.setItem("jstoken", res.data.token);
              Cookies.set("jstoken", res.data.token);
              Cookies.set("user", JSON.stringify(res.data));
              Cookies.set("userId", res.data.user.id);
              setUserDetails(res?.data?.user);
              setShowLoading(false);
              localStorage.setItem("isFirstTimeUser", "true");
              navigate("/");
            }
          })
          .catch((err) => {
            console.log("err", err);
            setError(err?.response?.data?.message);
          });
      } catch (error: any) {
        console.log("err", error);
      } finally {
        setShowLoading(false);
      }
    } else {
      setShowLoading(false);
    }
  };

  useEnterKeyPress(handleEnterKeyPress);

  return (
    <Box
      sx={{
        minHeight: { xs: "100vh", lg: "auto" },
        width: "100%",
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
              display: { xs: "none", sm: "flex" },
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: { xs: "90%", md: "100%" },
              height: "100%",
              flex: 1,
            }}
          >
            {!isImagesLoading && (
              <img
                style={{
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
            height: "100%",
            bgcolor: "background.default",
            overflowY: "scroll",
            paddingTop: { xs: "60px", md: "80px" },
            paddingBottom: { xs: "0px", md: "80px" },
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
              gap: { xs: "0px", md: "67px" },
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
                display: "flex",
                flexDirection: "column",
                gap: { xs: "0px", sm: "16px", lg: "16px" },
                alignItems: "center",
                width: { xs: "100%", sm: "404px", lg: "480px" },
                justifyContent: "center",
                paddingX: "24px",
                // mt: { xs: "32px", sm: "0px", lg: "0px" },
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
                  Sign up
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "12px",
                  width: "100%",
                  mb: { xs: "40px", sm: "0px", lg: "0px" },
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
                      alignItems: "center",
                      // flexWrap: "wrap",
                      gap: { xs: "18px", md: "13px" },
                      boxSizing: "border-box",
                      width: "100%",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        width: "100%",
                        borderRadius: "12px",
                        boxSizing: "border-box",
                        maxWidth: "100%",
                        flex: 1,
                      }}
                    >
                      <TextInput
                        id="SignupInputFields"
                        lableStyles={{ fontSize: "12px", fontWeight: "600" }}
                        inputWrapStyle={{
                          minWidth: "10px !important",
                          width: "100%",
                        }}
                        label="First Name"
                        placeholder="Enter your first name"
                        onChange={(e: any) => {
                          setFirstName(e.target.value);
                        }}
                        onNext={inputField1Ref}
                        value={firstName}
                        required
                        inputStyles={{
                          borderRadius: "14px",
                          height: "54px",
                          fontSize: "16px",
                          color: "#FFFFFF",
                          border: errors.firstName
                            ? "1px solid #E25454"
                            : "0px",
                        }}
                      />
                      <Typography
                        className="err_field"
                        id="loginFirstNameNotExist"
                        // color="red"
                        color="#E25454"
                        variant="body2"
                        display={"flex"}
                        gap={"4px"}
                        marginTop={"12px"}
                        alignItems={"center"}
                      >
                        {errors.firstName && (
                          <>
                            <span>
                              <ErrorMessageIcon />
                            </span>
                            {errors.firstName}
                          </>
                        )}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        width: "100%",
                        borderRadius: "12px",
                        boxSizing: "border-box",
                        maxWidth: "100%",
                        flex: 1,
                      }}
                    >
                      <TextInput
                        id="SignupInputFields"
                        lableStyles={{ fontSize: "12px", fontWeight: "600" }}
                        inputWrapStyle={{
                          minWidth: "10px !important",
                          width: "100%",
                        }}
                        label="Last Name"
                        placeholder="Enter your last name"
                        onChange={(e: any) => {
                          setLastName(e.target.value);
                        }}
                        onNext={inputField1Ref}
                        value={lastName}
                        required
                        inputStyles={{
                          borderRadius: "14px",
                          height: "54px",
                          fontSize: "16px",
                          color: "#FFFFFF",
                          border: errors.lastName ? "1px solid #E25454" : "0px",
                        }}
                      />
                      <Typography
                        className="err_field"
                        id="lastNameNotExist"
                        // color="red"
                        color="#E25454"
                        variant="body2"
                        display={"flex"}
                        gap={"4px"}
                        marginTop={"12px"}
                        alignItems={"center"}
                      >
                        {errors.lastName && (
                          <>
                            <span>
                              <ErrorMessageIcon />
                            </span>
                            {errors.lastName}
                          </>
                        )}
                      </Typography>
                    </Box>
                  </Box>

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
                      id="SignupInputFields"
                      lableStyles={{ fontSize: "12px", fontWeight: "600" }}
                      label="Email"
                      placeholder="Enter Your Email/ Employee ID"
                      onChange={(e: any) => {
                        const value = e.target.value;
                        setLoginId(value);

                        if (isValidEmail(value)) {
                          setEmailBorderColor("#CF0");
                        } else if (value.includes("#")) {
                          setEmailBorderColor("#E25454");
                        } else {
                          setEmailBorderColor("#3D3D3D");
                        }
                      }}
                      onNext={inputField1Ref}
                      value={loginId}
                      required
                      sx={{
                        fontSize: "16px",
                        fontWeight: "400",
                        lineHeight: "24px",
                        "&::placeholder": {
                          color: errors.loginId ? "#E25454" : "#888",
                        },
                      }}
                      inputStyles={{
                        borderRadius: "14px",
                        height: "54px",
                        fontSize: "16px",
                        color:
                          emailBorderColor === "#E25454"
                            ? "#E25454"
                            : "#FFFFFF",
                        border: errors.loginId ? "1px solid #E25454" : "0px",
                      }}
                    />
                    <Typography
                      className="err_field"
                      id="loginIdNotExist"
                      color="#E25454"
                      variant="body2"
                      display={"flex"}
                      gap={"4px"}
                      marginTop={"12px"}
                      alignItems={"center"}
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
                      id="SignupInputFields"
                      lableStyles={{ fontSize: "12px", fontWeight: "600" }}
                      label="Password"
                      placeholder="Enter password"
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
              </Box>

              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "5px",
                  // maxWidth: "480px",
                  marginTop: { xs: "0px", sm: "16px", lg: "16px" },
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
                  onClick={() => handleRegister()}
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
                        <DefaultLoading />
                      </Box>
                    )
                  }
                >
                  <Typography
                    sx={{ color: "text.primary", fontWeight: "700" }}
                    variant="subtitle1"
                  >
                    {!showLoading && "Sign Up"}
                  </Typography>
                </Button>
                {errors && (
                  <Typography
                    sx={{ width: "100%" }}
                    fontWeight={"400"}
                    display={"flex"}
                    justifyContent={"center"}
                    // alignItems={"center"}
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
                    fontWeight: "300",
                    color: "rgba(255, 255, 255, 0.5)",
                  }}
                  variant="subtitle1"
                >
                  Already have an account?{" "}
                  <span
                    onClick={() => {
                      navigate("/login");
                    }}
                    style={{
                      fontWeight: "300",
                      color: "#CF0",
                      cursor: "pointer",
                    }}
                  >
                    Sign in here
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

export default SignUp;
