import React, { useEffect, useRef, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { CloseSharp } from "@mui/icons-material";
import DefaultLoading from "../shared/Loading/DefaultLoading";
import TextInput from "../shared/components/TextInput";
import { loginUser } from "../services/authentication";
import Cookies from "js-cookie";
import { isValidEmail } from "../utils/extensions";
import useEnterKeyPress from "../utils/useEnterKeyPress";
import { useGlobalContext } from "../App";
import { toastSuccess } from "../utils/ToastMessage";
//@ts-ignore
import EyeOpenIcon from "../assets/icons/EyeIcons/EyeOpenIcon";
//@ts-ignore
import EyeOffIcon from "../assets/icons/EyeIcons/EyeOffIcon";
import ErrorMessageIcon from "../assets/icons/ErrorMessageIcon/ErrorMessageIcon";

type Props = {
  activeDialog: any;
  handleDialog?: any;
};

const LoginDialog: React.FC<Props> = (props) => {
  const {
    setUserDetails,
    setActiveSignupDialog,
    setActiveLoginDialog,
    setActiveResetDialog,
  } = useGlobalContext();

  // loading state
  const [showLoading, setShowLoading] = useState(false);

  // user details states
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");

  const [passwordVisible, setPasswordVisible] = useState(false);
  const signinButtonRef = useRef(null);

  // Error handling states
  const [error, setError] = useState<string>();
  const [errors, setErrors] = useState<Record<string, string>>({});

  const inputField1Ref = useRef(null);
  const inputField2Ref = useRef(null);

  const handleEnterKeyPress = () => {
    !showLoading && login();
  };

  // Use the custom hook
  useEnterKeyPress(handleEnterKeyPress);

  // const validateFields = () => {
  //   if (
  //     validate_if_not_empty(
  //       loginId,
  //       "emailNotExist",
  //       "",
  //       "Please enter a valid email address."
  //     ) &&
  //     validate_if_not_empty(password, "loginPassNotExist")
  //   ) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };

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
          localStorage.setItem("jstoken", res.data.token);
          Cookies.set("jstoken", res.data.token);
          Cookies.set("user", JSON.stringify(res.data));
          Cookies.set("userId", JSON.stringify(res.data.id));
          setUserDetails(res?.data?.user);
          toastSuccess("Success", "Logged In Successfully.");

          setActiveLoginDialog(false);
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

  useEffect(() => {}, [props?.activeDialog]);
  return (
    props?.activeDialog && (
      <>
        <Box
          sx={{
            position: "fixed", // Ensure the backdrop covers the entire screen
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            bgcolor: "rgba(0, 0, 0, 0.60)",
            zIndex: 5000, // Set zIndex below the dialog
          }}
        >
          {/* Apply blur effect to only this background */}
          <Box
            sx={{
              width: "100vw",
              height: "100vh",
              bgcolor: "rgba(0, 0, 0, 0.60)",
              filter: "blur(62px)",
            }}
          />
        </Box>

        <Box
          sx={{
            position: "fixed", // Position the dialog above the backdrop
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)", // Center the dialog
            zIndex: 6000, // Higher zIndex than the backdrop
          }}
        >
          <Box
            sx={{
              padding: "24px",
              // height: "90vh",
              height: "auto",
              width: { xs: "90vw", sm: "448px", lg: "448px" },
              maxWidth: { xs: "100%", sm: "448px", lg: "448px" },
              // maxHeight: "589px",
              bgcolor: "#1B1B1B",
              borderRadius: "24px",
              border: "1px solid #3D3D3D",
              cursor: "default",
              position: "relative",
              overflowY: "scroll",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              "-ms-overflow-style": "none",
              scrollbarWidth: "none",
            }}
          >
            {/* Dialog content */}
            <CloseSharp
              onClick={(e) => {
                e.stopPropagation();
                props?.handleDialog();
              }}
              sx={{
                position: "absolute",
                right: "24px",
                top: "24px",
                cursor: "pointer",
                color: "white",
              }}
            />

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                width: "100%",
                justifyContent: "center",
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
                  mb: "24px",
                }}
              >
                <Typography
                  // variant="h3"
                  sx={{
                    fontWeight: "600",
                    fontSize: "32px",
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
                  gap: "12px",
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
                      borderRadius: "14px",
                      maxWidth: "400px",
                      padding: "0",
                      height: "95px",
                    }}
                  >
                    <TextInput
                      id="loginPopupinputFields"
                      lableStyles={{ fontWeight: "600", fontSize: "18px" }}
                      labelAstrickStyle={{ color: "#E25454" }}
                      label="Email"
                      placeholder="Email"
                      onChange={(e: any) => {
                        setLoginId(e.target.value);
                      }}
                      inputStyles={{
                        borderRadius: "14px",
                        height: "54px",
                        fontSize: "16px",
                        padding: "16px",
                        color: errors.loginId ? "#E25454" : "#FFFFFF",
                        border: errors.loginId ? "1px solid #E25454" : "0",
                      }}
                      sx={{
                        "&::placeholder": {
                          color: errors.loginId ? "#E25454" : "#FFFFFF80",
                        },
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
                      maxWidth: "400px",
                      padding: "0",
                      height: "95px",
                    }}
                  >
                    <TextInput
                      id="loginPopupinputFields"
                      lableStyles={{ fontWeight: "600", fontSize: "18px" }}
                      label="Password"
                      placeholder="Password"
                      icononclick={() => setPasswordVisible(!passwordVisible)}
                      icon={passwordVisible ? <EyeOpenIcon /> : <EyeOffIcon />}
                      type={!passwordVisible ? "password" : "text"}
                      onChange={(e: any) => {
                        setPassword(e.target.value);
                      }}
                      inputStyles={{
                        borderRadius: "14px",
                        height: "54px",
                        fontSize: "16px",
                        padding: "16px",
                        color: "#FFFFFF",
                        border: errors.password ? "1px solid #E25454" : "0px",
                      }}
                      onNext={inputField2Ref}
                      value={password}
                      required
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
                    maxWidth: "400px",
                    flexWrap: "wrap",
                  }}
                >
                  <Typography
                    onClick={() => {
                      setActiveLoginDialog(false);
                      setActiveResetDialog(true);
                    }}
                    // variant="subtitle1"
                    sx={{
                      userSelect: "none",
                      color: "text.secondary",
                      cursor: "pointer",
                      fontSize: "18px",
                      fontWeight: "600",
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
                  // gap: "5px",
                  maxWidth: "400px",
                  marginTop: "32px",
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
                    border: "1px solid #718B08",
                    color: "#FFFFFF",
                    borderRadius: "14px",
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
                    sx={{
                      color: "text.primary",
                      fontWeight: "700",
                      fontSize: "18px",
                    }}
                    // variant="subtitle1"
                  >
                    {!showLoading && "Sign in"}
                  </Typography>
                </Button>
                {error && (
                  // <Typography
                  //   sx={{ width: "100%" }}
                  //   fontWeight={"400"}
                  //   variant="caption"
                  //   color="#E03137"
                  // >
                  //   {error}
                  // </Typography>
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
                    fontWeight: "400",
                    fontSize: "18px",
                    color: "rgba(255, 255, 255, 0.5)",
                    mt: "16px",
                  }}
                  // variant="subtitle1"
                >
                  Don't have an account yet?{" "}
                  <span
                    onClick={() => {
                      setActiveLoginDialog(false);
                      setActiveSignupDialog(true);
                      // navigate("/signup");
                    }}
                    style={{
                      fontWeight: "400",
                      color: "#CCFF00",
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
      </>
    )
  );
};

export default LoginDialog;
