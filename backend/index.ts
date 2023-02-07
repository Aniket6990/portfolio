import { error } from "console";
import express from "express";
import dotenv from "dotenv";
import connect from "./database/connection";

const app = express();
dotenv.config();

connect(process.env.ATLAS_URI as string)
  .then(() => {
    console.log("Connected to database.");
    app.listen(process.env.PORT, () => {
      console.log(`Server is lisening on http://localhost:${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(`Error occoured while connecting database:${error.message}`);
  });
