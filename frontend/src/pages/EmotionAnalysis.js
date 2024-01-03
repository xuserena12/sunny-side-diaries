import './Colours.css';
import './EmotionAnalysis.css';
const EmotionAnalysis = () => {
    return (
        <div className="bg-main background">
            <h1>Emotion Analysis</h1>
            <ChatBox></ChatBox>
            <div className="emotions-graph">
            </div> {/*pie chart goes here*/}
            <div></div>
        </div>
    )
}
