// Journal.js
import React, { useState, useEffect } from "react";
import "./Journal.css";
import Modal from "../components/Modal";
import { useEgg } from '../components/EggContext';
import sunnyPic from '../assets/images/ea_sunny.gif';
import jimPic from '../assets/images/ea_jimmy.gif';
import tamagoPic from '../assets/images/ea_tamago.gif';

const Journal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [content, setContent] = useState("");
  const {selectedEgg, handleClick} = useEgg();
  const [eggImg, setEggImg] = useState("");
  const chooseImg = () =>  {
    if (selectedEgg === 'Tamago') {
      setEggImg(tamagoPic);
    } else if (selectedEgg === 'Sunny') {
      setEggImg(sunnyPic);
    } else if (selectedEgg === 'Jimmy') {
      setEggImg(jimPic);
    } else {
      setEggImg('');
    }
    console.log(eggImg);
  };

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

  useEffect(() => {
    chooseImg();
  }, [selectedEgg]);


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
      <div className="egg-pic">
       {eggImg && <img className="egg" src={eggImg} alt="egg-img"></img>}
      </div>
    </div>
  );
};

export default Journal;




