import React, { useEffect, useState } from "react";
import useOrdersStyles from "./useOrdersStyles";
import OrdersMessages from "./Orders.message";
import { useIntl } from "react-intl";
import { api } from "domains/api";
import axios from "axios";
import Table from "components/Table";
import GolModal from "components/GolModal/GolModal";
import GolButton from "components/GolButton/GolButton";
import ChangeStatus from "./components/ChangeStatus";

const Header = () => (
  <tr>
    <th>Customer Name</th>
    <th>Customer Phone</th>
    <th>Items</th>
    <th>Status</th>
  </tr>
);

const Row = ({ data, setOrder }) => (
  <>
    {data?.map((el) => (
      <tr key={el?._id} onClick={() => setOrder(el)}>
        <td>{el?.customer?.email}</td>
        <td>{el?.customer?.phoneNumber}</td>
        <td>{el?.items?.length}</td>
        <td>{el?.status}</td>
      </tr>
    ))}
  </>
);

const Orders = () => {
  const { formatMessage } = useIntl();

  const [orders, setOrders] = useState([]);
  const [order, setOrder] = useState(null);
  const [changeStatus, setChangeStatus] = useState(false);
  const classes = useOrdersStyles({ changeStatus });

  useEffect(() => {
    axios
      .get(`${api}/api/order`, {
        headers: {
          "x-auth-token": localStorage.token,
        },
      })
      .then((res) => setOrders(res?.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h1>{formatMessage(OrdersMessages.orders)}</h1>
      <br />
      <div>
        {orders?.length ? (
          <Table
            header={<Header />}
            row={<Row data={orders} setOrder={setOrder} />}
          />
        ) : (
          "No Orders"
        )}
      </div>

      {order?.customer?.firstName ? (
        <GolModal>
          <h2>Order details</h2>
          <br />
          <div>
            <h4>Status</h4>
            <div className={classes.data}>
              {changeStatus ? (
                <ChangeStatus
                  order={order}
                  setOrders={setOrders}
                  setOrder={setOrder}
                  status={order?.status}
                  setChangeStatus={setChangeStatus}
                />
              ) : (
                <>
                  <div>{order?.status}</div>
                  <span onClick={() => setChangeStatus(true)}>
                    change status
                  </span>
                </>
              )}
            </div>
          </div>
          <div>
            <h4>Customer</h4>
            <div className={classes.data}>
              <div>{order?.customer?.firstName}</div>
              <div>{order?.customer?.lastName}</div>
              <div>
                {order?.customer?.countryCode}
                {order?.customer?.phoneNumber}
              </div>
              <div>{order?.customer?.email}</div>
            </div>
          </div>
          <div>
            <h4>Items</h4>
            <div className={classes.data}>
              {order?.items?.map((el) => {
                let selectedSize = el?.size;
                let allSizes = el?.item?.sizes;
                let filterSize = allSizes.find(
                  (el) => el?._id === selectedSize
                );
                return (
                  <div key={el?._id} className={classes.items}>
                    <div>{el?.item?.name}</div>
                    <div>{filterSize?.size}</div>
                    <div>{filterSize?.price}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <br />
          <div>
            <GolButton
              color="primary"
              variant="contained"
              onClick={() => setOrder(null)}
            >
              close modal
            </GolButton>
          </div>
        </GolModal>
      ) : null}
    </div>
  );
};

export default Orders;
