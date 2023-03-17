import app from '../server/app.js';
import { Server } from 'socket.io';
import http from 'http';
const httpServer = http.createServer(app);
const io = new Server(httpServer);

let activeUsers = [];

io.on("connection", (socket) => {
    socket.on("new-user-add", (newUserId) => {
        if (!activeUsers.some((user) => user.userId === newUserId)) {
            activeUsers.push({ userId: newUserId, socketId: socket.id });
        }
        io.emit("get-users", activeUsers);
    });

    socket.on("disconnect", () => {
        activeUsers = activeUsers.filter((user) => user.socketId !== socket.id);
        io.emit("get-users", activeUsers);
    });

    socket.on("send-message", (data) => {
        const { receiverId } = data;
        const user = activeUsers.find((user) => user.userId === receiverId);
        if (user) {
            io.to(user.socketId).emit("receive-message", data);
        }
    });
});

httpServer.listen(8800, () => {
    console.log('Server running on port 8800');
});
