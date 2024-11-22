import cors from "cors";
import express from "express";
import path from "path";
import bodyParser from "body-parser";

const app = express();

app.use("views", path.join(__dirname, "views"));
app.use(bodyParser());
app.use(cors());
app.use("view engine", "ejs");
app.use("/", routes);

export default app;
