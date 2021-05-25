import { Grid, Typography } from "@material-ui/core";
import GolModal from "components/GolModal";
import GolTextField from "components/GolTextField";
import React, { useEffect } from "react";
import { useMainMenuStyles } from "./useMainMenuStyles";
import { ReactComponent as SearchIcon } from "assets/images/icons/UI/Search.svg";
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
          <Typography variant="h4">سیستم مالی</Typography>
        </Grid>
        <Grid item xs={6}>
          <GolTextField
            className={classes.searchInput}
            label={
              <span className={classes.textFieldLabel}>
                <SearchIcon />
                <span>جستجو</span>
              </span>
            }
          />
        </Grid>
        <Grid xs={12} onKeyDown={onKeyDown} tabIndex={0}>
          <Grid container className={classes.menuItems} spacing={8}>
            {menuItem?.map((el) => {
              return (
                <Grid item xs={6}>
                  <Typography variant="h6">{el?.title}</Typography>
                  <ul>
                    {el?.items?.map((elem) => {
                      return (
                        <li>
                          <Typography variant="body2">{elem?.name}</Typography>
                        </li>
                      );
                    })}
                  </ul>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </GolModal>
  );
};

export default MainMenu;

const menuItem = [
  {
    title: "اطلاعات پایه",
    items: [
      {
        name: "معرفی پروژه",
        route: "/",
      },
      {
        name: "معرفی مراکز هزینه",
        route: "/",
      },
      {
        name: "سایر تفصیلی ها",
        route: "/",
      },
    ],
  },
  {
    title: "کدینگ حساب ها",
    items: [
      {
        name: "معرفی پروژه",
        route: "/",
      },
      {
        name: "معرفی مراکز هزینه",
        route: "/",
      },
      {
        name: "سایر تفصیلی ها",
        route: "/",
      },
    ],
  },
  {
    title: "اسناد",
    items: [
      {
        name: "صدور سند",
        route: "/",
      },
      {
        name: "بررسی اسناد",
        route: "/",
      },
      {
        name: "ریز اسناد",
        route: "/",
      },
    ],
  },
  {
    title: "گزارشات",
    items: [
      {
        name: "معرفی پروژه",
        route: "/",
      },
      {
        name: "معرفی مراکز هزینه",
        route: "/",
      },
      {
        name: "سایر تفصیلی ها",
        route: "/",
      },
    ],
  },
];
