import { defineMessages } from "react-intl";

const scope = "panel.auth.SingInPage";

const SingIn = defineMessages({
  subTitle: {
    id: `${scope}.subTitle`,
    defaultMessage: "Let the World change",
  },
  title: {
    id: `${scope}.title`,
    defaultMessage: "Welcome Back",
  },
  email: {
    id: `${scope}.email`,
    defaultMessage: "EMAIL",
  },
  phone: {
    id: `${scope}.phone`,
    defaultMessage: "PHONE",
  },
  emailInput: {
    id: `${scope}.emailInput`,
    defaultMessage: "Your Email Address",
  },
  phoneInput: {
    id: `${scope}.phoneInput`,
    defaultMessage: "Your Phone Number",
  },
  passInput: {
    id: `${scope}.passInput`,
    defaultMessage: "Password",
  },
  forgetPassLink: {
    id: `${scope}.forgetPassLink`,
    defaultMessage: "Forget Password?",
  },
  notHaveAccount: {
    id: `${scope}.notHaveAccount`,
    defaultMessage: "I Don’t Have Account?",
  },
  signUp: {
    id: `${scope}.signUp`,
    defaultMessage: " Sign Up",
  },
  signIn: {
    id: `${scope}.signIn`,
    defaultMessage: "SIGN IN",
  },
  signInWithGoogle: {
    id: `${scope}.signInWithGoogle`,
    defaultMessage: "SIGN IN WITH GOOGLE",
  },
  signInMessage1: {
    id: `${scope}.signInMessage1`,
    defaultMessage: "Market App",
  },
  signInMessage2: {
    id: `${scope}.signInMessage2`,
    defaultMessage: "Hurry up! they need you",
  },
});
export default SingIn;
