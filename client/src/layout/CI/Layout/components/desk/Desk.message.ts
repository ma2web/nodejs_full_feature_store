import { defineMessages } from "react-intl";

const scope = "panel.desk";

const MyDeskMessages = defineMessages({
  products: {
    id: `${scope}.products`,
    defaultMessage: "Products",
  },
  categories: {
    id: `${scope}.categories`,
    defaultMessage: "Categories",
  },
  orders: {
    id: `${scope}.orders`,
    defaultMessage: "Orders",
  },
});

export default MyDeskMessages;
