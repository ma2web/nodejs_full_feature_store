import { ReactComponent as ArrowDown } from "assets/images/icons/Arrows/Big/Down.svg";
import { ReactComponent as ArrowUp } from "assets/images/icons/Arrows/Big/up.svg";
import { ReactComponent as CloseSvg } from "assets/images/icons/UI/Close.svg";
import { ReactComponent as ImageIcon } from "assets/images/icons/Content/Image.svg";
import { ReactComponent as AttachIcon } from "assets/images/icons/Content/Attachment.svg";
import GolButton from "components/GolButton";
import GolTextField from "components/GolTextField";
import { useSession } from "next-auth/client";
import React, { useEffect, useRef, useState } from "react";
import { useIntl } from "react-intl";
import { usePrivateChatStyle } from "./usePrivateChatStyle";
import MessangerMessages from "../Messanger.message";

const PrivateChat = ({
  selectedContact,
  setPrivate,
  messages,
  setMessages,
  socket,
}) => {
  const styles = usePrivateChatStyle();
  const { formatMessage } = useIntl();
  const [open, setOpen] = useState(true);
  const [message, setMessage] = useState("");
  const [unreadedMessages, setUnreadedMessages] = useState(0);
  const [orderId, setOrderId] = useState(selectedContact?._id);

  const msgRef = useRef(null);

  const sendMessage = async (e) => {
    e.preventDefault();
    const chatMessage = {
      fromUser: localStorage?.userId,
      toUser: "",
      body: message,
    };

    setMessages((prev) => [...prev, { ...chatMessage, dateTime: new Date() }]);

    setMessage("");
  };

  useEffect(() => {
    const scroll = msgRef.current.scrollHeight - msgRef.current.clientHeight;
    if (messages && messages[messages.length - 1]?.fromUser) {
      console.log("scrollHeight: ", msgRef.current.scrollHeight);
      console.log("scrollTop: ", msgRef.current.scrollTop);
      console.log(msgRef.current.scrollHeight - msgRef.current.scrollTop);
      if (
        msgRef.current.scrollTop &&
        msgRef.current.scrollHeight - msgRef.current.scrollTop > 505
      ) {
        setUnreadedMessages((prev) => (prev += 1));
      } else {
        msgRef.current.scrollTo(0, scroll);
      }
    } else {
      msgRef.current.scrollTo(0, scroll);
    }
  }, [messages]);

  return (
    <div
      className={styles.root}
      style={open ? { bottom: 0 } : { bottom: -519 }}
    >
      <div className={styles.header}>
        <div>{`${
          selectedContact?.customer?.firstName
            ? selectedContact?.customer?.firstName
            : "No Name"
        } ${
          selectedContact?.customer?.lastName
            ? selectedContact?.customer?.lastName
            : ""
        }`}</div>
        <div className={styles.spaceBetween}>
          <div className={styles.toggle} onClick={() => setOpen(!open)}>
            {open ? (
              <ArrowDown className={styles.sendSvg} />
            ) : (
              <ArrowUp className={styles.sendSvg} />
            )}
          </div>
          <div style={{ cursor: "pointer" }}>
            <CloseSvg onClick={() => setPrivate(false)} />
          </div>
        </div>
      </div>

      <div className={styles.body} ref={msgRef}>
        {selectedContact ? (
          <div className={styles.messages}>
            {messages.map((item) => (
              <div className={styles.message}>
                <div
                  className={
                    item?.fromUser === localStorage?.userId
                      ? styles.spaceBetweenMe
                      : styles.spaceBetween
                  }
                >
                  <div className={styles.avatar}></div>
                  <div className={styles.date}>
                    {new Date(item?.dateTime).toLocaleTimeString()}
                  </div>
                </div>
                <div className={styles.bottomMe}>{item?.body}</div>
              </div>
            ))}
          </div>
        ) : (
          <>{formatMessage(MessangerMessages.noMessage)}</>
        )}
      </div>

      <div className={styles.sendMessage}>
        {unreadedMessages ? (
          <div
            className={styles.unReadedMessages}
            onClick={() => {
              const scroll =
                msgRef.current.scrollHeight - msgRef.current.clientHeight;
              msgRef.current.scrollTo(0, scroll);
              setUnreadedMessages(0);
            }}
          >
            {unreadedMessages}
          </div>
        ) : null}
        <form onSubmit={sendMessage}>
          <div className={styles.sendMessageInput}>
            <GolTextField
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={styles.searchInput}
              placeholder={formatMessage(MessangerMessages.writeMessage)}
            />
          </div>
          <div className={styles.sendMessageTools}>
            <div className={styles.attachIcon}>
              <div>
                <AttachIcon />
              </div>
              <div>
                <ImageIcon />
              </div>
            </div>
            <GolButton type="submit" color="primary" variant="contained">
              {formatMessage(MessangerMessages.send)}
            </GolButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PrivateChat;
