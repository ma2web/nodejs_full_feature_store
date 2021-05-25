import { makeGolStyles } from "theme";

interface IStyleProps {
  color: "primary" | "secondary";
}

export default makeGolStyles<IStyleProps>(({ palette, spacing }) => ({
  root: {
    "& .MuiSvgIcon-root:nth-child(2) path": {
      transform: "scale(2) !important",
      transformOrigin: "center !important",
    },
    "& .Mui-checked": {
      color: ({ color }) => palette[color].main,
    },
    "& .MuiTypography-root.MuiFormControlLabel-label.MuiTypography-body1": {
      width: "100%",
    },
    "& .MuiFormControlLabel-root": {
      marginBottom: spacing(2),
    },
  },
}));
