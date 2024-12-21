const express = require("express");
const path = require("path"); // Import the 'path' module
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");

const authRoutes = require("./routes/auth.js");
const listingRoutes = require("./routes/listing.js");
const bookingRoutes = require("./routes/booking.js");
const userRoutes = require("./routes/user.js");

const app = express();

// Middleware
const cors = require("cors");
app.use(cors({ origin: "http://localhost:3000" })); // Replace with your client URL

app.use(express.json());
app.use(express.static("public"));

// Serve React static files
app.use(express.static(path.join(__dirname, "../client/build")));

// Routes
app.use("/auth", authRoutes);
app.use("/properties", listingRoutes);
app.use("/bookings", bookingRoutes);
app.use("/users", userRoutes);

// Catch-all route for React
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

// Mongoose setup
const Port = process.env.PORT || 3001; // Use environment variable for the port, if available
mongoose
  .connect(process.env.MONGO_URL, {
    dbName: "Dream_Nest",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(Port, () => console.log(`Server running on port: ${Port}`));
  })
  .catch((err) => console.log(`${err} did not connect`));
