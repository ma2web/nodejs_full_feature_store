import socketIOClient from "socket.io-client";
import { api } from "../domains/api";

let socket;

socket = socketIOClient(`${api}`, {
  auth: {
    token: typeof window !== "undefined" && localStorage.token,
  },
  reconnection: true,
});

export { socket };
