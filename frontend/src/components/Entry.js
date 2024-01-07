import './Entry.css';
import { useNavigate } from 'react-router-dom';
import { useEgg } from './EggContext';

const Entry = ({ date, title, content }) => {
  const navigate = useNavigate();

  const yourDate = new Date(date);
  const monthNames = [
    'Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'
  ];
  const dateFiltered = {
    month: monthNames[yourDate.getMonth()],
    day: yourDate.getDate(),
    year: yourDate.getFullYear()
  }
  // const data = { name: 'John', age: 30 };
  const { handlePersonality, personality } = useEgg();
  const handleClick = (e) => {
    handlePersonality();
    let aiRequest = "Here is a journal entry: " + content + ". Respond to this entry with this personality in less than 250 words: "+ personality;
    navigate('/emotion-analysis', { state: aiRequest});
  }

  return (
    <div className="outer-entry">
      <div
      className="entry"
      >
        <div className="display">
          <div className="date">
            <div className="month">{dateFiltered.month}</div>
            <div className="day">{dateFiltered.day}</div>
          </div>
        <div>
          <p className="content">{content}</p>
        </div>
            <button className="analysis" onClick={handleClick}>
            {/* <Link
              to={{
                pathname: '/emotion-analysis',
                state: { content: "hi" }, // Ensure you're passing the state properly here
              }}
            > */}
              {/* See Emotion Analysis
            </Link> */}
            Emotion Analysis
            </button>
        </div>
      </div>
      
    </div>
  );
}


export default Entry;
