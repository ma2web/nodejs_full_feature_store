import { Grid, Typography } from "@material-ui/core";
import GolModal from "components/GolModal";
import React from "react";
import { useMainMenuStyles } from "./useMainMenuStyles";
import { useHotkeys } from "react-hotkeys-hook";

export const MainMenu = () => {
  const classes = useMainMenuStyles();

  useHotkeys("s", () => {
    alert("hot key tapped");
  });

  const onKeyDown = (e) => {
    var english = /^[A-Za-z0-9]*$/;
  };

  return (
    <GolModal>
      <Grid container id="x">
        <Grid item xs={6}>
          <Typography variant="h4">Main Menu</Typography>
        </Grid>
      </Grid>
    </GolModal>
  );
};

export default MainMenu;
