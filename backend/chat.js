#! /usr/bin/env node

const express = require('express');
const router = express.Router();
require('dotenv').config();
const bodyParser = require('body-parser');
const OpenAI = require('openai');

const openai = new OpenAI({
    apiKey: process.env.AI_API_KEY,
});

router.use(bodyParser.json());

router.post("/chat", async (req, res) => {
    try {
        const { prompt } = req.body;

        // Additional parameters for the API request
        const apiRequestParams = {
            messages: [{ role: "system", content: "You are a helpful assistant." }],
            model: "gpt-3.5-turbo",
            max_tokens: 512,
            temperature: 0,
            prompt: prompt,
        };

        // Make the API request
        const completion = await openai.chat.completions.create(apiRequestParams);

        // Log the response for debugging
        console.log(completion.choices[0]);

        // Send the response text to the client
        res.send(completion.choices[0].text);
    } catch (error) {
        console.error("Error in /chat endpoint:", error.message);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router;



