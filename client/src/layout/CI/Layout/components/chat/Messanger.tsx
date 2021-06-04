import { ReactComponent as ArrowDown } from "assets/images/icons/Arrows/Big/Down.svg";
import { ReactComponent as ArrowUp } from "assets/images/icons/Arrows/Big/up.svg";
import { ReactComponent as SendSvg } from "assets/images/icons/Commiunication/Send.svg";
import { ReactComponent as SearchSvg } from "assets/images/icons/UI/Search.svg";
import GolTextField from "components/GolTextField";
import React, { useState, useEffect } from "react";
import { useIntl } from "react-intl";
import MessangerMessages from "./Messanger.message";
import PrivateChat from "./PrivateChat";
import { useMessangerStyle } from "./useMessangerStyle";
import { socket } from "utils/socket";
import axios from "axios";
import { api } from "domains/api";

const Messanger = ({ openChat, setOpenChat }) => {
  const styles = useMessangerStyle();
  const { formatMessage } = useIntl();
  const [privateMessage, setPrivate] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);
  const [messages, setMessages] = useState(null);
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([]);
  const [counter, setCounter] = useState([]);

  useEffect(() => {
    axios
      .get(`${api}/api/order`, {
        headers: {
          "x-auth-token": localStorage?.token,
        },
      })
      .then((res) => setOrders(res?.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (selectedContact?._id) {
      setLoading(true);

      socket.emit("join", { order: selectedContact?._id });
      axios
        .get(`${api}/api/messages/${selectedContact?._id}`, {
          headers: {
            "x-auth-token": localStorage?.token,
          },
        })
        .then((res) => {
          setLoading(false);

          setMessages(res?.data?.messages);
        })
        .catch((err) => console.log(err));
    }
  }, [selectedContact]);

  useEffect(() => {
    socket.on("receiveMessage", (data) => {
      console.log(
        "selectedContact, data ~ selectedContact, data",
        selectedContact?._id,
        data?.order
      );
      if (selectedContact?._id == data?.order) {
        setMessages((prev) => [...prev, data]);
      }
    });

    socket.on("newConversation", (data) => {
      if (selectedContact?._id !== data?.order) {
        setCounter((prev) => [...prev, data?._id]);
      }
    });
  }, [socket]);

  return (
    <div>
      {privateMessage && (
        <PrivateChat
          {...{
            selectedContact,
            setPrivate,
            messages,
            setMessages,
            socket,
            loading,
          }}
        />
      )}
      <div
        className={styles.root}
        style={openChat ? { bottom: 0 } : { bottom: -372 }}
      >
        <div className={styles.header} onClick={() => setOpenChat(!openChat)}>
          <div>{formatMessage(MessangerMessages.messaging)}</div>
          <div className={styles.spaceBetween}>
            <div>
              <SendSvg className={styles.sendSvg} />
            </div>
            <div
              className={styles.toggle}
              onClick={() => setOpenChat(!openChat)}
            >
              {openChat ? <ArrowDown /> : <ArrowUp />}
            </div>
          </div>
        </div>

        <div className={styles.body}>
          <div className={styles.search}>
            <div className={styles.messageSearch}>
              <GolTextField
                className={styles.searchInput}
                label={
                  <span className={styles.textFieldLabel}>
                    <SearchSvg />
                    <span>Search</span>
                  </span>
                }
              />
            </div>

            {orders?.length ? (
              <div className={styles.messages}>
                {orders?.map((item: any) => {
                  return (
                    <div
                      className={styles.message}
                      onClick={() => {
                        setSelectedContact(item);
                        setPrivate(true);
                        let newCounter = counter?.filter(
                          (el) => el !== item?._id
                        );
                        setCounter(newCounter);
                      }}
                      key={item?._id}
                    >
                      <div className={styles.flex}>
                        <div className={styles.avatar}></div>
                        <div className={styles.content}>
                          <div className={styles.name}>{`${
                            item?.customer?.firstName
                              ? item?.customer?.firstName
                              : "No Name"
                          } ${
                            item?.customer?.lastName
                              ? item?.customer?.lastName
                              : ""
                          }`}</div>
                          <div className={styles.text}>
                            {item?.customer?.email}
                          </div>
                        </div>
                        {selectedContact?._id !== item?._id &&
                          counter.includes(item?._id) && (
                            <div className={styles.counter}>
                              {counter?.filter((el) => el === item?._id).length}
                            </div>
                          )}
                      </div>
                      <div className={styles.date}>
                        {new Date(item?.createdAt).toLocaleDateString()}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              "No Orders"
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messanger;
