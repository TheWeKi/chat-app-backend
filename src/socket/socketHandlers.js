import chat from "./events/chat.js";
import room from "./events/room.js";

const socketHandlers = async (socket, io) => {
    console.log(`Socket connected: ${socket.id}`);

    // custom emit events
    chat(socket, io);
    room(socket, io);

    socket.on("disconnect", () => {
        console.log(`Socket disconnected: ${socket.id}`);
    });
}

export default socketHandlers;