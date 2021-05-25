import GolTextField from "components/GolTextField";
import React, { FC } from "react";
import { makeGolStyles } from "theme";
import { whichFormType } from "../../GolDataGridFilterDrawer";
import { ReactComponent as SearchIcon } from "assets/images/icons/UI/Search.svg";
import GolExpansion from "components/GolExpansion";
import classNames from "classnames";
import { Switch, useTheme } from "@material-ui/core";
import GolTextFilter from './components/GolTextFilter'
import GolNumberFilter from "./components/GolNumberFilter";
import GolDateFilter from "./components/GolDateFilter";
interface IGolFilterProps {
  whichForm: whichFormType;
  allColumns?: any;
}

const filterComponent = (column: any) => {
  switch(column.Filter) {
    case 'text': return <GolDateFilter {...{column}} />
    case 'numberFilter': return <GolNumberFilter {...{column}} />
    case 'textFilter': return <GolTextFilter {...{column}}/>
  }
}

const GolFilter: FC<IGolFilterProps> = ({ whichForm, allColumns }) => {
  const classes = useGolFilter({ whichForm });
  const theme = useTheme()
  
  return (
    <div className={classNames(classes.container, theme.direction === "ltr" ? 'ltr-golFilter' : 'rtl-golFilter')}>
      <GolTextField
        className={classes.searchInput}
        leftPrefix={<SearchIcon />}
        onChange={() => undefined}
        placeholder="Search"
        style={{height: 40}}
      />
      {allColumns
        .filter((_) => _.canFilter)
        .map((column) => (
          <GolExpansion className={classes.expansion} summary={column.Header}>
            {filterComponent(column)}
          </GolExpansion>
        ))}
    </div>
  );
};

export default GolFilter;

const useGolFilter = makeGolStyles<{ whichForm: whichFormType }>(
  ({ palette, typography, spacing }) => ({
    container: {
      top: -1,
      zIndex: 1,
      padding: spacing(4.5, 0),
      position: "absolute",
      width: 254,
      height: 464,
      backgroundColor: palette.neutral[100],
      border: `1px solid ${palette.neutral[700]}`,
      display: ({ whichForm }) =>  whichForm === "filter" ? "flex" : 'none',
      flexDirection: "column",
      '&.rtl-golFilter': {
        left: ({ whichForm }) => whichForm === "filter" ? 51 : -254,
      },
      '&.ltr-golFilter': {
        right: ({ whichForm }) => whichForm === "filter" ? 51 : -254,

      }
    },
    searchInput: {
      padding: spacing(0, 3),
      marginBottom: spacing(3),
      '& .MuiInputBase-root': {
        color: palette.neutral[600],
        ...typography.body1,
        '&:hover .MuiOutlinedInput-notchedOutline': {
          borderColor: palette.neutral[400], 
        }
      },
      "& .GolTextFieldLeftPrefix svg path": {
        stroke: palette.neutral[600],
      },
      '& > div > fieldset.MuiOutlinedInput-notchedOutline': {
        borderColor: palette.neutral[400],
      }
    },
    expansion: {
      borderTop: `1px solid ${palette.neutral[300]}`,
      backgroundColor: 'transparent',
      boxShadow: 'unset',
      // height: 40, 
      ...typography.button,
      color: palette.neutral[500],
      
      '& .MuiAccordionSummary-root': {
        minHeight: 40,

        '& .MuiAccordionSummary-expandIcon': {
          padding: spacing(0),
          '& svg path': {
            fill: palette.neutral[400]
          }
        }
      },
      '& .MuiCollapse-container .MuiCollapse-wrapper': {
        backgroundColor: 'transparent'
      }
    }
  }),
  { name: "GolFilter" }
);
