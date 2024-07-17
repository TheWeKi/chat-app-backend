import {pub, sub} from "../../redis/connectRedis.js";

const chat = (socket, io) => {

    socket.on("send-message", async (data) => {
        console.log(data);

        const payload = {
            id: socket.id,
            user: socket.user.name,
            time: new Date().toISOString(),
            data: data
        }

        await pub.publish("redis", JSON.stringify(payload));

        // io.emit("receive-message", data);
    });

    sub.on("message", (channel, message) => {
        const payload = JSON.parse(message);

        if( channel !== "redis" ) {
            console.log("Channel Invalid");
            return;
        }

        if( payload.id === socket.id ) {
            return;
        }

        socket.emit("receive-message", payload);
    });
}

export default chat;