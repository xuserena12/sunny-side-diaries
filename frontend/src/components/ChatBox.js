import axios from 'axios';
import { useState, useEffect } from 'react';

const ChatBox = ({entry}) => {
    const [response, setResponse] = useState("");

    const generateJournalPrompt = () => {
        const prompt = "Generate me a different journal prompt based on mental health in one sentence";
        handleClick(prompt);
    };

    const generateJournalTips = () => {
        const prompt = "Generate me some different journaling tips in less than 100 words";
        handleClick(prompt);
    };

    const handleClick = async(prompt) => {
        axios.post("http://localhost:4000/chat", { prompt })
        .then((res) => {
            setResponse(res.data);
            console.log("API Response:", res.data);
        })
        .catch((err) => {
            console.error(err);
        })
    };

    useEffect(() => {
        console.log("Component Re-rendered with response:", response);
    }, [response]);

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

