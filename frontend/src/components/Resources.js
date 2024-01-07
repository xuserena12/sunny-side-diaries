import '../pages/EmotionAnalysis.css';
import { useState } from 'react'
const GENLINK1 = "https://www.healthline.com/health/mental-health";
const GENLINK2 = "https://www.helpguide.org/";
const GENLINK3 = "https://www.mhrc.ca/mh-resources";
const GENLINK4 = "https://discoverymood.com/blog/online-resources-for-mental-health/";
const ANXLINK1 = "https://ontario.cmha.ca/documents/understanding-and-finding-help-for-anxiety/";
const ANXLINK2 = "https://www.anxietycanada.com/";
const ANXLINK3 = "https://discoverymood.com/blog/online-resources-for-mental-health/";
const DEPLINK1 = "https://www.everydayhealth.com/depression/guide/resources/";
const DEPLINK2 = "https://www.camh.ca/en/health-info/mental-illness-and-addiction-index/depression";
const DEPLINK3 = "https://www.everydayhealth.com/emotional-health/best-online-therapy-for-depression/";

const Resources = () => {
    const [selectedButton, setSelectedButton] = useState('General');

    const handleClick = (button) => {
        setSelectedButton(button);
    }
    const getLinksForButton = (selectedButton) => {
        if (selectedButton == 'General') {
            let links = [GENLINK1, GENLINK2, GENLINK3, GENLINK4];
            return links;
        } else if (selectedButton == 'Anxiety') {
            let links = [ANXLINK1, ANXLINK2, ANXLINK3];
            return links;
        } else {
            let links = [DEPLINK1, DEPLINK2, DEPLINK3];
            return links;
        }
    }
    return (
        <div className="resource-outer">
            <div className="resource-options">
                <ul>
                    <li><button className={`resource-btn ${selectedButton === 'General' ? 'selected' : ''}`} onClick={() => handleClick('General')}>General</button></li>
                    <li><button className={`resource-btn ${selectedButton === 'Depression' ? 'selected' : ''}`} onClick={() => handleClick('Depression')}>Depression</button></li>
                    <li><button   className={`resource-btn ${selectedButton === 'Anxiety' ? 'selected' : ''}`} onClick={() => handleClick('Anxiety')}>Anxiety</button></li>
                </ul>
                <div className="resource-urls">
                    <h2>Mental Health Resources</h2>
                    <ul>
                    {getLinksForButton(selectedButton).map((link, index) => (
                <li key={index}>{link}</li>
                 ))}
                </ul>
                </div>
            </div>
        </div>
    )
}

export default Resources;
