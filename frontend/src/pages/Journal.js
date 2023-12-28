// Journal.js
import React, { useState, useEffect } from "react";
import "./Journal.css";
import Modal from "../components/Modal";

const Journal = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <div className="bg-main bg-cover h-screen w-screen flex justify-center items-center">
      <div className="outer-journal">
        <div className="inner-journal">
          <div className="content-wrapper ml-4 mt-4">
            <input disabled={modalVisible}
              className="w-full h-full outline-none bg-cream resize-none"
              placeholder="Write your thoughts here..."/>
          </div>
          <button onClick={toggleModal} disabled={modalVisible}>Save</button>
          {modalVisible && <Modal toggleModal={toggleModal} />}
        </div>
      </div>
    </div>
  );
};

export default Journal;




