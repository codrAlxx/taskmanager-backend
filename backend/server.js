const taskRoutes = require("./routes/taskRoute")
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
// const routes = require("./routes/ToDoRoute");
const PORT = process.env.PORT | 5004;
const BASE_URL = process.env.BASE_URL

const app = express();
app.use(express.json());
// -app.use(express.urlencoded({extended: false}))
app.use(cors())

// app.use("api/tasks", taskRoutes);
// app.get("/", (req, res) => {
//   res.send("Home Page");
// })
// console.log(process.env.PORT)


// app.use(cors());

mongoose
    .connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Mongodb Connected..."))
    .catch((err) => console.error(err));

// Routes
app.use(taskRoutes);

app.listen(PORT, () => console.log("Server running on port " + PORT));