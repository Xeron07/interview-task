import dotenv from "dotenv";
dotenv.config({ path: __dirname + "./env" });
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import { Request, Response, NextFunction } from "express";
import memberController from "./routes/members";

import keys from "./config/keys";
const app: any = express();
const port: number = 3100;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.use("/api/member", memberController);

app.listen(port, async () => {
  await mongoose.connect(keys.DB);
  return console.log(`app listening at http://localhost:${port}`);
});
