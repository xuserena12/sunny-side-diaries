import './History.css';
import Entry from '../components/Entry';
import { useEffect, useState } from 'react';
import axios from 'axios';


const History = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/history/');
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


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