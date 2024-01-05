import React, { createContext, useContext, useState } from 'react';
const EggContext = createContext();

export const EggProvider = ({ children }) => {
    const [selectedEgg, setEgg] = useState('');
    const handleClick = (egg) => {
        setEgg(egg);
    };
    return (
        <EggContext.Provider value={{selectedEgg, handleClick}}>
            { children }
        </EggContext.Provider>
    );
};

export const useEgg = () => {
    return useContext(EggContext);
};

