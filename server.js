const express = require("express");
const colors = require("colors");
const moragan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const routerApi = require("./router/userRouter");
const path = require("path");

//dotenv config
dotenv.config();

// mongodb connection
connectDB();

// rest object
const app = express();

//middlewares
app.use(express.json());
app.use(moragan("dev"));

//router
app.use("/api/v1/user", require("./router/userRouter"));
app.use("/api/v1/admin", require("./router/adminRouter"));
app.use("/api/v1/doctor", require("./router/doctorRouter"));

// static
app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

//port
const port = process.env.PORT || 8080;
//Listen port
app.listen(port, () => {
  console.log(
    `Server Running in ${process.env.NODE_MODE} mode on port ${process.env.PORT}`
      .bgCyan.white
  );
});

// routerApi
