import React, { CSSProperties, useEffect, useRef } from "react";
import { createStyles, makeStyles } from "@mui/styles";
import { Box, Typography } from "@mui/material";
import cn from "classnames";
import { colors } from "../../utils/colors";
import { CalendarIconSvg } from "../../assets/icons/CalendarIconSvg";
import DefaultLoading from "../Loading/DefaultLoading";
interface textInputProps {
  iconstyles?: any;
  iconContainerStyles?: any;
  label?: string;
  icon?: any;
  copy?: any;
  currency?: any;
  type?: string;
  place?: any;
  inputOnKeyUp?: any;
  warningIcon?: any;
  checkicon?: any;
  inputId?: any;
  warningIconId?: any;
  inputIconId?: any;
  validateSuccessIcon?: any;
  phoneNumInitials?: any;
  loading?: boolean;
  [x: string]: any;
  required?: boolean;
  icononclick?: () => void;
  textinputstyles?: CSSProperties;
  lableStyles?: CSSProperties;
  inputStyles?: CSSProperties;
  inputWrapStyle?: any;
  placeholderFontSize?: any;
  labelAstrickStyle?:any
}

const TextInput: React.FC<textInputProps> = (props) => {
  const styles = useStyles(props);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cursorPosition = e.target.selectionStart;
    props.onChange(e);
    requestAnimationFrame(() => {
      if (inputRef.current) {
        inputRef.current.setSelectionRange(cursorPosition, cursorPosition);
      }
    });
  };

  useEffect(() => {
    if (inputRef.current && props.value !== undefined) {
      inputRef.current.value = props.value;
    }
  }, [props.value]);

  return (
    <Box
      sx={{
        ...props.textinputstyles,
        gap: "10px",
      }}
      className={styles.field}
    >
      {props.label && (
        <Box>
          <Typography
            sx={{
              fontWeight: "500",
              display: "flex",
              alignItems: "center",
              color: "text.secondary",
              letterSpacing: "0.48px",
              ...props?.lableStyles,
            }}
            variant="subtitle1"
          >
            {props.label}
            {props?.required && (
              <Typography
                sx={{
                  color: "red",
                  marginLeft: "2px",
                  ...props?.labelAstrickStyle
                }}
              >
                *
              </Typography>
            )}
          </Typography>
        </Box>
      )}
      <Box
        sx={{
          ...props.inputWrapStyle,
        }}
        className={styles.wrap}
      >
        {props?.type !== "date" ? (
          props?.type !== "time" ? (
            <input
              style={{
                paddingLeft:
                  props.phoneNumInitials || props.currency ? "50px" : "24px",
                backgroundColor: colors.primaryGrey,
                border: "none",
                boxShadow: "inset 0px 0px 0px 1px #3D3D3D",
                color: "rgba(255, 255, 255, 0.5)",
                ...props.inputStyles,
              }}
              type={props?.type}
              autoComplete="false"
              id={props.inputId}
              className={styles.input}
              value={
                props?.loading ? (
                  <Box
                    sx={{
                      width: "24px",
                      height: "24px",
                    }}
                  >
                    <DefaultLoading />
                  </Box>
                ) : (
                  props?.value
                )
              }
              onChange={handleChange}
              {...props}
            />
          ) : (
            <div style={{ position: "relative", width: "100%" }}>
              <input
                style={{
                  paddingLeft:
                    props.phoneNumInitials || props.currency ? "50px" : "24px",
                  backgroundColor: colors.primaryGrey,
                  border: "none",
                  boxShadow: "inset 0px 0px 0px 2px #3D3D3D",
                  color: "rgba(255, 255, 255, 0.5)",
                  ...props.inputStyles,
                }}
                type={props?.type}
                autoComplete="false"
                id={props.inputId}
                ref={inputRef}
                className={styles.input}
                onChange={handleChange}
                {...props}
              />
            </div>
          )
        ) : (
          <span
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
            }}
            className={cn(styles.dateInput, "datepicker-toggle")}
          >
            <Box
              sx={{
                position: "absolute",
                width: "24px",
                height: "24px",
                zIndex: 1,
                right: 16,
              }}
            >
              <CalendarIconSvg color="white" />
            </Box>
            <span className="datepicker-toggle-button"></span>
            <input
              style={{
                paddingLeft:
                  props.phoneNumInitials || props.currency ? "50px" : "24px",
                backgroundColor: colors.primaryGrey,
                border: "none",
                boxShadow: "inset 0px 0px 0px 2px #3D3D3D",
                color: "rgba(255, 255, 255, 0.5)",
                ...props.inputStyles,
              }}
              type="date"
              className={cn("datepicker-input", styles.input)}
            />
          </span>
        )}
        {props.phoneNumInitials ? (
          <p
            style={{
              position: "absolute",
              transform: "translate(50%, 5%)",
              fontSize: "14px",
              fontWeight: "400",
            }}
          >
            +91
          </p>
        ) : (
          <></>
        )}

        {props.icon && (
          <div
            style={{
              ...props.iconContainerStyles,
            }}
            onClick={props.icononclick}
            id={props.inputIconId}
            className={styles.icon}
          >
            {React.isValidElement(props.icon) ? (
              props.icon
            ) : (
              <img style={props.iconstyles} src={props.icon} alt="icon" />
            )}
          </div>
        )}
        {props.warningIcon && (
          <div className="emailvalidationicon" id={props.warningIconId}></div>
        )}
        {props.checkicon && (
          <div
            className={styles.emailvalidationicon}
            id={props.validateSuccessIcon}
          >
            <img width={14} height={10} src={props.checkicon} alt="check" />
          </div>
        )}
        {props.copy && <button className={styles.copy}></button>}
        {props?.loading ? (
          <Box
            sx={{
              width: "42px",
              height: "42px",
              position: "absolute",
              left: "20px",
            }}
          >
            <DefaultLoading />
          </Box>
        ) : (
          <></>
        )}
      </Box>
    </Box>
  );
};

