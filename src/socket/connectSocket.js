import { Server } from "socket.io";
import socketHandlers from "./socketHandlers.js";
import { createAdapter } from "@socket.io/redis-adapter";
import { pub, sub } from "../redis/connectRedis.js";
import {authSocketMiddleware} from "./middlewares/auth.socket.middleware.js";

const socketServerOptions = {
    cors: {
        origin: "*",
    },
    adapter: createAdapter(pub, sub),
}

const connectSocket = ( server ) => {
    const io = new Server(server, socketServerOptions)

    sub.subscribe("redis");

    io.use(authSocketMiddleware);

    io.on("connection", (socket) => socketHandlers(socket, io));
}

export default connectSocket;