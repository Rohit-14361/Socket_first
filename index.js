const express = require("express");
const cors = require("cors");

const app = express();
const http = require("http");
app.use(cors()); // Use CORS middleware
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.use(express.json());

io.on("connection", (socket) => {
  console.log("a user connected");
});

let majorVote = "mithun"; // default value

app.get("/", (req, res) => {
  res.send(majorVote);
});

app.post("/set", (req, res) => {
  majorVote = req.body.name;
  res.send(majorVote);
});

server.listen(3000, () => {
  console.log("server is running on port 3000");
});
