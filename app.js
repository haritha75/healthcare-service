const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const serviceRoutes = require("./routes/serviceRoutes");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

mongoose
  .connect("mongodb://localhost:27017/healthcare-service", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Successfully connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB:", err));

app.use("/api", serviceRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
