import './Entry.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

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

  const handleClick = (e) => {
    navigate('/emotion-analysis', { state: content });
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
        <div className="button-container">
            <button className="analysis" onClick={handleClick}>
            {/* <Link
              to={{
                pathname: '/emotion-analysis',
                state: { content: "hi" }, // Ensure you're passing the state properly here
              }}
            > */}
              {/* See Emotion Analysis
            </Link> */}
            See Emotion Analysis
            </button>
        </div>
        </div>
      </div>
      
    </div>
  );
}


export default Entry;
