const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const hotelRoute = require("./Routes/hotelRoute")
const connectDb = require("./Configuration/connectDB")

const app = express();

app.use(express.json());
app.use("/api", hotelRoute);

const port = process.env.PORT;

app.listen(port, (err) => {
 if (err) {
    console.error("Server Failed", err.message);
  } else console.log(`Server Started at PORT ${port} `);
})

connectDb();