import './History.css';
import Entry from '../components/Entry';
import { useEffect, useState } from 'react';
import axios from 'axios';


const History = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/history');
        console.log(response.data);
        setEntries(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <div className="bg-main bg-cover h-screen w-screen flex justify-center items-center">
      <div className="outer-box pb-5">
        {entries.map((entry, index) => (
          <Entry
            key={index}
            date={entry.date}
            title={entry.title}
            content={entry.content}
          />
        ))}
      </div>
    </div>
  );
}

export default History;