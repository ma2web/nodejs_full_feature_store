import React, { useContext, useEffect, useState } from "react";
import useOrdersStyles from "./useOrdersStyles";
import OrdersMessages from "./Orders.message";
import { useIntl } from "react-intl";
import { api } from "domains/api";
import axios from "axios";
import Table from "components/Table";
import GolModal from "components/GolModal/GolModal";
import GolButton from "components/GolButton/GolButton";
import ChangeStatus from "./components/ChangeStatus";
import { socket } from "utils/socket";

const Header = () => (
  <tr>
    <th>نام مشتری</th>
    <th>شماره مشتری</th>
    <th>تعداد اقلام</th>
    <th>وضعیت سفارش</th>
  </tr>
);

const Row = ({ data, setOrder, setShowDetails, classes }) => (
  <>
    {data?.map((el) => (
      <tr
        key={el?._id}
        onClick={() => {
          setShowDetails(true);
          setOrder(el);
        }}
      >
        <td>{el?.customer?.email}</td>
        <td>{el?.customer?.phoneNumber}</td>
        <td>{el?.items?.length}</td>
        <td>
          <span
            className={
              el?.status === "pending"
                ? `${classes.status} ${classes.pending}`
                : el?.status === "proccessing"
                ? `${classes.status} ${classes.proccessing}`
                : el?.status === "shipped"
                ? `${classes.status} ${classes.shipped}`
                : el?.status === "delivered"
                ? `${classes.status} ${classes.delivered}`
                : `${classes.status}`
            }
          >
            {el?.status}
          </span>
        </td>
      </tr>
    ))}
  </>
);

const Orders = () => {
  const { formatMessage } = useIntl();
  const [orders, setOrders] = useState([]);
  const [order, setOrder] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  const [changeStatus, setChangeStatus] = useState(false);
  const classes = useOrdersStyles({ changeStatus });
  console.log(socket);

  useEffect(() => {
    axios
      .get(`${api}/api/order`, {
        headers: {
          "x-auth-token": localStorage.token,
        },
      })
      .then((res) => {
        setOrders(res?.data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(order);

  return (
    <div>
      <h1>{formatMessage(OrdersMessages.orders)}</h1>
      <br />
      <div>
        {orders?.length ? (
          <Table
            header={<Header />}
            row={
              <Row
                data={orders}
                setOrder={setOrder}
                setShowDetails={setShowDetails}
                classes={classes}
              />
            }
          />
        ) : (
          "سفارشی یافت نشد"
        )}
      </div>

      {showDetails ? (
        <GolModal>
          <h2>جزئیات سفارش</h2>
          <br />
          <div>
            <h4>وضعیت</h4>
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
                  <span onClick={() => setChangeStatus(true)}>تغییر وضعیت</span>
                </>
              )}
            </div>
          </div>
          <div>
            <h4>اطلاعات مشتری</h4>
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
            <h4>سفارشات</h4>
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
              onClick={() => setShowDetails(false)}
            >
              بستن پنجره
            </GolButton>
          </div>
        </GolModal>
      ) : null}
    </div>
  );
};

export default Orders;
