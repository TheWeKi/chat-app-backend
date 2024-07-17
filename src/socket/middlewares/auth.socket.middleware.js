import {nanoid} from "nanoid";

const authSocketMiddleware = (socket, next) => {
    const { token } = socket.handshake.query;
    if( token === "token" ) {
        const name = nanoid(4);
        socket.user = { name }
        return next();
    }
    socket.user = { name: "guest" }
    return next();
}

export { authSocketMiddleware };