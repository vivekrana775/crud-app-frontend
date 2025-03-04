import React, { useState } from "react";
import { Box, Chip, MenuItem, Typography } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { CrossIconSvg } from "../../../assets/icons/CrossIconSvg";

type TagInputProps = {
  value?: string[];
  onChange?: (tags: string[]) => void;
  type?: string;
  loading?: boolean;
  [x: string]: any;
  suggestions?: string[];
};

const TagInput: React.FC<TagInputProps> = ({
  value = [],
  onChange,
  type,
  loading,
  suggestions = ["Footer", "Nav", "Header", "Head"],
  ...props
}) => {
  const styles = useStyles();
  const [tags, setTags] = useState<string[]>(value);
  const [inputValue, setInputValue] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);

    const filtered = suggestions?.filter((tag: any) =>
      tag.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredSuggestions(filtered);
  };

  const handleSelectTag = (tag: string) => {
    if (!tags.includes(tag)) {
      const newTags = [...tags, tag];
      setTags(newTags);
      onChange?.(newTags);
    }
    setInputValue("");
    setFilteredSuggestions([]);
  };

  const handleDeleteTag = (tagToDelete: string) => {
    const newTags = tags.filter((tag) => tag !== tagToDelete);
    setTags(newTags);
    onChange?.(newTags);
  };

  return (
    <Box
      sx={{
        ...props.textinputstyles,
        gap: "10px",
        position: "relative",
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
            variant="body1"
          >
            {props.label}
            {props?.required && (
              <Typography sx={{ color: "red", marginLeft: "2px" }}>
                *
              </Typography>
            )}
          </Typography>
        </Box>
      )}
      <Box
        className="custom-scrollbar"
        sx={{
          display: "flex",
          alignItems: "center",
          flexWrap: "nowrap",
          whiteSpace: "nowrap",
          overflowX: "auto",
          paddingLeft: "16px",
          border: " 1.6px solid #3D3D3D",
          backgroundColor: "rgba(255, 255, 255, 0.06)",
          borderRadius: "14px",
          height: "54px",
          "-ms-overflow-style": "none",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display: "none !important",
          },
        }}
      >
        {tags.map((tag, index) => (
          <Chip
            key={index}
            label={tag}
            onDelete={() => handleDeleteTag(tag)}
            deleteIcon={
              <Box
                sx={{
                  mr: "12px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "20px",
                  height: "20px",
                }}
              >
                <CrossIconSvg width="20px" height="20px" color="white" />
              </Box>
            }
            sx={{
              marginRight: "5px",
              color: "white",
              borderRadius: "10px",
              border: "none",
              boxShadow: "inset 0px 0px 0px 1px #3D3D3D",
              backgroundColor: "rgba(255, 255, 255, 0.06)",
            }}
          />
        ))}

        <input
          style={{
            outline: "none !important",
            border: "none !important",
            flex: 1,
          }}
          value={inputValue}
          onChange={(e) => handleInputChange(e)}
          placeholder="Add a tag"
          className={styles.input}
        />
      </Box>
      {inputValue && (
        <Box
          sx={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            zIndex: 10,
            backgroundColor: "#222222",
            borderRadius: "14px",
            boxShadow: "inset 0px 0px 0px 2px #3D3D3D",
            overflow: "hidden",
            maxHeight: "200px",
            overflowY: "auto",
            padding: "18px",
            mt: "8px",
            color: "white",
          }}
        >
          {filteredSuggestions.length > 0 ? (
            filteredSuggestions.map((tag: any, index: any) => (
              <MenuItem
                key={index}
                onClick={() => handleSelectTag(tag)}
                sx={{
                  cursor: "pointer",
                  padding: "8px 16px",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
                  borderRadius: "8px",
                  "&:hover": {
                    color: "#FFFFFF",
                  },
                }}
              >
                {tag}
              </MenuItem>
            ))
          ) : (
            <MenuItem
              onClick={() => handleSelectTag(inputValue)}
              sx={{
                cursor: "pointer",
                padding: "8px 16px",
                borderRadius: "8px",
                borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
                "&:hover": {
                  color: "#FFFFFF",
                },
              }}
            >
              + Add '{inputValue}'
            </MenuItem>
          )}
        </Box>
      )}
    </Box>
  );
};

export default TagInput;

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
        minWidth: "231px !important",
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
      border: "none",
      backgroundColor: "transparent",
      color: "white",
      fontSize: "14px",
      fontWeight: "400",
      outline: "none",
      lineHeight: "100%",
      fontFamily: "Inter Tight",
      "&::placeholder": {
        color: "rgba(255, 255, 255, 0.24)",
        fontWeight: "300",
        fontSize: "14px",
        fontFamily: "Inter Tight",
      },
      "&:focus": {},
    },
    dateInput: {
      border: " 1.6px solid #3D3D3D",
      "&:focus": {},
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
