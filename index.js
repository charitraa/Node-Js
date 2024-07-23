const Connect_to_MongoDB = require("./src/config/db");

const express = require("express");

const app = express();
const port = 3000; // Define your port

Connect_to_MongoDB();

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
