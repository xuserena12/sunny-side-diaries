import axios from 'axios';
import { useState } from 'react';
const ChatBox = () => {
    const [response, setResponse] = useState("");

    const generateJournalPrompt = () => {
        const prompt = "Generate me a journal prompt based on mental health";
        handleClick(prompt);
    };

    const generateJournalTips = () => {
        const prompt = "Generate me some journaling tips in less than 100 words";
        handleClick(prompt);
    };

    const handleClick = async(prompt) => {
        const res = await axios.post("/chat", { prompt })
        .then((res) => {
            setResponse(res.data);
        })
        .catch((err) => {
            console.error(err);
        })
    };
    return (
        <div className="chat-box-outer">
            <div className="chat-options">
                <button className="journal-prompt" onClick={generateJournalPrompt}>Generate a Journal Prompt</button>
                <button className="journal-tip" onClick={generateJournalTips}>Journaling Tips</button>
            </div>
            <div className="chat-box-inner">
                <p>{ response }</p>
            </div>
        </div>
    )
}

export default ChatBox;

