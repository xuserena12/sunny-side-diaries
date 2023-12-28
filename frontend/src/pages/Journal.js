// Journal.js
import React, { useState, useEffect } from "react";
import "./Journal.css";
import Modal from "../components/Modal";

const Journal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const handleChange = (e) => {
    setContent(e.target.value);
    console.log(content);
  };

  const handleSave = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-main bg-cover h-screen w-screen flex justify-center items-center">
      <div className="outer-journal">
        <div className="inner-journal">
          <div className="content-wrapper ml-4 mt-4">
            <input disabled={modalVisible}
              className="w-full h-full outline-none bg-cream resize-none"
              placeholder="Write your thoughts here..."
              value={content}
              onChange={handleChange}
              />
          </div>
          <button onClick={toggleModal} disabled={modalVisible}>Save</button>
          {modalVisible && <Modal toggleModal={toggleModal} content={content} />}
        </div>
      </div>
    </div>
  );
};

export default Journal;




