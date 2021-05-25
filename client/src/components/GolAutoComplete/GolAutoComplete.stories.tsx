import React, { FC } from "react";
import { makeGolStyles } from "theme";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { TextField } from "@material-ui/core";

const useStyles = makeGolStyles(({ palette }) => ({}));

export interface IGolAutoCompleteProps {}

const Component: FC<IGolAutoCompleteProps> = ({}) => {
  const classes = useStyles();

  const top100Films = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Godfather: Part II", year: 1974 },
    { title: "The Dark Knight", year: 2008 },
    { title: "12 Angry Men", year: 1957 },
  ];
  return (
    <Autocomplete
      id="combo-box-demo"
      options={top100Films}
      getOptionLabel={(option) => option.title}
      style={{ width: 300 }}
      renderInput={(params) => (
        <TextField {...params} label="Garden of love" variant="outlined" />
      )}
    />
  );
};

const argTypes = {
  color: {
    control: {
      type: "select",
      options: ["primary", "secondary"],
    },
  },
  value: { control: "string", defaultValue: "45" },
};

export const GolAutoComplete = Component.bind({});

export default {
  component: GolAutoComplete,
  title: "AutoComplete",
  argTypes,
};
