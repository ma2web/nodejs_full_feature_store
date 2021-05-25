import { defineMessages } from "react-intl";

const scope = "panel.auth.SignUpPageM";

const SignUpPageMessages = defineMessages({
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
    id: `${scope}.emailWay`,
    defaultMessage: "Use Email Address Insted",
  },
  allready: {
    id: `${scope}.allready`,
    defaultMessage: "Already Have Account?",
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
    defaultMessage: "Hurry up! they need you",
  },
  signIn: {
    id: `${scope}.signIn`,
    defaultMessage: " Sign In",
  },
});
export default SignUpPageMessages;
