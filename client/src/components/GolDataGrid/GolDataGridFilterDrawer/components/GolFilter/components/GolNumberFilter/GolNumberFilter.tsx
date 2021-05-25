import GolSelect from "components/GolSelect";
import GolTextField from "components/GolTextField";
import React, { FC, useState } from "react";
import { useDebounce } from "react-use";
import { makeGolStyles } from "theme";

interface IGolNumberFilterProps {
  column: any;
}
const options = [
  { title: "Equal", value: "Equal" },
  { title: "Not equal", value: "Not equal" },
  { title: "Less than", value: "Less than" },
  { title: "Less than or equals", value: "Less than or equals" },
  { title: "Greater than", value: "Greater than" },
  { title: "Greater than or equals", value: "Greater than or equals" },
];

const GolNumberFilter: FC<IGolNumberFilterProps> = ({ column }) => {
  const classes = useGolDateFilter();
  const [type, setType] = useState<any>(options[0].value);
  const [filterValue, setFilterValue] = useState("");
  useDebounce(
    () =>
      column.setFilter(filterValue.length ? { value: filterValue, type } : ""),
    1000,
    [filterValue, type]
  );

  return (
    <div>
      <GolSelect
        {...{ options, value: type }}
        onChange={(event) => setType(event.target.value)}
        className={classes.select}
      />
     <GolTextField
        style={{ height: 40 }}
        className={classes.numberFilter}
        placeholder="filter"
        type="number"
        value={filterValue}
        onChange={(event) => setFilterValue(event.target.value)}
      />
    </div>
  );
};

export default GolNumberFilter;

const useGolDateFilter = makeGolStyles(
  ({ spacing, palette }) => ({
    numberFilter: {
      marginTop: spacing(2),
      '& .MuiInputBase-input': {
        color: palette.neutral[600]
      },
      '& > div > fieldset.MuiOutlinedInput-notchedOutline': {
        borderColor: palette.neutral[400]
      }
    },
    select: {
      '& .MuiInputBase-input': {
        color: palette.neutral[500]
      },
      '&::before': {
        borderBottom: `1px solid ${palette.neutral[400]}`
      },
      '& > svg': {
        color: palette.neutral[400]
      }
    }
  }),
  { name: "gol-Number-filter" }
);
