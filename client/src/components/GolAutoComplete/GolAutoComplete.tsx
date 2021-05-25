import React, { FC, useState } from "react";
import { makeGolStyles } from "theme";
import {
  Autocomplete,
  AutocompleteProps,
  AutocompleteRenderInputParams,
} from "@material-ui/lab";
import { IconButton, TextField } from "@material-ui/core";

const useStyles = makeGolStyles(({ palette }) => ({}));

export interface IGolAutoCompleteProps
  extends Omit<
    AutocompleteProps<any, boolean, boolean, boolean>,
    "renderInput"
  > {
  options: any[];
  onInputChange?: any;
  label?: string;
  defaultValue?: any;
  renderInput?: (params: AutocompleteRenderInputParams) => React.ReactNode;
}

const GolAutoComplete: FC<IGolAutoCompleteProps> = ({
  options,
  onInputChange,
  label,
  defaultValue,
  renderInput,
  value,
  ...rest
}) => {
  const classes = useStyles();
  const [icon, setIcon] = useState(null);

  return (
    <Autocomplete
      value={value}
      inputValue={value}
      id="combo-box-demo"
      options={options}
      // getOptionLabel={(option) => option.title}
      renderInput={renderInput ? renderInput : (params) => (
        <TextField
          {...params}
          label={label}
          variant="standard"
          InputProps={{
            ...params.InputProps,
            startAdornment: <span>{icon}</span>,
          }}
          value={value}
        />
      )}
       {...rest}
      
      // renderOption={(option) => {
      //   return (
      //     <>
      //       {option.icon && <IconButton color="primary">{option.icon}</IconButton>}
      //       {option.title}
      //     </>
      //   );
      // }}
      // renderTags={(options) => {
      //   return options.map((option) => (
      //     <>
      //       <IconButton color="primary">{option.icon}</IconButton>
      //       {option.title}
      //     </>
      //   ));
      // }}
      // onChange={(e, data) => {
      //   if (data !== null) {
      //     setIcon(data.icon);
      //     onInputChange(data.title);
      //   } else {
      //     setIcon(null);
      //     onInputChange(null);
      //   }
      // }}
    />
  );
};

export default GolAutoComplete;
