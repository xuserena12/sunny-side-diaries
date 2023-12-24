import './History.css';
import Entry from '../components/Entry';

const History = () => {
  return (
    <div className="bg-main bg-cover h-screen w-screen flex justify-center items-center">
      <div className="outer-box">
      <Entry/>
      <Entry/>
      <Entry/>
      <Entry/>
      <Entry/>
      <Entry/>
      <Entry/>
      <Entry/>
      </div>
    </div>
  );
}

export default History;