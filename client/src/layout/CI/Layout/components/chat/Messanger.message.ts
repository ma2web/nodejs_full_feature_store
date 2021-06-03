import { defineMessages } from "react-intl";

const scope = "panel.messanger";

const MessangerMessages = defineMessages({
  messaging: {
    id: `${scope}.messaging`,
    defaultMessage: "Messaging",
  },
  send: {
    id: `${scope}.send`,
    defaultMessage: "send",
  },
  noMessage: {
    id: `${scope}.noMessage`,
    defaultMessage: "no messages",
  },
  writeMessage: {
    id: `${scope}.writeMessage`,
    defaultMessage: "write message",
  },
});
export default MessangerMessages;
