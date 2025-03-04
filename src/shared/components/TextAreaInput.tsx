import React, { CSSProperties } from "react";
import { createStyles, makeStyles } from "@mui/styles";
import { Box, Theme, Typography } from "@mui/material";
import cn from "classnames";
import { CalendarIconSvg } from "../../assets/icons/CalendarIconSvg";

interface TextAreaInputProps {
  iconstyles?: any;
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
  [x: string]: any;
  required?: boolean;
  icononclick?: () => void;
  textinputstyles?: CSSProperties;
  placeholder?: string;
  placeholderStyle?: any;
}

const TextAreaInput: React.FC<TextAreaInputProps> = (props) => {
  const styles = useStyles(props);
  return (
    <Box
      sx={{
        ...props.textinputstyles,
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
              color: "white",
              letterSpacing: "0.48px",
            }}
            variant="body1"
          >
            {props.label}
            {props.required && (
              <Typography marginLeft="2px" color="red">
                *
              </Typography>
            )}
          </Typography>
        </Box>
      )}
      <Box
        sx={{ ...props.inputWrapStyle, fontFamily: "Inter Tight" }}
        className={styles.wrap}
      >
        {props?.type !== "date" ? (
          <textarea
            className={cn(styles.input, "custom-scrollbar")}
            placeholder={props?.placeholder}
            style={{
              paddingLeft:
                props.phoneNumInitials || props.currency ? "50px" : "20px",
              fontFamily: "Inter Tight",
              "::-webkit-datetime-edit-fields-wrapper": {
                fontSize: "14px !important",
              },
              backgroundColor: "rgba(255, 255, 255, 0.06)",
              width: "100%",
              outline: "none",
              borderRadius: "16px",
              paddingTop: "16px",
              paddingBottom: "16px",
              paddingRight: "20px",
              border: " 1.6px solid #3D3D3D",
              color: "white",
              fontWeight: "400",
              lineHeight: "100%",
              resize: "none",
              ...props.inputStyles,
            }}
            type={props?.type}
            autoComplete="false"
            id={props.inputId}
            onKeyUp={props.inputOnKeyUp}
            value={props?.value}
            {...props}
          />
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
              <CalendarIconSvg color="black" />
            </Box>
            <span className="datepicker-toggle-button"></span>
            <input type="date" className={cn("datepicker-input")} />
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
            onClick={props.icononclick}
            id={props.inputIconId}
            className={styles.icon}
          >
            <img style={props.iconstyles} src={props.icon} alt="icon" />
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
      </Box>
    </Box>
  );
};

export default TextAreaInput;

const useStyles = makeStyles<Theme, { placeholderStyle?: any }>(
  (theme: Theme) =>
    createStyles({
      container: {
        // backgroundColor: "#f0f0f0",
        backgroundColor: "rgba(255, 255, 255, 0.06)",
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
        right: "12px",
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
          minWidth: "231px !important",
        },
      },
      field: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: "10px",
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
      input: (props) => ({
        width: "100%",
        paddingTop: "16px",
        paddingBottom: "16px",
        paddingLeft: "20px",
        paddingRight: "20px",
        borderRadius: "16px",
        border: " 1.6px solid #3D3D3D",
        color: "white",
        fontSize: "16px",
        outline: "none !important",
        backgroundColor: "rgba(255, 255, 255, 0.06)",
        fontWeight: "400",
        lineHeight: "100%",
        fontFamily: "Inter Tight",
        resize: "none",
        "&::placeholder": {
          color: "rgba(255, 255, 255, 0.5)",
          fontWeight: "300",
          fontSize: "14px",
          fontFamily: "Inter Tight",
          ...props?.placeholderStyle,
        },
        "&:focus": {
          border: `1.6px solid primary.main`,
        },
      }),
      dateInput: {
        border: " 1.6px solid #3D3D3D",
        "&:focus": {
          border: `1.6px solid primary.main`,
        },
      },
      emailvalidationicon: {
        position: "absolute",
        top: 0,
        bottom: 0,
        right: "12px",
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
