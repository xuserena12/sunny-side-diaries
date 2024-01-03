import './Colours.css';
import './EmotionAnalysis.css';
const EmotionAnalysis = () => {
    return (
        <div className="bg-main background">
            <h1>Emotion Analysis</h1>
            <div className="chatBox">
                <ChatBox></ChatBox>
            </div>
            <div className="emotions-graph">
            </div> {/*pie chart goes here*/}
            <div className="resources">
                <Resources></Resources>
            </div>
        </div>
    )
}
