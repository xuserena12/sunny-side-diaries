import axios from 'axios';
import { useState } from 'react';
const ChatBox = () => {
    const [prompt, setPrompt] = useState("");
    const [response, setResponse] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:4000/chat", { prompt })
        .then((res) => {
            setResponse(res.data);
        })
        .catch((err) => {
            console.error(err);
        })
    };
    return (
        <div className="chat-box-outer">
            <form className="chat-box-inner" onSubmit={handleSubmit}></form>
            <div className="chat-options">
                <button class="journal-prompt" type="submit">Generate a Journal Prompt</button>
                <button class="journal-tip" type="submit">Journaling Tips</button>
            </div>
        </div>
    )
}

export default ChatBox;
