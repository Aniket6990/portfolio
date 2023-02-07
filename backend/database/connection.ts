import mongoose from "mongoose";

const connect = async (ATLAS_URI: string) => {
  mongoose.set("strictQuery", true);
  console.log("Connecting to database...");
  const db = await mongoose.connect(ATLAS_URI);
  return db;
};

export default connect;
