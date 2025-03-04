import React, { ChangeEvent, useState } from "react";
import cn from "classnames";
import { createStyles, makeStyles } from "@mui/styles";

import { Box, Theme, ClickAwayListener } from "@mui/material";
import { SearchIconSvg } from "../../assets/icons/SearchIconSvg";

interface searchProps {
  className?: string;
  placeholder?: string;
  value?: string;
  type?: string;
  name?: string;
  hideIcon?: boolean;
  style?: any;
  searchFormStyles?: any;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  iconSize?: any;
  floatingSearchBar?: boolean;
  onKeyDown?: any;
  id?: string;
  inputRef?: any;
  placeholderFontSize?: any;
  placeholderStyle?: any;
}

const Search: React.FC<searchProps> = (props) => {
  const styles = useStyles(props);
  const [activeSearchDialog, setActiveSearchDialog] = useState(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    props.onChange(event);
  };
  return (
    <>
      {props?.floatingSearchBar ? (
        <ClickAwayListener onClickAway={() => setActiveSearchDialog(false)}>
          <Box
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              bgcolor: "#F4F4F4",
            }}
          >
            <button
              onClick={() => {
                setActiveSearchDialog(true);
              }}
              className={styles.result}
            >
              <SearchIconSvg color="rgba(111, 118, 126, 1)" />
            </button>
            {activeSearchDialog && (
              <Box
                sx={{
                  ...props?.searchFormStyles,
                  position: "absolute",
                  zIndex: 300,
                  transition: "2s ease-in-out",
                  top: "-30px",
                  right: "40px",
                }}
                className={cn(props.className, styles.form)}
              >
                <input
                  id={props?.id}
                  style={props.style}
                  className={styles.input}
                  type={props.type}
                  value={props.value}
                  onChange={handleInputChange}
                  name={props.name}
                  autoComplete="off"
                  placeholder={props.placeholder}
                  // {...props}
                  required
                />
                {!props?.hideIcon && (
                  <button className={styles.result}>
                    <SearchIconSvg color="white" />
                  </button>
                )}
              </Box>
            )}
          </Box>
        </ClickAwayListener>
      ) : (
        <Box
          sx={{
            ...props?.searchFormStyles,
          }}
          className={cn(props.className, styles.form)}
        >
          <input
            id={props?.id}
            className="responsive-input"
            style={{
              fontSize: "24px",
              "@media (max-width: 600px)": {
                fontSize: "14px !important",
              },
              ...props.style,
            }}
            // className={styles.input} // I have commented this, because it was creating bug in /search route. 
            type={props.type}
            value={props.value} 
            onChange={handleInputChange}
            name={props.name}
            autoComplete="off"
            placeholder={props.placeholder}
            onKeyDown={props?.onKeyDown}
            ref={props?.inputRef}
            required
          />
          {!props?.hideIcon && (
            <button className={styles.result}>
              <SearchIconSvg color="white" />
            </button>
          )}
        </Box>
      )}
    </>
  );
};

export default Search;

const useStyles = makeStyles<Theme, { placeholderStyle?: any }>(
  (theme: Theme) =>
    createStyles({
      form: {
        position: "relative",
        width: "100%",
        minWidth: "360px",
        height: "100%",
        display: "flex",
        alignItems: "center",
        "@media (max-width: 600px)": {
          minWidth: "auto",
        },
      },
      input: (props) => ({
        width: "100%",
        height: "100%",
        borderRadius: "12px !important",
        border: "none !important",
        outline: "none !important",
        fontWeight: "500 !important",
        fontSize: "18px !important",
        color: "white",
        "&::placeholder": {
          // Use placeholderStyle from props if provided, otherwise use default
          ...props.placeholderStyle,
          fontWeight: "400",
        },
        "@media (max-width: 600px)": {
          fontSize: "14px !important",
          "&::placeholder": {
            fontSize: "14px !important",
          },
        },
        "@media (prefers-color-scheme: dark)": {
          background: "$n6",
          color: "$n1",
        },
      }),
      result: {
        position: "absolute",
        right: 19,
        width: "24px",
        height: "24px",
        border: "none",
        backgroundColor: "transparent",
        "& svg": {
          transition: "fill .2s",
        },
        "&:hover svg": {},
      },
    })
);
