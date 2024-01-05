// Modal.js
import { useState } from "react";
import "./Modal.css";
import axios from 'axios';
import x from '../assets/images/x.png';

const Modal = ({ toggleModal, content }) => {
  const id = localStorage.getItem('userId');
  const [title, setTitle] = useState("");

  const handleSave = async (e) => {
    const currentDate = new Date();
    const entry = {
      title: title, 
      content: content,
      date: currentDate,
      userId: id,
    };

    try {
      const response = await axios.post('/journal', entry);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
    console.log("added!");

    // clear the data stuff after...
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
    console.log(title);
  };

  const submitEntry = () => {
    toggleModal();
    handleSave();
  }

  return (
    <div className="modal">
      <div className="overlay"></div>
      <div className="modal-content">
        <h2>Enter Entry Name</h2>
        <input
        type="text"
        maxLength="30"
        placeholder="Title"
        value={title || ''}
        onChange={handleChange}
        >
        </input>
        <div className="button-container">
            <button type="submit" onClick={submitEntry}>Done</button>
            <div className="close" onClick={toggleModal}>x</div>
        </div>
        </div>
      </div>
  );
};

export default Modal;

