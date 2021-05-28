import { makeGolStyles } from "theme";

interface IStyleProps {}

export default makeGolStyles<IStyleProps>(({ palette, spacing }) => ({
  root: {
    position: "fixed",
    top: 0,
    right: 0,
    width: "100%",
    height: "100vh",
    zIndex: 9,
    background: "rgba(0,0,0,.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    width: "90%",
    background: palette.surface.default,
    borderRadius: 12,
    padding: spacing(6),
    // animationName: "$opacity",
    // animationDuration: "400ms",
    // animationTimingFunction: "linear",
    // animationIterationCount: "forwards",
  },
  "@keyframes opacity": {
    from: { opacity: 0, filter: "blur(2px)" },
    to: { opacity: 1, filter: "blur(0px)" },
  },
}));
