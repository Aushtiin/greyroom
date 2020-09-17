const express = require("express");
const app = express();
const io = require("socket.io");
const http = require("http").Server(app);
const port = 2000;
const socket = io(http);

socket.on("connection", (socket) => {
  console.log("user connected");
});

socket.on("disconnect", () => {
  console.log("Disconnected");
});

http.listen(port, () => {
  console.log(`connected to port${port}`);
});

socket.on("chat message", function (msg) {
  console.log(`message: ${msg}`);
  //broadcast message to everyone in port:5000 except yourself.
  socket.broadcast.emit("received", { message: msg });
});
