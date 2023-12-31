const express = require('express');
require('dotenv').config();
const app = express();

const indexRouter = require('./routes/index');

app.use(express.json())
app.use('/', indexRouter);

const cors = require("cors");
app.use(cors());

const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;


// Set up mongoose connection
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const mongoDB = process.env.MONGOURL;

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}

//middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
})

app.listen(process.env.PORT, () => {
  console.log("Listening on port", process.env.PORT);
});

require("./userDetails")
const User=mongoose.model("UserInfo");
// sign up API
app.post("/register", async(req, res) => {
  const {fname, lname, email, password}=req.body;
  const salt = await bcrypt.genSalt(Number(process.env.SALT)); // password encryption variable
  const encryptedPass=await bcrypt.hash(password, salt); // hash password
  try {
    // checking to see if user with email already exists
    const oldUser= await User.findOne({ email }); 
    if (oldUser) {
       console.log("hi");
       return res.status(409).send({message: "User with given email already exists"});
    } 
    await User.create({ // creating a new user in database
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

// Login API
app.post("/login", async(req, res) => {
  try {
    const { email, password } = req.body;
    const user=await User.findOne({email});
    if (!user) {
      return res.status(401).send({message: "Invalid Email or Password"});
    }
    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign({email: user.email}, JWT_SECRET, {expiresIn: "15m"});
      res.status(200).send({data:token, message: "Logged in successfully"})
    } else {
      return res.status(401).send({message: "Invalid Email or Password"});
    }
  }
  catch(error) {
    return res.status(500).send({message:"Internal Server Error"});
  }
})
