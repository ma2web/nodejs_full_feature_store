import { makeGolStyles } from "theme";

export const useDashboardStyle = makeGolStyles(
  ({ palette, spacing }) => ({
    root: {
      backgroundColor: palette.surface.default,
      display: "flex",
    },
    content: {
      padding: spacing(24, 12, 12, 12),
      color: palette.neutral[600],
      position: "relative",
    },
    childrenContent: {
      width: "100%",
      height: "100vh",
      overflow: "auto",
    },
    myDesk: {
      backgroundColor: palette.surface.default,
      width: 226,
      borderRadius: "8px 0px 0px 8px",
      position: "relative",
      right: 5,
      color: palette.neutral[600],
      display: "flex",
    },
    right: {
      borderRight: `1px solid ${palette.neutral[200]}`,
      padding: spacing(11, 4),
      transition: "all ease-in-out 150ms",
    },
    deskContentOpen: {
      animationName: "$opacity1",
      animationDuration: "400ms",
      animationTimingFunction: "linear",
      animationIterationCount: "forwards",
    },
    deskContentClose: {
      animationName: "$opacity2",
      animationDuration: "400ms",
      animationTimingFunction: "linear",
      animationIterationCount: "forwards",
    },
    left: {
      "& svg": {
        "& path": {
          fill: palette.neutral[400],
        },
      },
      position: "relative",
      transition: "all ease-in-out 150ms",
    },
    arrowRightContainer: {
      width: 34,
      height: 34,
      borderRadius: "50%",
      border: `1px solid ${palette.neutral[200]}`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      top: 41,
      backgroundColor: palette.surface.default,
      cursor: "pointer",
    },
    mainContent: {
      transition: "all ease-in-out 150ms",
      position: "relative",
      paddingTop: spacing(10),
      paddingRight: spacing(12),
      paddingBottom: spacing(12),
      color: palette.neutral[600],
      height: "100vh",
      overflow: "hidden",
    },
    "@keyframes opacity1": {
      from: { opacity: 0, transform: "translateY(-10px)" },
      to: { opacity: 1, transform: "translateY(0)" },
    },
    "@keyframes opacity2": {
      from: { opacity: 1, transform: "translateY(0)" },
      to: { opacity: 0, transform: "translateY(-10px)" },
    },
    "& table": {
      width: "100%",
    },
  }),
  { name: "DashboardLayout" }
);

export default useDashboardStyle;
