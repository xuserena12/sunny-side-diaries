import './Entry.css';

const Entry = ({ date, title, content }) => {
  return (
    <div className="outer-entry">
      <div className="entry">
        <h3>{title}</h3>
        <p>Date: {date}</p>
        <p>{content}</p>
      </div>
    </div>
  );
}


export default Entry;