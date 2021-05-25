import React, { FC, useState, useEffect } from "react";
import { useFavoritesStyles } from "./useFavoritesStyles";

export const Favorites = () => {
  const classes = useFavoritesStyles();

  return (
    <div className={classes.root}>
      <h1>علاقه مندی ها</h1>
    </div>
  );
};

export default Favorites;
