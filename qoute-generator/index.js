import express from "express";
import connectDb from "./src/dbConnect/index.js";
import router from "./src/routes/qoute.routes.js";
const app = express();
app.use(express.json());
connectDb()
  .then(() => {
    app.listen(3000);
  })
  .catch(() => {
    console.log("mongo failed to connect");
  });

app.use("/api/v1/get-qoute", router);
