import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  
  useEffect(() => {
    const [Goldcount, setGoldcount] = useState([])
    axios.get('http://localhost:3001/goldcount')
    .then(Goldcount => setGoldcount(Goldcount.data))
    .catch(err => console.log(err))
  }, [])


return(
  <div className="w-100 vh-100 d-flex justify-content-center align-items-center">
    <div className="w-50">
    <table className="table">
      หก
      <thead>
        <tr>
          <th>
            รหัส
          </th>
          <th>
            ชนิด
          </th>
          <th>
            ขนาด
          </th>
          <th>
            น้ำหนัก
          </th>
        </tr>
      </thead>
      <tbody>
        {
          goldcount.map(goldcount => {
            return <tr>
              <td>{goldcount.gold_id}</td>
              <td>{goldcount.goldtype}</td>
              <td>{goldcount.size}</td>
              <td>{goldcount.weight}</td>
            </tr>
          })
        }
      </tbody>
    </table>
    </div>
  </div>
);
}

export default App;
