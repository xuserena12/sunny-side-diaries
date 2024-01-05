import './Entry.css';
import { Navigate } from 'react-router-dom';

const Entry = ({ date, title, content }) => {
  
  const yourDate = new Date(date);
  const monthNames = [
    'Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'
  ];
  const dateFiltered = {
    month: monthNames[yourDate.getMonth()],
    day: yourDate.getDate(),
    year: yourDate.getFullYear()
  }

  const handleClick = (e) => {

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
            <button className="analysis" onClick={handleClick}>See analysis</button>
        </div>
      </div>
      
    </div>
  );
}


export default Entry;