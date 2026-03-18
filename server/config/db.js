import mongoose from "mongoose";
import chalk from "chalk";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () =>
      console.log(chalk.green("Database Connected")),
    );
    await mongoose.connect(`${process.env.MONGODB_URI}/recipe-finder`);
  } catch (error) {
    console.log(chalk.red(error.message));
  }
};

export default connectDB;
