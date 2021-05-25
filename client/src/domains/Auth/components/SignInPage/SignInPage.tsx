import React from "react";
import useSignInPageStyle from "./useSignInPageStyle";
import { Grid, Typography, useTheme } from "@material-ui/core";
import { useIntl } from "react-intl";
import SignInPageMessages from "./SignInPage.messages";
import GolButton from "components/GolButton";
import GolTextField from "components/GolTextField";
import { ReactComponent as EmailIcon } from "assets/images/icons/Commiunication/Email.svg";
import { ReactComponent as LockIcon } from "assets/images/icons/Security/Lock.svg";
import { useRouter } from "next/router";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import IconButton from "@material-ui/core/IconButton";
import { ReactComponent as VisibleIcon } from "assets/images/icons/Security/visible.svg";
import { ReactComponent as InvisibleIcon } from "assets/images/icons/Security/invisible.svg";
import BabyPng from "assets/images/pictures/baby.jpg";
import GoogleSvg from "assets/images/icons/Logo/Google.png";
import AuthLayout from "domains/Auth/components/AuthLayout";
import axios from "axios";
import { api } from "domains/api";

const SignInPage = () => {
  const classes = useSignInPageStyle();

  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const [loginData, setLoginData] = React.useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = React.useState(false);
  const { formatMessage } = useIntl();

  const { locale, asPath, push } = useRouter();

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const theme = useTheme();

  const onSubmit = () => {
    let { email, password } = loginData;
    axios
      .post(`${api}/api/user/login`, {
        email,
        password,
      })
      .then((res) => {
        let { data, status } = res;
        if (status === 200) {
          let { token, _id } = data;

          localStorage.token = token;
          localStorage.userId = _id;
          push("/");
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  return (
    <AuthLayout authBG={BabyPng}>
      <Grid item xs={12}>
        <div className={classes.subTitle}>
          <Typography variant="caption">
            {formatMessage(SignInPageMessages.subTitle)}
          </Typography>
        </div>
        <div className={classes.title}>
          <Typography variant="h3">
            {formatMessage(SignInPageMessages.title)}
          </Typography>
        </div>
        <div className={classes.userNameWrapper}>
          <GolTextField
            label={
              <span className={classes.textFieldLabel}>
                <EmailIcon />
                <span>{formatMessage(SignInPageMessages.emailInput)}</span>
              </span>
            }
            value={loginData?.email}
            onChange={(e) =>
              setLoginData({ ...loginData, email: e.target.value })
            }
          />
        </div>
        <div className={classes.passwordWrapper}>
          <FormControl variant="outlined">
            <InputLabel
              className={classes.passLabel}
              htmlFor="outlined-adornment-password"
            >
              <span className={classes.textFieldLabel}>
                <LockIcon />
                <span>{formatMessage(SignInPageMessages.passInput)}</span>
              </span>
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={loginData?.password}
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibleIcon /> : <InvisibleIcon />}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={70}
            />
          </FormControl>
        </div>
      </Grid>
      <Grid item xs={12}>
        <GolButton
          disabled={loading ? true : false}
          onClick={onSubmit}
          fullWidth
          style={{ width: "100%" }}
        >
          {loading ? "loading..." : formatMessage(SignInPageMessages.signIn)}
        </GolButton>
      </Grid>
      <Grid item xs={12} className={classes.noHaveAccount}>
        <div>
          <Typography
            onClick={() => push("/signUp")}
            variant="subtitle2"
            component="a"
            className={classes.noHaveAccount}
          >
            {formatMessage(SignInPageMessages.notHaveAccount)}
            <span
              style={{
                color: theme.palette.primary[700],
                cursor: "pointer",
              }}
              onClick={() => push("/signUp")}
            >
              {formatMessage(SignInPageMessages.signUp)}
            </span>
          </Typography>
        </div>
      </Grid>
    </AuthLayout>
  );
};

export default SignInPage;
