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
        <textarea maxlength="30"></textarea>
        <div className="button-container">
            <button>Done</button>
        </div>
        </div>
      </div>
  );
};

export default Modal;

