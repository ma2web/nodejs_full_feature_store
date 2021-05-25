import { makeGolStyles } from "theme";

export const useNotificationsStyles = makeGolStyles(
  ({ palette, spacing, shadows }) => ({
    root: {
      width: 526,
      height: 616,
      top: 86,
      left: 87,
      position: "absolute",
      boxShadow: shadows[4],
      borderRadius: 12,
      padding: spacing(6),
      background: palette.surface.default,
      zIndex: 99,
    },
  }),
  { name: "Notifications" }
);

export default useNotificationsStyles;
