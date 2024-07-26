const express = require("express");
const connectDB = require("./src/config/db");
const userProfileRoutes = require("./src/Router/ProfileRoutes");
const authRoutes = require("./src/Router/authRoute");
const profileRoutes = require("./src/Router/ProfileRoutes");
const app = express();
const port = 5000;
connectDB();
app.use(express.json());

app.use("/user", userProfileRoutes);
app.use('/api/auth/', authRoutes);

// Serve static files from the 'uploads' directory
app.use("/uploads", express.static(__dirname + "/uploads"));

app.use('/api/profile', profileRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});