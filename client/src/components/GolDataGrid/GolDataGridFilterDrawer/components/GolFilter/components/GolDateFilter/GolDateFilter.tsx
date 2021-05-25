import GolCalendar from "components/GolCalendar";
import GolSelect from "components/GolSelect";
import moment from 'moment-jalaali'
import React, { FC, useState } from "react";
import { useDebounce } from "react-use";
import { makeGolStyles } from "theme";

interface IGolDateFilterProps {
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

const GolDateFilter: FC<IGolDateFilterProps> = ({ column }) => {
  const classes = useGolDateFilter();
  const [type, setType] = useState<any>(options[0].value);
  const [filterValue, setFilterValue] = useState(moment());
  useDebounce(
    () =>
      column.setFilter(filterValue ? { value: filterValue, type } : ""),
    1000,
    [filterValue, type]
  );

  
  return (
    <div>
      <GolSelect
        {...{ options, value: type }}
        onChange={(event) => setType(event.target.value)}
      />
      <GolCalendar className={classes.dateFilter} onChange={(value, value2) => setFilterValue(value)} />
    </div>
  );
};

export default GolDateFilter;

const useGolDateFilter = makeGolStyles(
  ({ spacing }) => ({
    dateFilter: {
      marginTop: spacing(2),
      zIndex: 7
    },
  }),
  { name: "gol-Number-filter" }
);
