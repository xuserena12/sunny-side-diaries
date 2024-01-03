#! /usr/bin/env node

const express = require('express');
require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');
const { Configuration, OpenAIApi } = require('openai');
const config = new Configuration({
    apiKey: process.env.AI_API_KEY,
});
const text2emotion = require('text2emotion');

const openai = new OpenAIApi(config);

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post("/chat", async(req, res) => {
    const { prompt } = req.body;

    // analyse the emotions here
    const { entry } = req.body;
    const emotions = text2emotion.getEmotion(entry);

    const completion = await openai.createCompletion({
        model: "gpt-3.5-turbo", 
        max_tokens: 512,
        prompt: prompt,
    });

    res.send(completion.data.choices[0].text);
})




