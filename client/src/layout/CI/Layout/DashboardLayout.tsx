import { CssBaseline, Typography, useTheme } from "@material-ui/core";
import { ReactComponent as LeftArrowIcon } from "assets/images/icons/Arrows/small/left.svg";
import { ReactComponent as RightArrowIcon } from "assets/images/icons/Arrows/small/right.svg";
import { useRouter } from "next/router";
import React, { FC, useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import Desk from "./components/desk";
import Favorites from "./components/sidebar/components/favarites";
import Notifications from "./components/sidebar/components/notifications";
import SideBar from "./components/sidebar";
import MainMenu from "./components/sidebar/components/menu";
import { useDashboardStyle } from "./useDashboardStyle";
import DashboardMessages from "./Dashboard.message";
import { useIntl } from "react-intl";
import axios from "axios";
import { api } from "domains/api";

export const DashboardLayout: FC = ({ children }) => {
  const classes = useDashboardStyle();
  const [openSystemMenu, setOpenSystemMenu] = useState(false);
  const [openNotifications, setOpenNotifications] = useState(false);
  const [openFavorites, setOpenFavorites] = useState(false);
  const [user, setUser] = useState(false);
  const [openDesk, setOpenDesk] = useState(true);
  const theme = useTheme();
  const { formatMessage } = useIntl();
  const { push } = useRouter();

  React.useEffect(() => {
    axios
      .get(`${api}/api/user/me`, {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.token,
        },
      })
      .then((res) => {
        if (res?.status === 200) {
          setUser(true);
        }
      })
      .catch((err) => push("/signIn"));
  }, [api]);

  useHotkeys("shift + .", () => {
    setOpenSystemMenu(false);
    setOpenNotifications(false);
    setOpenFavorites(false);
    setOpenDesk((prev) => !prev);
  });

  return (
    <>
      {user && (
        <>
          <CssBaseline />
          <div className={classes.root}>
            <div>
              <SideBar
                {...{
                  openSystemMenu,
                  setOpenSystemMenu,
                  openNotifications,
                  setOpenNotifications,
                  openDesk,
                  setOpenDesk,
                  openFavorites,
                  setOpenFavorites,
                }}
              />
            </div>
            <div
              className={classes.myDesk}
              style={openDesk ? { width: 226 } : { width: 67 }}
            >
              <div
                className={classes.right}
                style={openDesk ? { width: "80%" } : { width: "0%" }}
              >
                {openDesk && (
                  <div
                    className={
                      openDesk
                        ? classes.deskContentOpen
                        : classes.deskContentClose
                    }
                    style={{ filter: openSystemMenu ? "blur(1px)" : "blur(0)" }}
                  >
                    <Typography variant="h6">
                      {formatMessage(DashboardMessages.myDesk)}
                    </Typography>
                    <Desk />
                  </div>
                )}
              </div>
              <div className={classes.left} style={{ width: "20%" }}>
                <div
                  className={classes.arrowRightContainer}
                  onClick={() => setOpenDesk(!openDesk)}
                  style={
                    !openDesk
                      ? theme.direction === "rtl"
                        ? { left: -4 }
                        : { right: -4 }
                      : theme.direction === "rtl"
                      ? { left: 28 }
                      : { right: 28 }
                  }
                >
                  {openDesk ? <RightArrowIcon /> : <LeftArrowIcon />}
                </div>
              </div>
            </div>
            {openSystemMenu && <MainMenu />}
            {openNotifications && <Notifications />}
            {openFavorites && <Favorites />}
            <div
              className={classes.mainContent}
              style={
                openDesk
                  ? {
                      width: "calc(100vw - 318px)",
                      filter: openSystemMenu ? "blur(2px)" : "blur(0)",
                    }
                  : {
                      width: "calc(100vw - 157px)",
                      filter: openSystemMenu ? "blur(2px)" : "blur(0)",
                    }
              }
            >
              <div>{children}</div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

DashboardLayout.displayName = "DashboardLayout";
export default DashboardLayout;
