import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [goldData, setGoldData] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3001/getGoldcount')
    .then(goldData => setGoldData(goldData.data))
    .catch(err => console.log(err))
  }, [])

return(
  <div className="w-100 vh-100 d-flex justify-content-center align-items-center">
    <div className="w-50">
    <table className="table">
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
          goldData.map(item => {
            return <tr>
              <td>{item.gold_id}</td>
              <td>{item.goldtype}</td>
              <td>{item.size}</td>
              <td>{item.weight}</td>
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
