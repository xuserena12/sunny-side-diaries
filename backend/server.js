const express = require('express');
require('dotenv').config();
const app = express();

const indexRouter = require('./routes/index');
//const chatRouter = require('./chat');

const cors = require("cors");
app.use(cors());


app.use(express.json())
app.use('/', indexRouter);
//app.use('/chat', chatRouter);

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

require("./models/userDetails")
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
      const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, {expiresIn: "15m"});
      res.status(200).json({data:token, id: user._id, message: "Logged in successfully"});
      
    } else {
      return res.status(401).send({message: "Invalid Email or Password"});
    }
  }
  catch(error) {
    return res.status(500).send({message:"Internal Server Error"});
  }
});

const bodyParser = require('body-parser');
const OpenAI = require('openai');

const openai = new OpenAI({
    apiKey: process.env.API_KEY,
});

app.use(bodyParser.json());



app.post("/chat", async (req, res) => {
    try {
        const { prompt } = req.body;
        const userMessage = { role: "user", content: prompt };
        // Additional parameters for the API request
        const apiRequestParams = {
            messages: [{ role: "system", content: "You are a helpful assistant." }, userMessage],
            model: "gpt-3.5-turbo",
            max_tokens: 512,
            temperature: 0.5,
        };

        // Make the API request
        const completion = await openai.chat.completions.create(apiRequestParams);

        // Log the response for debugging
        console.log(completion.choices[0]);

        // Send the response text to the client
        res.status(201).json(completion.choices[0].message.content);
    } catch (error) {
        console.error("Error in /chat endpoint:", error.message);
        res.status(500).send("Internal Server Error");
    }
});

