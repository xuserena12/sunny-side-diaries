const express = require('express');
require('dotenv').config();
const app = express();

const indexRouter = require('./routes/index');

app.use(express.json())
app.use('/', indexRouter);

const cors = require("cors");
app.use(cors());

const bcrypt=require("bcrypt");


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

require("./userDetails")
const User=mongoose.model("UserInfo");
app.post("/register", async(req, res) => {
  const {fname, lname, email, password}=req.body;
  const salt = await bcrypt.genSalt(Number(process.env.SALT));
  const encryptedPass=await bcrypt.hash(password, salt);
  try {
    const oldUser= await User.findOne({ email });
    if (oldUser) {
       console.log("hi");
       return res.status(409).send({message: "User with given email already exists"});
    }
    await User.create({
      fname,
      lname,
      email,
      password:encryptedPass,
    });
    res.status(201).send({message: "User created successfully"});
  } catch (error) {
    res.status(201).send({message: "Internal Server Error"});
  }
});

