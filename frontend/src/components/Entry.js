import './Entry.css';


const Entry = ({ date, title, content }) => {
  
  const yourDate = new Date(date);
  const monthNames = [
    'Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'
  ];
  const dateFiltered = {
    month: monthNames[yourDate.getMonth()],
    day: yourDate.getDay(),
    year: yourDate.getFullYear()
  }

  return (
    <div className="outer-entry">
      <div
      className="entry"
      >
        <p>{dateFiltered.month}</p>
        <p>{title}</p>
        <p>{content}</p>
      </div>
    </div>
  );
}


export default Entry;