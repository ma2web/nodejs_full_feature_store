import React, { useState } from "react";
import useSignUpPageStyle from "./useSignUpPageStyle";
import { Grid, Typography, useTheme } from "@material-ui/core";
import { useIntl } from "react-intl";
import SignUpPageMessages from "./SignUpPage.messages";
import GolButton from "components/GolButton/GolButton";
import { ReactComponent as ProfileIcon } from "assets/images/icons/Users/Profile.svg";
import { ReactComponent as EmailIcon } from "assets/images/icons/Commiunication/Email.svg";
import { ReactComponent as PhoneIcon } from "assets/images/icons/Commiunication/Phone.svg";
import GoogleSvg from "assets/images/icons/Logo/Google.png";
import GolTextField from "components/GolTextField";
import { useRouter } from "next/router";
import AuthLayout from "../AuthLayout";
import signUpJpg from "assets/images/pictures/signUp.jpg";

const SignUpPage = () => {
  const classes = useSignUpPageStyle();
  const { push } = useRouter();
  const { formatMessage } = useIntl();
  const theme = useTheme();
  const [signUpData, setSignUpData] = useState({
    fullName: "",
    userName: "",
    phone: "",
  });
  const [phoneWay, setPhoneWay] = React.useState(false);

  const onChange = (e) => {
    console.log(e.target.value);
    setSignUpData({
      ...signUpData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <AuthLayout authBG={signUpJpg}>
      <Grid item xs={12}>
        <div className={classes.subTitle}>
          <Typography variant="caption">
            {formatMessage(SignUpPageMessages.subTitle)}
          </Typography>
        </div>
        <div className={classes.title}>
          <Typography variant="h3">
            {formatMessage(SignUpPageMessages.title)}
          </Typography>
        </div>
        {phoneWay ? (
          <>
            <div className={classes.userNameWrapper}>
              <GolTextField
                label={
                  <span className={classes.textFieldLabel}>
                    <ProfileIcon />
                    <span>
                      {formatMessage(SignUpPageMessages.fullNameInput)}
                    </span>
                  </span>
                }
              />
            </div>
            <div className={classes.passwordWrapper}>
              <GolTextField
                value={signUpData?.phone}
                onChange={onChange}
                name="phone"
                label={
                  <span className={classes.textFieldLabel}>
                    <PhoneIcon />
                    <span>{formatMessage(SignUpPageMessages.phoneInput)}</span>
                  </span>
                }
              />
            </div>
          </>
        ) : (
          <>
            <div className={classes.userNameWrapper}>
              <GolTextField
                value={signUpData?.fullName}
                onChange={onChange}
                name="fullName"
                label={
                  <span className={classes.textFieldLabel}>
                    <ProfileIcon />
                    <span>
                      {formatMessage(SignUpPageMessages.fullNameInput)}
                    </span>
                  </span>
                }
              />
            </div>
            <div className={classes.passwordWrapper}>
              <GolTextField
                value={signUpData?.userName}
                onChange={onChange}
                name="userName"
                label={
                  <span className={classes.textFieldLabel}>
                    <EmailIcon />
                    <span>{formatMessage(SignUpPageMessages.emailInput)}</span>
                  </span>
                }
              />
            </div>
          </>
        )}
      </Grid>
      <Grid item xs={12}>
        <GolButton onClick={onSubmit} fullWidth style={{ width: "100%" }}>
          {formatMessage(SignUpPageMessages.signUp)}
        </GolButton>
      </Grid>
      <Grid item xs={12} className={classes.noHaveAccount}>
        <div>
          <Typography
            variant="subtitle2"
            component="span"
            className={classes.noHaveAccount}
          >
            {formatMessage(SignUpPageMessages.allready)}
            <span
              style={{
                color: theme.palette.primary[700],
                cursor: "pointer",
              }}
              onClick={() => push("/signIn")}
            >
              {formatMessage(SignUpPageMessages.signIn)}
            </span>
          </Typography>
        </div>
      </Grid>
    </AuthLayout>
  );
};

export default SignUpPage;
