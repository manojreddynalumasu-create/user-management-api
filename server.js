const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const { errorHandler, notFound } = require("./middleware/errorHandler");

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "User Management API is running",
    version: "1.0.0",
    endpoints: {
      users: "/api/users",
      userById: "/api/users/:id",
    },
  });
});

app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, function() {
  console.log("Server running on http://localhost:" + PORT);
  console.log("Environment: " + process.env.NODE_ENV);
});