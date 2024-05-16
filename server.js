const express = require("express");
const { ExpressPeerServer } = require("peer");

const app = express();
const server = require("http").createServer(app);
const peerServer = ExpressPeerServer(server, {
  debug: true,
  path: "/",
});

app.use("/peerjs", peerServer);
// app.use(express.static("public"));

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
