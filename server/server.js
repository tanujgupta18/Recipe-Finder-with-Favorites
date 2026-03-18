import "dotenv/config";
import express from "express";
import cors from "cors";
import dns from "dns";
import chalk from "chalk";

import connectDB from "./config/db.js";
import userRouter from "./routes/userRoutes.js";

dns.setServers(["1.1.1.1", "8.8.8.8"]);
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Api is working");
});

app.use("/api/users", userRouter);
app.listen(PORT, () => {
  console.log(chalk.yellow.bold(`Server running at http://localhost:${PORT}`));
});
