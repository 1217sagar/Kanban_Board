const express = require("express");
const app = express();
const http = require('http');
const server = http.createServer(app);
const {Server} = require("socket.io");
const io = new Server(server);
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Hello world!");
})

io.on('connection', (socket) => {
  console.log("a user connected");
})

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
})