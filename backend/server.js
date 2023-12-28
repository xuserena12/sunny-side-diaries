const express = require('express');
require('dotenv').config();
const app = express();

const indexRouter = require('./routes/index');

app.use(express.json())
app.use('/', indexRouter);

// Set up mongoose connection
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const mongoDB = "mongodb+srv://journal2:1EEMfhIpoNz0xAv6@cluster0.ysx3vbt.mongodb.net/entries?retryWrites=true&w=majority";

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}

//middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
})

app.get("/api", (req, res) => {
  res.json({ "users": ["userone", "usertwo"]});
});

app.listen(process.env.PORT, () => {
  console.log("Listening on port", process.env.PORT);
});

