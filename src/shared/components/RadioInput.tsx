import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import RadioGroup, { useRadioGroup } from "@mui/material/RadioGroup";
import FormControlLabel, {
  FormControlLabelProps,
} from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import { Box, Typography } from "@mui/material";

interface StyledFormControlLabelProps extends FormControlLabelProps {
  checked: boolean;
  caption?: string;
  style?: React.CSSProperties;
  onSelectBackground?: string;
}

const StyledFormControlLabel = styled((props: StyledFormControlLabelProps) => (
  <Box
    sx={{
      border: props?.checked ? "1.6px solid #4EA62F" : "1.6px solid #E9EAEC",
      fontSize: "14px",
      display: "flex",
      borderRadius: "12px",
      flexDirection: "column",
      ...props.style,
    }}
  >
    <FormControlLabel
      sx={{
        display: "flex !important",
        color: "white",
        width: "100% !important",
        "& .MuiFormControlLabel-label": {
          fontWeight: "400 !important",
        },
      }}
      {...props}
    />

    <Typography
      sx={{
        textAlign: "start",
        width: "100%",
        fontWeight: 300,
        color: "white !important",
        fontFamily: "Inter Tight",
      }}
      variant="caption"
    >
      {/* {props.caption} */}
    </Typography>
  </Box>
))(({ theme, checked }) => ({
  "&.MuiFormControlLabel-label": checked && {
    color: "white",
  },

  ".MuiFormControlLabel-label": {
    fontWeight: "400",
    fontSize: "18px",
    color: "white",
    fontFamily: "Inter Tight",
  },
  ".css-1hbvpl3-MuiSvgIcon-root": {
    fill: checked ? "#CCFF00" : "#3D3D3D",
  },
}));

interface FormControlLabelCustomProps {
  props: FormControlLabelProps;
  caption?: string;
  style?: React.CSSProperties;
  onSelectBackground?: string;
}

function MyFormControlLabel(props: FormControlLabelCustomProps) {
  const radioGroup = useRadioGroup();

  let checked = false;

  if (radioGroup) {
    checked = radioGroup.value === props.props.value;
  }

  return (
    <StyledFormControlLabel
      style={props.props.style}
      caption={props?.caption}
      checked={checked}
      onSelectBackground={props?.onSelectBackground}
      {...props.props}
    />
  );
}

interface RadioGroupProps {
  radioValues: any;
  radiosCaptions?: string[];
  onChange: (e?: any) => void;
  style?: React.CSSProperties;
  radioInupStyle?: React.CSSProperties;
  descriptions?: string[];
  onSelectBackground?: string;
  radioOptionStyles?: React.CSSProperties;
  value?: any;
}

export default function UseRadioGroup(props: RadioGroupProps) {
  const theme = useTheme();
  return (
    <RadioGroup
      onChange={(e) => {
        props.onChange(e.target.value);
      }}
      sx={{
        display: "flex",
      }}
      name="use-radio-group"
      defaultValue="first"
      value={props.value}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
          gap: "16px",
          ...props.style,
        }}
      >
        {props.radioValues?.map((element: string, index: number) => {
          return (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                maxHeight: "56px",
                gap: "16px",
                ...props?.radioOptionStyles,
              }}
            >
              <MyFormControlLabel
                key={index}
                caption={
                  props.radiosCaptions !== undefined
                    ? props.radiosCaptions[0]
                    : ""
                }
                onSelectBackground={props?.onSelectBackground}
                props={{
                  sx: {
                    maxWidth: "100%",
                    minWidth: "100%",
                    marginLeft: "0px !important",
                    marginRight: "0px !important",
                    display: "flex",
                    width: "100%",
                    justifyContent: "flex-start",
                    color: "black",
                    flexDirection: "row-reverse",
                    border: "none",
                    fontSize: "14px !important",
                    fontWeight: "500",
                    gap: "16px",
                    ...props.style,
                  },
                  value: element,
                  label: element,
                  style: props.radioInupStyle,
                  control: (
                    <Radio
                      sx={{
                        fontSize: "14px",
                        lineHeight: "100%",
                        maxWidth: "16px",
                        maxHeight: "16px",
                        "&.Mui-checked": {
                          color: theme.palette.primary.main,
                        },
                      }}
                    />
                  ),
                }}
              />
              {props?.descriptions && (
                <Typography
                  fontSize={"14px !important"}
                  sx={{ color: "#687588", textAlign: "start", width: "100%" }}
                  variant="body2"
                >
                  {props?.descriptions[index]}
                </Typography>
              )}
            </Box>
          );
        })}
      </Box>
    </RadioGroup>
  );
}
