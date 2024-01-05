import React, { createContext, useContext, useState } from 'react';
import sunnyPic from '../assets/images/ea_sunny.gif';
import jimPic from '../assets/images/ea_jimmy.gif';
import tamagoPic from '../assets/images/ea_tamago.gif';

const EggContext = createContext();

export const EggProvider = ({ children }) => {
    const [selectedEgg, setEgg] = useState('');
    const [eggImg, setEggImg] = useState("");
    const handleClick = (egg) => {
        setEgg(egg);
    };

    const chooseImg = () =>  {
        if (selectedEgg === 'Tamago') {
          setEggImg(tamagoPic);
        } else if (selectedEgg === 'Sunny') {
          setEggImg(sunnyPic);
        } else {
          setEggImg(jimPic);
        }
    };

    return (
        <EggContext.Provider value={{selectedEgg, eggImg, handleClick, chooseImg}}>
            { children }
        </EggContext.Provider>
    );
};

export const useEgg = () => {
    return useContext(EggContext);
};