export default TextInput;

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      padding: "1rem",
    },
    heading: {
      fontSize: "1.5rem",
      fontWeight: "bold",
    },
    copy: {},
    icon: {
      position: "absolute",
      top: 0,
      bottom: 0,
      right: "20px",
      display: "flex",
      alignItems: "center",
    },
    wrap: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      minWidth: "200px",
      width: "100%",
      "@media screen and (max-width: 600px)": {
        minWidth: "231px",
      },
    },
    field: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      flex: 1,
    },
    fieldIcon: {
      "& .input": {
        paddingLeft: "48px",
      },
    },
    fieldCurrency: {
      "& .input": {
        paddingLeft: "58px",
        background: "none",
        borderColor: "$n3",
        "&:focus": {
          borderColor: "$shades1",
        },
        "+dark": {
          borderColor: "$n6",
          "&:focus": {
            borderColor: "$n5",
          },
        },
      },
    },
    fieldCopy: {
      "& .input": {
        paddingRight: "48px",
      },
    },
    input: {
      width: "100%",
      paddingTop: "16px",
      paddingBottom: "16px",
      paddingLeft: "20px",
      height: "52px",
      paddingRight: "20px",
      borderRadius: "12px",
      border: " 1.6px solid #3D3D3D",
      backgroundColor: "rgba(255, 255, 255, 0.06)",
      color: "white",
      // fontSize: "14px",
      fontWeight: "400",
      outline: "none",
      lineHeight: "100%",
      "&::placeholder": {
        color: "rgba(255, 255, 255, 0.5)",
        fontWeight: "300",
        fontSize: (props: textInputProps) =>
          props.placeholderFontSize || "14px",
      },
      "&:focus": {},
    },
    dateInput: {
      border: " 1.6px solid #3D3D3D",
      "&:focus": {
        // border: `1.6px solid primary.main`,
      },
    },
    emailvalidationicon: {
      position: "absolute",
      top: 0,
      bottom: 0,
      right: "20px",
      display: "flex",
      alignItems: "center",
    },
    error: {
      "& .icon svg": {
        fill: "$p3",
      },
      "& .wrap:after": {
        content: '""',
        position: "absolute",
        top: "0",
        right: "0",
        bottom: "0",
        width: "48px",
        background:
          'url("data:image/svg+xml,...") no-repeat 50% 50% / 24px auto',
      },
      "& .input": {
        paddingRight: "48px",
        background: "rgba($s1, .25)",
        borderColor: "transparent",
        color: "$p3",
        "+dark": {
          "&:focus": {
            borderColor: "$p3",
            color: "$p3",
          },
        },
        "&::placeholder": {
          color: "$p3",
        },
      },
    },
    success: {
      "& .wrap:after": {
        content: '""',
        position: "absolute",
        top: "0",
        right: "0",
        bottom: "0",
        width: "48px",
        background:
          'url("data:image/svg+xml,...") no-repeat 50% 50% / 24px auto',
      },
      "& .input": {
        paddingRight: "48px",
        background: "$n",
        borderColor: "$shades1",
        "+dark": {
          background: "$n8",
        },
      },
    },
  })
);
