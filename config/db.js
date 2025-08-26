import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`connected to mongodb ${mongoose.connection.host}`);
  } catch (error) {
    console.log(`connection error${error}`);
  }
};
export default connectDB;
