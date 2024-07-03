import express from 'express';
import cors from 'cors';
import http from 'http';
import { Server } from 'socket.io'; // Import Server class for clarity

const app = express();
app.use(cors())
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*',
        allowedHeaders: '*',
    }
}); // Create a new Socket.IO instance

const PORT = process.env.PORT || 8080;

// Serve the index.html file for the web interface
app.get('/', (req, res) => {
    res.json({
        status: true
    });
});

// Handle socket connections
io.on('connection', (socket) => {
    console.log('A user connected');

    // Handle socket disconnection
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

// Start the server
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});