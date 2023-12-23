import './Egg.css';
import tamagoPic from '../assets/images/tamago.png';
import jimPic from '../assets/images/jimmy.png';
import sunnyPic from '../assets/images/sunny.png';
const Egg = () => {
  console.log('Rendering Egg component');
  return (
    <div className="pt-16 bg-chooseEgg bg-cover w-screen h-screen">
      <div className="oval"></div>      
        <div className = "tamago-container">
          <h1>Tamago</h1>
          <img src={tamagoPic} alt="tamago"></img>
        </div>
        <div className = "jimmy-container">
          <h1>Jimmy</h1>
          <img src={jimPic} alt="jim"></img>
        </div>
        <div className = "sunny-container">
          <h1>Sunny</h1>
          <img src={sunnyPic} alt="sunny"></img>
        </div>
        <div className="EggText">Choose Your Egg</div>
    </div>
  );
}

export default Egg;