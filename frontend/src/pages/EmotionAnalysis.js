import './EmotionAnalysis.css';
import ChatBox from "../components/ChatBox";
import Resources from "../components/Resources"
import '../components/Navbar.css';
import { useLocation, Link } from 'react-router-dom';
import { useEgg } from '../components/EggContext';
import { useEffect, useState } from 'react';
import axios from 'axios';

import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';

import { Pie } from 'react-chartjs-2';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

const EmotionAnalysis = () => {
    const location = useLocation();
    console.log(location.state);
    const content = location.state;
    const { eggImg, chooseImg, selectedEgg } = useEgg();

    const [sentiments, setSentiments] = useState(null);
    const [showChart, setShowChart] = useState(false);

    let initialData = {
        labels: [
          'anger',
          'fear',
          'joy',
          'sadness',
          'surprise',
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 50, 100, 30, 140],
          backgroundColor: [
            'rgb(255,197,197)',
            'rgb(199,220,167)',
            'rgb(137,185,173)',
            'rgb(255, 235, 216)',
            'rgb(255, 247, 212)'
          ],
          hoverOffset: 4
        }]
      };

      const [data, setData] = useState(initialData);


      const updatePolarities = ( polarities )  => {
        const updatedData = {
            ...data,
            datasets: [{
              ...data.datasets[0],
              data: polarities
            }]
          };

          setData(updatedData);
      };

    const getSentiments =  async () => {
        console.log("sentimentss");
        try {
            const response = await axios.post('/sentiment-analysis', {
                text: content
            });
            setSentiments(response.data);

            let polarities = [];
            const emotions = response.data;

            for (const key in emotions) {
                polarities.push(emotions[key]);
            };

            updatePolarities(polarities);
            setShowChart(true);
            console.log(response.data);
            console.log("hii");
            console.log(polarities);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        chooseImg();
        getSentiments();
      }, []);

      
    return (
        <div className="bg-main background">
            <nav>
                <ul>
                    <li><Link to="/history" className="navbar-link">Back</Link></li>
                </ul>
            </nav>
            <h1>Emotion Analysis</h1>
            <div className="emotion-analysis-container">
                <div className="chat-box">
                    <ChatBox entry={content}></ChatBox>
                </div>
                <div className="emotions-graph">
                <h1 className="emotion-chart">Emotion Chart</h1>
                    <Pie
                    data={data}
                    className={`pie-chart ${showChart ? 'opacity-100' : 'opacity-0 transition-opacity duration-500'}`}
                    >
                    </Pie>
                </div> {/*pie chart goes here*/}
            </div>
            <div className="resources">
                <Resources></Resources>
            </div>
            <div className={`egg-container ${selectedEgg}-style`}>
            {eggImg && <img className="egg" src={eggImg} alt="egg-img"></img>}
            </div>
        </div>
    )
}

export default EmotionAnalysis;

