import './Entry.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Entry = ({ date, title, content }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/")
  }

  return (
    <div className="outer-entry">
      <div
      className="entry"
      onClick={handleClick}
      >
        <h3>{title}</h3>
        <p>Date: {date}</p>
        <p>{content}</p>
      </div>
    </div>
  );
}


export default Entry;