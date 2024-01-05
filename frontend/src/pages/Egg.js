import './Egg.css';
import tamagoPic from '../assets/images/tamago.png';
import jimPic from '../assets/images/jimmy.png';
import sunnyPic from '../assets/images/sunny.png';
import { useEgg } from '../components/EggContext';

const Egg = () => {
  const {selectedEgg, handleClick} = useEgg();

  return (
    <div className="pt-16 bg-chooseEgg bg-cover w-screen h-screen">
      <div className="oval">
          <div className="EggText"> {selectedEgg+' Selected!'}</div>
        </div>      
        <div className = {`tamago-container ${selectedEgg === 'Tamago' ? 'selected' : ''}`}>
          <div class="name">Tamago</div>
          <img src={tamagoPic} alt="tamago" onClick={() => handleClick('Tamago')}></img>
        </div>
        <div className = {`sunny-container ${selectedEgg === 'Sunny' ? 'selected' : ''}`}>
          <div class="name">Sunny</div>
          <img src={sunnyPic} alt="sunny" onClick={() => handleClick('Sunny')}></img>
        </div>
        <div className = {`jimmy-container ${selectedEgg === 'Jimmy' ? 'selected' : ''}`}>
          <div class="name">Jimmy</div>
          <img src={jimPic} alt="jim" onClick={() => handleClick('Jimmy')}></img>
        </div>
    </div>
  );
}

export default Egg;

