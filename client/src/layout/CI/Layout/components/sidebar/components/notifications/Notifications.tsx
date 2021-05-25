import React, { FC, useState, useEffect } from "react";
import { useNotificationsStyles } from "./useNotificationsStyles";
import NotificationsMessages from "./Notifications.message";
import { useIntl } from "react-intl";

export const Notifications = () => {
  const classes = useNotificationsStyles();
  const { formatMessage } = useIntl();

  return (
    <div className={classes.root}>
      <h1>{formatMessage(NotificationsMessages.notifications)}</h1>
    </div>
  );
};

export default Notifications;
