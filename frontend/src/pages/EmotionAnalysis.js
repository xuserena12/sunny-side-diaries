import './EmotionAnalysis.css';
import ChatBox from "../components/ChatBox";
import '../components/Navbar.css'
const EmotionAnalysis = () => {
    return (
        <div className="bg-main background">
            <nav>
                <ul>
                    <li><a className="navbar-link" href="/history">Back</a></li>
                    <li><button className="navbar-link">Ask the Egg</button></li>
                </ul>
            </nav>
            <h1>Emotion Analysis</h1>
            <div className="chat-box">
                <ChatBox></ChatBox>
            </div>
            <div className="emotions-graph">
            </div> {/*pie chart goes here*/}
            <div className="resources">
                {/*<Resources></Resources>*/}
            </div>
        </div>
    )
}

export default EmotionAnalysis;
