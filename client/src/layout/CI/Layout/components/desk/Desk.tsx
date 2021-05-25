import React, { FC, useState, useEffect } from "react";
import { useIntl } from "react-intl";
import { useDeskStyles } from "./useDeskStyles";
import DeskMessages from "./Desk.message";
import Link from "next/link";
import LanguageSelector from "layout/CI/LanguageSelector";

export const Desk = () => {
  const classes = useDeskStyles();
  const { formatMessage } = useIntl();

  const tabs = [
    {
      name: `${formatMessage(DeskMessages.categories)}`,
      route: "/categories",
    },
    {
      name: `${formatMessage(DeskMessages.products)}`,
      route: "/products",
    },
    {
      name: `${formatMessage(DeskMessages.orders)}`,
      route: "/orders",
    },
  ];

  return (
    <div className={classes.root}>
      <div className={classes.tabs}>
        {tabs?.map((tab) => {
          return (
            <Link href={tab?.route}>
              <div className={classes.tab}>{tab?.name}</div>
            </Link>
          );
        })}
      </div>
      <div>
        <LanguageSelector />
      </div>
    </div>
  );
};

export default Desk;
