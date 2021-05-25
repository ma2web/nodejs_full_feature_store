import GolSelect from "components/GolSelect";
import GolTextField from "components/GolTextField";
import React, { FC, useState } from "react";
import { useDebounce } from "react-use";
import { makeGolStyles } from "theme";

interface IGolTextFilterProps {
  column: any;
}
const options = [
  { title: "Contains", value: "Contains" },
  { title: "Not contains", value: "Not contains" },
  { title: "Equal", value: "Equal" },
  { title: "Not equal", value: "Not equal" },
  { title: "Starts with", value: "Starts with" },
  { title: "Ends with", value: "Ends with" },
];

const GolTextFilter: FC<IGolTextFilterProps> = ({ column }) => {
  const classes = useGolTextFilter();
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
      />
      <GolTextField
        style={{ height: 40 }}
        className={classes.textFilter}
        placeholder="filter"
        value={filterValue}
        onChange={(event) => setFilterValue(event.target.value)}
      />
    </div>
  );
};

export default GolTextFilter;

const useGolTextFilter = makeGolStyles(
  ({ spacing }) => ({
    textFilter: {
      marginTop: spacing(2),
    },
  }),
  { name: "gol-text-filter" }
);
