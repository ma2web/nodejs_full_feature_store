import { makeGolStyles } from "theme";
import palette from "theme/palette";

const useStyle = makeGolStyles<{showFilterDrawer: boolean}>(({ palette, spacing }) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    // padding: 0,
    padding: spacing(0,0,6.5,0),
    minHeight: 38
  },
  groupedButtonsLeft: {
    padding: spacing(0, 0.4),
    borderRadius: "4px !important",
    height: 38,
    width: 50,
    borderColor: `${palette.neutral[600]} !important`,
    '& svg path': {
fill: palette.neutral[600]
    },
    '&:not(:last-child)': {
      marginRight: spacing(2),
    }
  },
  groupedButtonsRight: {
    padding: spacing(0, 0.4),
    borderRadius: "4px !important",
    height: '38px !important',
    borderColor: 'inherit !important',
    '&:not(:last-child)': {
      marginRight: spacing(2),
      width: 112
    }
  },
  groupedHorizontalInner: {
    height: 38,
  },
  arrowButtonLayout: {
    width: 72,
  },
  drawerButton: {
    color: ({showFilterDrawer}) => showFilterDrawer ? palette.primary[700] : palette.secondary[400],
    '& svg': {
      transform: ({showFilterDrawer}) => showFilterDrawer ? 'rotate(180deg)' : 'unset',
      transition: 'all 0.5s',
      '& path': {
        fill: ({showFilterDrawer}) => showFilterDrawer ? palette.primary[700] : palette.secondary[400]
      }
    }
  },
  searchButton: {
    '& svg path': {
      fill: 'unset',
      stroke: palette.neutral[600]
    }
  }
}));

export default useStyle;
