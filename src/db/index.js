import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connetionDB = async () => {
  try {
    const connected = await mongoose.connect(
      `${process.env.MOGODB_RAHUL}/${DB_NAME}`
    );
    console.log(`MONGODB IS CONNECTED ${connected.connection.host}`);
  } catch (error) {
    console.log("ERROR IN MONGODB CONECTION: ", error);
    process.exit(1);
  }
};
export default connetionDB;
