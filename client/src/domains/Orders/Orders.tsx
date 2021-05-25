import React from "react";
import useOrdersStyles from "./useOrdersStyles";
import OrdersMessages from "./Orders.message";
import { useIntl } from "react-intl";

const Orders = () => {
  const classes = useOrdersStyles();
  const { formatMessage } = useIntl();
  return (
    <div>
      <h1>{formatMessage(OrdersMessages.orders)}</h1>
    </div>
  );
};

export default Orders;
