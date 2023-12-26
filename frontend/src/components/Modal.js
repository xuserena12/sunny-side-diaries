// Modal.js
import { useState } from "react";
import "./Modal.css";

const Modal = ({ toggleModal }) => {
  const [modal, setModal] = useState(false);

  return (
    <div className="modal">
      <div className="overlay"></div>
      <div className="modal-content">
        <h2>Enter Entry Name</h2>
        <input type="text" maxLength="30" placeholder="Title"></input>
        <div  className="button-container">
            <button type="submit" onClick={toggleModal}>Done</button>
        </div>
        </div>
      </div>
  );
};

export default Modal;

