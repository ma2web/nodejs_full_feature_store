import React, { useState, useEffect } from "react";
import { useSideBarStyles } from "./useSideBarStyles";
import { ReactComponent as LogoIcon } from "assets/images/icons/Logo/Logo.svg";
import { ReactComponent as CardsIcon } from "assets/images/icons/UI/Cards.svg";
import { ReactComponent as MovementIcon } from "assets/images/icons/UI/Movement.svg";
import { ReactComponent as StarIcon } from "assets/images/icons/UI/Star.svg";
import { ReactComponent as NotificationIcon } from "assets/images/icons/Alert/Notification.svg";
import { ReactComponent as ChatIcon } from "assets/images/icons/Commiunication/Chat.svg";

export const SideBar = ({
  setOpenSystemMenu,
  openSystemMenu,
  openNotifications,
  setOpenNotifications,
  openDesk,
  setOpenDesk,
  openFavorites,
  setOpenFavorites,
}) => {
  const classes = useSideBarStyles();
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (selected !== 3) setOpenSystemMenu(false);
    if (selected !== 1) setOpenNotifications(false);
    if (selected !== 4) setOpenFavorites(false);
  }, [selected]);

  return (
    <div className={classes.root}>
      <div className={classes.mainMenu}>
        <div className={classes.logo}>
          <LogoIcon />
        </div>

        <div className={classes.menuItems}>
          {[...Array(5)].map((el, i) => (
            <div className={classes.menuItem} onClick={() => setSelected(i)}>
              {i === 0 ? (
                <div
                  className={selected === i ? classes.active : classes.deActive}
                  onClick={() => setOpenDesk(!openDesk)}
                >
                  <CardsIcon />
                </div>
              ) : i === 1 ? (
                <div
                  className={selected === i ? classes.active : classes.deActive}
                  onClick={() => setOpenNotifications(!openNotifications)}
                >
                  <NotificationIcon />
                </div>
              ) : i === 2 ? (
                <div
                  className={selected === i ? classes.active : classes.deActive}
                >
                  <ChatIcon />
                </div>
              ) : i === 3 ? (
                <div
                  className={selected === i ? classes.active : classes.deActive}
                  onClick={() => setOpenSystemMenu(!openSystemMenu)}
                >
                  <MovementIcon />
                </div>
              ) : i === 4 ? (
                <div
                  className={selected === i ? classes.active : classes.deActive}
                  onClick={() => setOpenFavorites(!openFavorites)}
                >
                  <StarIcon />
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
