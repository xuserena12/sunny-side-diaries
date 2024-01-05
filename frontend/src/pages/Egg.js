import './Egg.css';
import tamagoPic from '../assets/images/tamago.png';
import jimPic from '../assets/images/jimmy.png';
import sunnyPic from '../assets/images/sunny.png';
const Egg = () => {
  console.log('Rendering Egg component');
  return (
    <div className="pt-16 bg-chooseEgg bg-cover w-screen h-screen">
      <div className="oval">
          <div className="EggText">Choose Your Egg</div>
        </div>      
        <div className = "tamago-container">
          <div class="name">Tamago</div>
          <img src={tamagoPic} alt="tamago"></img>
        </div>
        <div className = "sunny-container">
          <div class="name">Sunny</div>
          <img src={sunnyPic} alt="sunny"></img>
        </div>
        <div className = "jimmy-container">
          <div class="name">Jimmy</div>
          <img src={jimPic} alt="jim"></img>
        </div>
    </div>
  );
}

export default Egg;