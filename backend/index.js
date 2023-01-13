const express = require("express");
const cors = require("cors");
const colors = require('colors'); 
require("dotenv").config();
const PORT = process.env.PORT || 5000;
const connectDB = require("./config/db"); 
const { errorHandler } = require("./middleware/errorMiddleware");

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/auth", require("./routes/authRoute"));
app.use("/api/account", require("./routes/accountRoute"));
app.use("/api/users", require("./routes/usersRoute"));

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
