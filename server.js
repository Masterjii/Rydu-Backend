const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const seedDB = require("./seedSchema");
const pricingRoutes = require("./routes/pricingRoutes");

dotenv.config();

mongoose
  .connect("mongodb://127.0.0.1:27017/Rydu-Project")
  .then(() => {
    console.log("db connected");
    console.log("Connected Database:", mongoose.connection.db.databaseName);
  })
  .catch((err) => {
    console.log("error is:", err);
  });


app.get("/", (req, res) => {
  res.send("Hy, I am Here 👍");
});

// routes
app.use("/api/pricing", pricingRoutes);

// Error Handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server error" });
});

// seeding Schema Data -
// seedDB();   // using only one time when you start the server

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is connected at ${PORT}`);
});
