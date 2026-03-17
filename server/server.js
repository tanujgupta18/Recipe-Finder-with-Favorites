import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import colors from "colors";
import userRouter from "./routes/userRoutes.js";

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
  console.log(`Server running at http://localhost:${PORT}`.yellow.bold);
});
