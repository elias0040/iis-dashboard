import express from "express";
import http from "http";
import * as socketio from "socket.io";

const port = 4001;

const app = express();
const server = new socketio.Server({
  cors: {
    origin: "*",
  },
});

let timeChange;
server.on("connection", (socket) => {
  console.log("Client connected");
  if (timeChange) {
    clearInterval(timeChange);
  }
  timeChange = setInterval(() => {
    socket.emit("time", new Date().toISOString());
  }, 1000);

  socket.on("disconnect", () => {
    console.log("Client disconnected");
    clearInterval(timeChange);
  });
});

const httpServer = http.createServer(app);
httpServer.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
