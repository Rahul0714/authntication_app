const express = require("express");
const { notFound, errorHandler } = require("./middleware/errorHandler");
const connectDB = require("./config/db");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/users", require("./routes/userRoutes"));

app.use(notFound);
app.use(errorHandler);
app.listen(port, () => console.log(`Server running on ${port}`));
