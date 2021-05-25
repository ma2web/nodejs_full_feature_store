import { makeGolStyles } from "theme";

export const useSideBarStyles = makeGolStyles(
  ({ palette, spacing }) => ({
    root: {
      display: "flex",
      "& svg": {
        "& path": {
          fill: palette.neutral[100],
        },
      },
      width: "100%",
    },
    mainMenu: {
      backgroundColor: palette.neutral[700],
      width: 90,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: spacing(10, 0),
      height: "100vh",
    },
    menuItems: {},
    menuItem: {
      cursor: "pointer",
      marginBottom: spacing(8),
    },
    logo: {
      marginBottom: spacing(15),
    },
    active: {
      background: `${palette.primary[100]}20`,
      display: "flex",
      padding: spacing(2),
      borderRadius: 4,
    },
    deActive: {
      display: "flex",
      padding: spacing(2),
      borderRadius: 4,
    },
  }),
  { name: "SideBar" }
);

export default useSideBarStyles;
