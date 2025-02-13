const express = require("express");
const app = express();
app.use(express.json());
require("dotenv").config();
require("./connection/conn");
const User = require("./routes/user");
const Books = require("./routes/book");
const Favourite = require("./routes/favourite");

// app.get("/", (req, res) => {
//     res.send("Hello from Backend...");
// });



//routes
app.use("/api/v1", User)
app.use("/api/v1", Books)
app.use("/api/v1", Favourite)

//Creating Port
app.listen(process.env.PORT, () => {
    console.log(`Server Started at ${process.env.PORT}`);
});