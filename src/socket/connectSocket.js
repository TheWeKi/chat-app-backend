import { Server } from "socket.io";

const connectSocket = ( server ) => {
    const io = new Server(server, {
        cors: {
            origin: "*",
            methods: ["*"],
        }
    })

    io.on("connection", (socket) => {
        console.log(`Socket connected: ${socket.id}`);

        // custom emit events
        socket.on("chat", (data) => {
            console.log(data);
            io.emit("chat", data);
        });

        socket.on("disconnect", () => {
            console.log(`Socket disconnected: ${socket.id}`);
        });
    });
}

export default connectSocket;