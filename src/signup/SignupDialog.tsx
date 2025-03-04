import React, { useEffect, useRef, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { CloseSharp } from "@mui/icons-material";

import DefaultLoading from "../shared/Loading/DefaultLoading";
import TextInput from "../shared/components/TextInput";
import { registerUser } from "../services/authentication";
import { isValidEmail, validate_if_not_empty } from "../utils/extensions";
import useEnterKeyPress from "../utils/useEnterKeyPress";
import { useGlobalContext } from "../App";
import Cookies from "js-cookie";
import { toastError, toastSuccess } from "../utils/ToastMessage";
//@ts-ignore
import EyeOpenIcon from "../assets/icons/EyeIcons/EyeOpenIcon";
//@ts-ignore
import EyeOffIcon from "../assets/icons/EyeIcons/EyeOffIcon";
import ErrorMessageIcon from "../assets/icons/ErrorMessageIcon/ErrorMessageIcon";
import { useNavigate } from "react-router-dom";

type Props = {
  activeDialog: any;
  handleDialog?: any;
};

const SignupDialog: React.FC<Props> = (props) => {
  const { setActiveLoginDialog, setActiveSignupDialog, setUserDetails } =
    useGlobalContext();
  const navigate = useNavigate();
  // loading state
  const [showLoading, setShowLoading] = useState(false);

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

  const inputField1Ref = useRef(null);
  const inputField2Ref = useRef(null);

  const handleEnterKeyPress = () => {
    // !showLoading && login();
  };

  // const validateFields = () => {
  //   if (
  //     validate_if_not_empty(firstName, "loginFirstNameNotExist") &&
  //     validate_if_not_empty(lastName, "loginLastNameNotExist") &&
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
      try {
        setError("");

        const data = {
          email: loginId,
          password: password,
          firstName: firstName,
          lastName: lastName,
        };

        // Await the loginUser function call
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
              Cookies.set("userId", JSON.stringify(res.data.id));
              setUserDetails(res?.data?.user);
              setActiveSignupDialog(false);
              setShowLoading(false);
              toastSuccess("Success", "Registered Successfully.");
              localStorage.setItem("isFirstTimeUser", "true");
              navigate("/");
            }
          })
          .catch((err) => {
            toastError("Error", err?.response?.data?.message);
          });
      } catch (error: any) {
        console.log(error, error.code);
      } finally {
        setShowLoading(false);
      }
    } else {
      setShowLoading(false);
    }
  };

  // Use the custom hook
  useEnterKeyPress(handleEnterKeyPress);

  useEffect(() => {}, [props?.activeDialog]);
  return (
    props?.activeDialog && (
      <>
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            bgcolor: "rgba(0, 0, 0, 0.60)",
            zIndex: 5000,
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
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 6000,
          }}
        >
          <Box
            sx={{
              padding: { xs: "20px", sm: "24px", lg: "24px" },
              height: "auto",
              width: { xs: "90vw", sm: "448px", lg: "448px" },
              maxWidth: { xs: "100%", sm: "448px", lg: "448px" },
              // maxHeight: "907px",
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
                  mb: "32px",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "600",
                    color: "text.secondary",
                    fontSize: "32px",
                  }}
                  // variant="h3"
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
                      alignItems: "flex-start",
                      gap: "16px",
                      width: "100%",
                      boxSizing: "border-box",
                      // flexDirection: { xs: "column", sm: "row", lg: "row" },
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        borderRadius: "14px",
                        boxSizing: "border-box",
                        width: "100%",
                        maxWidth: "100%",
                        flex: 1,
                      }}
                    >
                      <TextInput
                        id="signupPopupinputsFields"
                        lableStyles={{ fontSize: "18px", fontWeight: "600" }}
                        labelAstrickStyle={{ color: "#E25454" }}
                        label="First Name"
                        placeholder="First Name"
                        onChange={(e: any) => {
                          setFirstName(e.target.value);
                        }}
                        inputStyles={{
                          borderRadius: "14px",
                          height: "54px",
                          fontSize: "16px",
                          color: "#FFFFFF",
                          padding: "16px",
                          border: errors.firstName
                            ? "1px solid #E25454"
                            : "0px",
                        }}
                        inputWrapStyle={{
                          minWidth: "10px",
                        }}
                        onNext={inputField1Ref}
                        value={firstName}
                        required
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
                        borderRadius: "12px",
                        boxSizing: "border-box",
                        width: "100%",
                        maxWidth: "100%",
                        flex: 1,
                      }}
                    >
                      <TextInput
                        id="signupPopupinputsFields"
                        lableStyles={{ fontSize: "18px", fontWeight: "600" }}
                        labelAstrickStyle={{ color: "#E25454" }}
                        label="Last Name"
                        placeholder="Last Name"
                        onChange={(e: any) => {
                          setLastName(e.target.value);
                        }}
                        inputStyles={{
                          borderRadius: "14px",
                          height: "54px",
                          fontSize: "16px",
                          padding: "16px",
                          color: "#FFFFFF",
                          border: errors.lastName ? "1px solid #E25454" : "0px",
                        }}
                        inputWrapStyle={{
                          minWidth: "10px",
                        }}
                        onNext={inputField1Ref}
                        value={lastName}
                        required
                      />
                      <Typography
                        className="err_field"
                        id="loginLastNameNotExist"
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
                      maxWidth: "448px",
                      height: "95px",
                    }}
                  >
                    <TextInput
                      id="signupPopupinputsFields"
                      lableStyles={{ fontSize: "18px", fontWeight: "600" }}
                      labelAstrickStyle={{ color: "#E25454" }}
                      label="Email"
                      placeholder="Your Email"
                      onChange={(e: any) => {
                        const value = e.target.value;
                        setLoginId(e.target.value);

                        if (isValidEmail(value)) {
                          setEmailBorderColor("#CF0");
                        } else if (value.includes("#")) {
                          setEmailBorderColor("#E25454");
                        } else {
                          setEmailBorderColor("#3D3D3D");
                        }
                      }}
                      inputStyles={{
                        borderRadius: "14px",
                        height: "54px",
                        fontSize: "16px",
                        padding: "16px",
                        color:
                          emailBorderColor === "#E25454"
                            ? "#E25454"
                            : "#FFFFFF",
                        border: errors.loginId ? "1px solid #E25454" : "0px",
                      }}
                      onNext={inputField1Ref}
                      value={loginId}
                      required
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
                      maxWidth: "448px",
                      height: "95px",
                    }}
                  >
                    <TextInput
                      id="signupPopupinputsFields"
                      lableStyles={{ fontSize: "12px", fontWeight: "600" }}
                      labelAstrickStyle={{ color: "#E25454" }}
                      label="Password"
                      placeholder="Enter password"
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
                  // gap: "5px",
                  maxWidth: "448px",
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
                    borderRadius: "16px",
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
                    sx={{
                      color: "text.primary",
                      fontSize: "18px",
                      fontWeight: "700",
                    }}
                    // variant="subtitle1"
                  >
                    {!showLoading && "Sign Up"}
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
                    fontWeight: "400",
                    mt: "16px",
                    color: "rgba(255, 255, 255, 0.5)",
                    fontSize: "18px",
                  }}
                  // variant="subtitle1"
                >
                  Already a member?{" "}
                  <span
                    onClick={() => {
                      setActiveSignupDialog(false);
                      setActiveLoginDialog(true);
                    }}
                    style={{
                      fontWeight: "400",
                      color: "#CF0",
                      cursor: "pointer",
                    }}
                  >
                    Sign in
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

export default SignupDialog;
