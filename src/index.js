import app from './app.js';
import * as http from "node:http";
import connectSocket from "./socket/connectSocket.js";

const PORT = process.env.PORT || 8080;

const httpServer = http.createServer(app);

connectSocket(httpServer);

httpServer.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
