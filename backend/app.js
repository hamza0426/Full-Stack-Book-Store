const express = require("express");
const app = express();
app.use(express.json());
require("dotenv").config();
require("./connection/conn");
const User = require("./routes/user");

// app.get("/", (req, res) => {
//     res.send("Hello from Backend...");
// });



//routes
app.use("/api/v1", User)

//Creating Port
app.listen(process.env.PORT, () => {
    console.log(`Server Started at ${process.env.PORT}`);
});