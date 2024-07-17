import app from './app.js';
import * as http from "node:http";
import connectSocket from "./socket/connectSocket.js";
import connectDatabase from "./database/connectDatabase.js";

const PORT = process.env.PORT || 8080;

function root() {
    const httpServer = http.createServer(app);

    connectSocket(httpServer);

    httpServer.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })
}

connectDatabase()
    .then(() => {
        root();
    })
    .catch((err) => {
        console.error(err);
        process.exit(1);
    })