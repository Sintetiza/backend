import express from "express";
import "dotenv/config";
import http from "http";
import cors from "cors";

import { router } from "./routes.js";
import { Server } from "socket.io";

const app = express();
app.use(cors());

const serverHttp = http.createServer(app);
const io = new Server(serverHttp, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log(`New client connected ${socket.id}`);
});

app.use(express.json());
app.use(router);

export { serverHttp };
