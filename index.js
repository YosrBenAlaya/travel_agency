const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const hotelRoute = require("./Routes/hotelRoute");
const userRoute = require("./Routes/userRoute");
const countryRoute = require("./Routes/countryRoute");
const connectDb = require("./Configuration/connectDB");

const app = express();
app.use(express.json());

// Routes
app.use("/api", countryRoute);
app.use("/api", hotelRoute);
app.use("/api", userRoute);

const port = process.env.PORT;

// Connect to DB first
connectDb()
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log("Server is running on port " + port);
    });
  })
  .catch((err) => {
    console.error("Database connection failed:", err.message);
  });
