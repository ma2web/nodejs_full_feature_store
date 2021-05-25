import { Overrides } from "@material-ui/core/styles/overrides";
import { convertOpacityToAlpha } from "utils/numbers";
import FontFaces from "./fontFace";
import palette from "./palette";
import typography from "./typography";

const overrides: Overrides = {
  MuiCssBaseline: {
    // "@global": {
    //   'color': palette.neutral[600],
    //   // '@font-face': FontFaces,
    //   // '@font-face': FontFaces,
    //   "#__next": {
    //     minWidth: 800,
    //   },
    //   'h1': {
    //     fontFamily: "'Roboto', sans-serif",
    //     fontWeight: 300,
    //     fontSize: "4rem",
    //     lineHeight: 1,
    //     letterSpacing: "-0.01562em",
    //   },
    //   'h2': {
    //     fontFamily: "'Roboto', sans-serif",
    //     fontWeight: 300,
    //     fontSize: "2rem",
    //     lineHeight: 1,
    //     letterSpacing: "-0.00833em",
    //   },
    //   'h3': {
    //     fontFamily: "'Roboto', sans-serif",
    //     fontWeight: 400,
    //     fontSize: "1.75rem",
    //     lineHeight: 1.04,
    //     letterSpacing: "0em",
    //   },
    //   'h4': {
    //     fontFamily: "'Roboto', sans-serif",
    //     fontWeight: 400,
    //     fontSize: "1.5rem",
    //     lineHeight: 1.17,
    //     letterSpacing: "0.00735em",
    //   },
    //   'h5': {
    //     fontFamily: "'Roboto', sans-serif",
    //     fontWeight: 400,
    //     fontSize: "1.25rem",
    //     lineHeight: 1.33,
    //     letterSpacing: "0em",
    //     margin: 0,
    //   },
    //   'h6': {
    //     fontFamily: "'Roboto', sans-serif",
    //     fontWeight: 500,
    //     fontSize: "1rem",
    //     lineHeight: 1.6,
    //     letterSpacing: "0.0075em",
    //   },
    //   'button': {
    //     "&:focus": {
    //       outline: 0,
    //     },
    //   },
    // },
  },
  MuiContainer: {
    root: {},
  },
  MuiFormControl: {
    root: {
      width: "100%",
    },
  },
  MuiOutlinedInput: {
    root: {
      minHeight: 40,
      borderRadius: 8,
      "& .MuiOutlinedInput-notchedOutline": {
        borderWidth: 2,
        borderColor: palette.grey[5],
      },
      "& .MuiOutlinedInput-input": {
        padding: "16px",
        color: "#52646F",
        display: "flex",
        "&::placeholder": {
          fontSize: "0.875rem",
          color: "#A9BECB",
        },
        "&.Mui-disabled": {
          color: palette.grey[6],
        },
      },
      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: palette.primary[500],
      },
      "&.Mui-disabled": {
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: palette.grey[6],
        },
      },
      "&.Mui-focused": {
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: palette.primary[700],
        },
      },
    },

    notchedOutline: {
      borderColor: "#0066FF",
    },
    adornedEnd: {
      "& .endAdornmentContainer": {
        top: 0,
        right: 0,
        position: "relative",
        bottom: 0,
        display: "flex",
        alignItems: "center",
        color: "#94ADBD",
        "& .endAdornmentElement,& img": {
          margin: "0 2.5px",
        },
      },
    },
  },
  MuiInputLabel: {
    root: {
      color: "#0066FF",
      "&.Mui-error": {
        // color: "#52646F",
        color: palette.error.main,
      },
      "&.Mui-disabled": {
        color: palette.grey[6],
      },
    },
    outlined: {
      transform: "translate(14px, 12px) scale(1)",
      zIndex: 0,
    },
  },
  MuiTextField: {
    root: {
      // padding: '5px 5px 25px 5px',

      padding: "0, 8px",
      // marginBottom: 25,
    },
  },
  MuiFormHelperText: {
    root: {
      position: "absolute",
      bottom: -23,
      left: 0,
      right: 0,
      color: "#A9BECB",
      display: "flex",
      justifyContent: "space-between",
      "&.Mui-error": {
        color: palette.error.main,
      },
    },
    contained: {
      marginLeft: 17,
      marginRight: 17,
    },
  },
  MuiFormLabel: {
    root: {
      "&.Mui-error": {
        color: palette.error.main,
      },
      "&.Mui-focused": {
        color: palette.primary[400],
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: palette.primary[400],
        },
      },
    },
  },
  MuiSwitch: {
    colorPrimary: {
      color: "#fff",
      "&$checked": {
        color: "#0066FF",
        "&$disabled": {
          color: `${palette.grey[6]}!important`,
          "@global": {
            "+.MuiSwitch-track": {
              backgroundColor: "#e3ede9 !important",
            },
          },
        },
      },
      "&$disabled": {
        color: "#eff4f8 !important",
        "@global": {
          "+.MuiSwitch-track": {
            backgroundColor: "#d9e4ea !important",
            opacity: "unset",
          },
        },
      },
    },
    colorSecondary: {
      color: "#fff",
      "&$checked": {
        color: "#d96846",
        "&$disabled": {
          color: "#f0c7bb !important",
          "@global": {
            "+.MuiSwitch-track": {
              backgroundColor: "#f4e7e6 !important",
            },
          },
        },
        "@global": {
          "+.MuiSwitch-track": {
            backgroundColor: "#e6a38f !important",
          },
        },
      },
      "&$disabled": {
        color: "#eff4f8 !important",
        "@global": {
          "+.MuiSwitch-track": {
            backgroundColor: "#d9e4ea !important",
            opacity: "unset",
          },
        },
      },
    },

    track: {
      opacity: "unset",
      backgroundColor: "#a9becb",
    },
  },
  MuiRadio: {
    colorPrimary: {
      "&$checked": {
        color: "#0066FF",
      },
    },
    root: {
      color: "#0066FF",
      "&$disabled": {
        color: "#c2d1db !important",
      },
      "@global": {
        "+.MuiFormControlLabel-label.Mui-disabled": {
          color: palette.grey[6],
        },
      },
    },
  },
  MuiFormControlLabel: {
    root: {
      color: palette.neutral[500],
      ...typography.button,
    },
  },
  MuiCheckbox: {
    colorPrimary: {
      color: palette.neutral[400],
      borderRadius: 8,
      "&:hover": {
        backgroundColor: `${convertOpacityToAlpha(palette.neutral[600], 0.05)}`,
      },
      "&:active": {
        backgroundColor: `${convertOpacityToAlpha(palette.primary[700], 0.2)}`,
        borderRadius: 8,
      },
      "@global": {
        "+.MuiFormControlLabel-label": {
          color: palette.neutral[400],
        },
      },
      "&$disabled": {
        color: palette.neutral[300],
        "@global": {
          "+.MuiFormControlLabel-label": {
            color: palette.neutral[300],
          },
        },
      },
      "&$checked": {
        color: palette.primary[700],
        "&:hover": {
          backgroundColor: `${convertOpacityToAlpha(
            palette.primary[700],
            0.05
          )}`,
        },
        "&:active": {
          backgroundColor: `${convertOpacityToAlpha(
            palette.primary[700],
            0.15
          )}`,
          borderRadius: 8,
        },
        "&$disabled": {
          color: palette.primary[100],
        },
      },
    },
  },
  MuiAvatar: {
    root: {
      width: 48,
      height: 48,
    },
  },
  MuiTable: {
    root: {
      borderCollapse: "collapse",
      borderRadius: 4,
      overflow: "hidden",
      borderSpacing: "unset",
      position: "relative",
    },
  },
  // MuiTableBody: {
  //   root: {
  //     '& > tr': {
        
  //     }
  //   },
  // },
  MuiTableCell: {
    root: {
      display: "flex",
      alignItems: "center",
      padding: 0,
      // border: `0.5px solid ${palette.neutral[200]}`,
    },
    // head: {
    // },
    // body: {
     
    //   // '&:last-child': {
    //   //   justifyContent: 'flex-end',
    //   // },
    // },
  },
  MuiTableRow: {
    root: {
      
    },
    // head: {
     
    // },

    footer: {
      "& td": {
        justifyContent: "flex-end",
      },
    },
  },
  MuiChip: {
    root: {
      backgroundColor: palette.neutral[300],
      color: palette.neutral[400],
    },
  },
  MuiCardHeader: {
    title: {
      color: palette.neutral[600],
    },
    subheader: {
      color: palette.primary[400],
    },
  },
  MuiButtonGroup: {
    groupedOutlinedHorizontal: {
      "&:not(:first-child)": {
        marginLeft: "unset",
      },
    },
  },
};

export default overrides;
