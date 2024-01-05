import './EmotionAnalysis.css';
import ChatBox from "../components/ChatBox";
import '../components/Navbar.css';
import { useLocation, Link } from 'react-router-dom';
import { useEgg } from '../components/EggContext';
import { useEffect } from 'react';

const EmotionAnalysis = () => {
    const location = useLocation();
    console.log(location.state);
    const content = location.state;
    const { eggImg, chooseImg, selectedEgg } = useEgg();

    useEffect(() => {
        chooseImg();
      });

      
    return (
        <div className="bg-main background">
            <nav>
                <ul>
                    <li><Link to="/history" className="navbar-link">Back</Link></li>
                    <li><button className="navbar-link">Ask the Egg</button></li>
                </ul>
            </nav>
            <h1>Emotion Analysis</h1>
            <div className="chat-box">
                <ChatBox entry={content}></ChatBox>
            </div>
            <div className="emotions-graph">
            </div> {/*pie chart goes here*/}
            <div className="resources">
                {/*<Resources></Resources>*/}
            </div>
            <div className={`egg-container ${selectedEgg}-style`}>
            {eggImg && <img className="egg" src={eggImg} alt="egg-img"></img>}
            </div>
        </div>
    )
}

export default EmotionAnalysis;
