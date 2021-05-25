import { makeGolStyles } from "theme";

export default makeGolStyles(() => ({
  root: {
    width: "100%",
    padding: "50px",
    "& .TextFieldContainerStory": {
      display: "flex",
      width: "100%",
    },
    "& h5": {
      minWidth: 150,
    },
    "& .GolTextFieldWithValidation": {
      width: "100%",
    },
    "& .rst__rowTitle": {
      color: "#000",
    },
    "& .rst__rowSubtitle": {
      color: "#000",
    },
    "& .rstcustom__rowTitle": {
      color: "#000",
    },
    "& .rstcustom__rowSubtitle": {
      color: "#000",
    },
  },
}));
