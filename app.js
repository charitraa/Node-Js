const express = require("express");
const connectDB = require("./src/config/db");
const userProfileRoutes = require("./src/Routes/userProfileRoutes");
const authRoutes = require("./src/Routes/authRoute");
const profileRoutes = require("./src/Routes/ProfileRoutes");
<<<<<<< HEAD
const categoryRoute = require("./src/Routes/categoryRoute");
=======
const categoryRoutes=require('./src/Routes/categoryRoute')
const productRoutes=require('./src/Routes/productRoutes')
>>>>>>> 600ed317b002dcb513a2acee481ac989ca266944
const app = express();
const port = 5000;
connectDB();
app.use(express.json());

// app.use("/user", userProfileRoutes);
app.use('/api/auth/', authRoutes);
app.use('/category', categoryRoute);

// Serve static files from the 'uploads' directory
app.use("/uploads", express.static(__dirname + "/uploads"));

app.use('/api/profile', profileRoutes);
app.use('/api/category',categoryRoutes)
app.use('/api/products',productRoutes)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
