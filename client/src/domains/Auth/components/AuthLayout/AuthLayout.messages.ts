import { defineMessages } from "react-intl";

const scope = "panel.auth.Auth";

const AuthProviderMessages = defineMessages({
  subTitle: {
    id: `${scope}.subTitle`,
    defaultMessage: "Let the World change",
  },
  title: {
    id: `${scope}.title`,
    defaultMessage: "Sign Up",
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
    defaultMessage: "Email",
  },
  fullNameInput: {
    id: `${scope}.fullNameInput`,
    defaultMessage: "Full Name",
  },
  phoneInput: {
    id: `${scope}.phoneInput`,
    defaultMessage: "Phone Number",
  },
  passInput: {
    id: `${scope}.passInput`,
    defaultMessage: "Password",
  },
  phoneWay: {
    id: `${scope}.phoneWay`,
    defaultMessage: "Use My Phone Number Insted",
  },
  emailWay: {
    id: `${scope}.phoneWay`,
    defaultMessage: "Use Email Address Insted",
  },
  signUp: {
    id: `${scope}.signUp`,
    defaultMessage: " Sign Up",
  },
  signInWithGoogle: {
    id: `${scope}.signInWithGoogle`,
    defaultMessage: "SIGN UP WITH GOOGLE",
  },
  signInMessage1: {
    id: `${scope}.signInMessage1`,
    defaultMessage: "Market App",
  },
  signInMessage2: {
    id: `${scope}.signInMessage2`,
    defaultMessage: "Safe and Secure",
  },
  signIn: {
    id: `${scope}.signIn`,
    defaultMessage: " Sign In",
  },
});
export default AuthProviderMessages;
