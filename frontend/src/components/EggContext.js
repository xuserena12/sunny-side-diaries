import React, { createContext, useContext, useState } from 'react';
import sunnyPic from '../assets/images/ea_sunny.gif';
import jimPic from '../assets/images/ea_jimmy.gif';
import tamagoPic from '../assets/images/ea_tamago.gif';

const EggContext = createContext();

export const EggProvider = ({ children }) => {
    const [selectedEgg, setEgg] = useState('');
    const [eggImg, setEggImg] = useState("");
    const [personality, setPersonality] = useState("");
    const [backstory, setBackstory] = useState("");
    if (!selectedEgg) {
      setEgg('Jimmy');
    }
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

    const handlePersonality = () => {
      let p = '';
      if (selectedEgg === 'Tamago') {
        p = "Quiet, shy, considerate. Speak like a wise sage.";
      } else if (selectedEgg === 'Sunny') {
        p = "Outgoing, optimistic, loves telling dad jokes. Speak in the tone of a child."
      } else {
        p = "Stubborn with a big heart. Speak in the tone of a teen.";
      }
      setPersonality(p);
    }

    const handleBackstory = () => {
      let p = '';
      if (selectedEgg === 'Tamago') {
        p = "I'm honoured that you want to know a bit more about me. " +
        "I'm Tamago! It's great to be able to be your journaling assistant! " + 
        "To be honest I'm a little bit on the shy end so I don't really know how to start hmm...." + 
        "I'm quite an avid reader of books. I think books actually inspired me to journal. My favourite book?"+
        "Great EGGspectations by Darles Chickens haha. That was a fantastic piece."
      } else if (selectedEgg === 'Sunny') {
        p = "AHHHH I just have so much to sayyyy. First of all, so glad you asked moi~ I'm a glass-half-full "+ 
      "kinda guy and it's kinda rare to catch me on my gloomy side. Lately I've been watching a ton of dramas~ they make me soooo "+
      "eggstatic! But journaling is also sooo fun!! Recently I've been journaling about what I'd do if I was a unicorn. I'd be able to do so much."+
      "But literally the first thing I'd do is turn everything rainbow. ALSO I've just come up with this amazing joke..."+
      "What sport are eggs best at? ...RUNNING!! Get it? Haha"
      } else {
        p = "Haha well, tbh I'm just your chillin' it egg. Not much going on today. Just school and whatever." + 
        " Been spending too much time on Eggstagram lately...gotta get off that app. Anyways hope you have a fun time journaling. "+
        "Regrettably, today I've eaten a bit too much chocolate. The yolk inside of me is churning. Don't ask me how that's even possible."
      }
      setBackstory(p);
    }

    return (
        <EggContext.Provider value={{selectedEgg, eggImg, handleClick, chooseImg, handlePersonality, personality, handleBackstory, backstory}}>
            { children }
        </EggContext.Provider>
    );
};

export const useEgg = () => {
    return useContext(EggContext);
};

