import { makeGolStyles } from "theme";

export const usePrivateChatStyle = makeGolStyles(
  ({ palette, shadows, direction, spacing }) => ({
    root: {
      backgroundColor: palette.surface.default,
      position: "fixed",
      right: 390,
      width: 332,
      boxShadow: shadows[1],
      borderRadius: "6px 6px 0 0",
      transition: "all ease-in-out 200ms",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      padding: spacing(3, 4, 1, 4),
      fontSize: 17,
      borderBottom: `1px solid ${palette.neutral[200]}`,
    },
    spaceBetween: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    sendSvg: {
      cursor: "pointer",
      margin: spacing(0, 5),
    },
    toggle: {
      cursor: "pointer",
    },
    body: {
      padding: spacing(3, 4, 1, 4),
      overflowY: "scroll",
      backgroundColor: palette.surface.default,
      height: 391,
    },
    message: {
      position: "relative",
      animationDelay: "1.5s",
      animationName: "message",
      animationDuration: "0.7s",
      animationTimingFunction: "ease-in",
      animationFillMode: "forwards",
      backgroundPositionX: "center",
    },
    sendMessage: {
      bottom: 0,
      zIndex: 999,
      width: "100%",
      backgroundColor: palette.surface.default,
      position: "relative",
    },
    top: {},
    avatar: {
      width: 36,
      height: 36,
      background: palette.neutral[200],
      borderRadius: 50,
    },
    date: {
      color: palette.neutral[300],
    },
    bottom: {
      fontSize: 15,
      border: `1px solid ${palette.neutral[200]}`,
      padding: spacing(4),
      margin: spacing(3, 0),
      borderRadius: 3,
      position: "relative",
      "&:before": {
        position: "absolute",
        content: "''",
        background: "transparent",
        left: 10,
        top: -14,
        zIndex: 1,
        border: `7px solid ${palette.neutral[200]}`,
        borderTop: "7px solid transparent",
        borderLeft: "7px solid transparent",
        borderRight: "7px solid transparent",
        boxShadow: "1px solid #000",
      },
    },
    messageMe: {},
    spaceBetweenMe: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "row-reverse",
    },
    avatarMe: {},
    bottomMe: {
      fontSize: 15,
      textAlign: "right",
      border: `1px solid ${palette.primary[700]}20`,
      background: `${palette.primary[700]}10`,
      padding: spacing(4),
      margin: spacing(3, 0),
      borderRadius: 3,
      position: "relative",
      "&:before": {
        position: "absolute",
        content: "''",
        background: "transparent",
        right: 10,
        top: -14,
        zIndex: 1,
        border: `7px solid ${palette.primary[700]}30`,
        borderTop: "7px solid transparent",
        borderLeft: "7px solid transparent",
        borderRight: "7px solid transparent",
        boxShadow: "1px solid #000",
      },
    },
    sendMessageInput: {
      padding: spacing(2.5),
    },
    unReadedMessages: {
      position: "absolute",
      top: -50,
      right: 30,
      zIndex: 999,
      width: 40,
      height: 40,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      boxShadow: shadows[1],
      background: palette.surface.default,
      cursor: "pointer",
      borderRadius: "50%",
    },
    sendMessageTools: {
      padding: spacing(2.5),
      display: "flex",
      justifyContent: "space-between",
      backgroundColor: palette.neutral[100],
      alignItems: "center",
    },
    searchInput: {
      background: palette.neutral[100],
      borderRadius: 8,

      "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        border: "none",
      },
      "& .MuiFormLabel-root": {
        color: palette.neutral[600],
      },
    },
    "@keyframes message": {
      from: {
        transform: "translateY(50px)",
        opacity: 0,
      },
      to: {
        transform: "translateY(0px)",
        opacity: 1,
      },
    },
    attachIcon: {
      display: "flex",
      alignItems: "center",
      "& svg": {
        margin: direction === "rtl" ? spacing(0, 0, 0, 3) : spacing(0, 3, 0, 0),
      },
      cursor: "pointer",
    },
  }),
  { name: "SideBar" }
);

export default usePrivateChatStyle;
