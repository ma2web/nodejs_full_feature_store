// import { Context } from 'providers/LanguageProvider'
import React, { FC, useContext } from "react";
import useAuthLayoutStyle from "./useAuthLayoutStyle";
import LanguageSelector from "layout/CI/LanguageSelector";
import { useRouter } from "next/router";
import { Grid, Hidden, useTheme } from "@material-ui/core";
import { useIntl } from "react-intl";
import AuthProviderMessages from "./AuthLayout.messages";

export interface IAuthProviderProps {
  authBG?: string;
}

const AuthLayout: FC<IAuthProviderProps> = ({ children, authBG }) => {
  const { pathname, push } = useRouter();

  const classes = useAuthLayoutStyle();
  const theme = useTheme();
  const { formatMessage } = useIntl();

  return (
    <Grid container className={classes.container}>
      <Grid container className={classes.container2}>
        <Hidden mdDown>
          <Grid
            item
            xs={5}
            className={classes.picture}
            style={
              pathname.includes("otp")
                ? {
                    background: `url(${authBG}) no-repeat center right`,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    backgroundSize: "cover",
                  }
                : pathname.includes("recoverPassword")
                ? {
                    background: `url(${authBG}) no-repeat center right`,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    backgroundSize: "cover",
                  }
                : pathname.includes("password")
                ? {
                    background: `url(${authBG}) no-repeat center right`,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    backgroundSize: "cover",
                  }
                : {
                    background: `url(${authBG}) no-repeat center right`,
                    backgroundSize: "cover",
                    backgroundPositionX: theme.direction === "rtl" ? 0 : -7,
                  }
            }
          >
            <div className={classes.title1}>
              {formatMessage(AuthProviderMessages.signInMessage1)}
            </div>
            <div className={classes.title2}>
              {formatMessage(AuthProviderMessages.signInMessage2)}
            </div>
          </Grid>
        </Hidden>
        <Grid item xs={12} md={7}>
          <Grid
            container
            direction="column"
            alignItems="center"
            justify="center"
            style={{ height: "100%" }}
          >
            <Grid item xs={7}>
              <Grid container spacing={2}>
                <Grid
                  item
                  xs={5}
                  style={{
                    position: "absolute",
                    top: 10,
                    right: theme.direction === "ltr" ? 10 : "auto",
                    left: theme.direction === "rtl" ? 10 : "auto",
                    width: 200,
                  }}
                >
                  <LanguageSelector />
                </Grid>

                {children}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AuthLayout;
