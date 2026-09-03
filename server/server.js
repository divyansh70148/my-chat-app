const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

const app = express();

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  io.emit("online_users", io.engine.clientsCount);

  socket.on("send_message", (message) => {
    io.emit("receive_message", message);
  });

  socket.on("delete_message", (messageId) => {
    io.emit("message_deleted", messageId);
  });

  socket.on("typing", (username) => {
    socket.broadcast.emit("user_typing", username);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);

    io.emit("online_users", io.engine.clientsCount);
  });
});



server.listen(5000, () => {
  console.log("Server running on port 5000");
});