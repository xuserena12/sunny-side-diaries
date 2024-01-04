#! /usr/bin/env node

const express = require('express');
const router = express.Router();
require('dotenv').config();
const bodyParser = require('body-parser');
const OpenAI = require('openai');
const openai = new OpenAI({
    apiKey: process.env.AI_API_KEY,
});
// const text2emotion = require('text2emotion');

router.use(bodyParser.json());
router.post("/chat", async(req, res) => {
    const { prompt } = req.body;

    // analyse the emotions here
    // const { entry } = req.body;
    // const emotions = text2emotion.getEmotion(entry);

    const completion = await openai.createCompletion({
        model: "text-davinci-003", 
        max_tokens: 512,
        temperature:0,
        prompt: prompt,
    });

    res.send(completion.data.choices[0].text);
})

module.exports = router;




