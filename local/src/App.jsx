import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function App() {
  const [goldData, setGoldData] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3001/getGoldcount')
    .then(goldData => setGoldData(goldData.data))
    .catch(err => console.log(err))
  }, [])

return(
  /*<div className="w-100 vh-100 d-flex justify-content-center align-items-center">
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
  </div>*/
  <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
);
}

export default App;
