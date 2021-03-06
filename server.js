const express = require("express");
const mongoose = require("mongoose");

const users = require("./routes/api/users");
const posts = require("./routes/api/posts");
const fake = require("./routes/api/fake");

const app = express();

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello!"));

// Use Routes
app.use("/api/users", users);
app.use("/api/posts", posts);
app.use("/api/fake", fake);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
