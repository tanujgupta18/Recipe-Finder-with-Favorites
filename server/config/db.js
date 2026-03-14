import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log(
        `MongoDB Connected: ${mongoose.connection.host}`.cyan.underline,
      );
    });
    await mongoose.connect(`${process.env.MONGODB_URI}/recipe-finder`);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.bold);
  }
};

export default connectDB;
