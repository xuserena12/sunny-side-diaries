import './Egg.css';
import tamagoPic from '../assets/images/tamago.png';
import jimPic from '../assets/images/jimmy.png';
import sunnyPic from '../assets/images/sunny.png';
const Egg = () => {
  console.log('Rendering Egg component');
  return (
    <div className="pt-16 bg-chooseEgg bg-cover w-screen h-screen">
      <div className="oval"></div>
        <div className="EggText">Choose Your Egg</div>
        <div className = "tamago-container">
          <img src={tamagoPic} alt="tamago"></img>
        </div>
        <div className = "jimmy-container">
          <img src={jimPic} alt="jim"></img>
        </div>
        <div className = "sunny-container">
          <img src={sunnyPic} alt="sunny"></img>
  </div>
    </div>
  );
}

export default Egg;