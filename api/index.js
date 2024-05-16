import express from "express";
const app = express();

import authRoutes from "./routes/auth.js";
import cors from "cors"

// Middlewares
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Credentials", true);
    next();
  }); //Allow us to login and prevent Cors error

app.use(express.json()); // Allow us to send json data to the db
app.use(
    cors({
      origin: "http://localhost:3000",
    })
  );  //Allow us to send api request from our client to the server


app.use("/api/auth", authRoutes);

app.listen(8800, () => {
    console.log("API working!");
});