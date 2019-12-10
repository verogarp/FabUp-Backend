// process.stdout.write("\033c");

import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import jwt from "jsonwebtoken";
import bodyParser from "body-parser";
const app = express();

// CONFIG AND ENVIRONMENT LOADING FROM .env FILE
import config from "./config";

// MIDDLEWARES
app.use(bodyParser.json({ limit: "10mb" })); // Increase limit so we can upload images
app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" })); // Same here
app.use(cors());
app.use(morgan("combined"));
app.use(express.json());

import UserModel from "./models/users.model";

const authenticate = (req, res, next) => {
  jwt.verify(req.headers.token, "secret", (err, token) => {
    if (err) {
      res.status(403).json({ error: "Token not valid" });
    }
    UserModel.findOne({ email: token.email }).then(user => {
      res.locals.user = user;
      next();
    });
  });
};

// NONGOOSE
mongoose.connect(
  config.mongoURL,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  err => {
    if (err) {
      throw new Error(err.toString());
    }
    console.info("💾  Mongoose is connected");
  }
);

// ROUTING
import apiRouter from "./routes";
app.use("/api", apiRouter);

app.get("/api/whoami", authenticate, (req, res) => {
  res.send(`jalou! ${res.locals.user.name}`);
});

// Init server
app.listen(process.env.PORT || config.port, err => {
  if (err) {
    throw new Error(err);
  }
  console.info("\n\n" + ">".repeat(40));
  console.info(" 💻  Reboot Server Live");
  console.info(` 📡  PORT: http://localhost:${config.port}`);
  console.info(">".repeat(40) + "\n\n");
});
