import { FC } from "react";
import Orders from "domains/Orders";

const OrdersPage: FC = () => {
  return <Orders />;
};

(OrdersPage as any).Layout = true;

export default OrdersPage;
