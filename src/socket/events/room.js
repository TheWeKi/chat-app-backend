const room = (socket, io) => {

    socket.on("create-room", async (data) => {
        socket.join("123");
    });

    socket.on("connect-room", async (data) => {
        socket.to("123").emit(data);
    });
}

export default room;