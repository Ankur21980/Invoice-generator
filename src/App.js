import './css/App.css';
import './Components/Header';
import { Route, Routes } from 'react-router-dom';
import Saved from './Components/Saved';
import Header from './Components/Header';
import Main from './Components/Main'
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [invoices, setInvoices] = useState([]);

  useEffect(function () {
    axios
      .get("http://localhost:5000/fetchall")
      .then((response) => setInvoices(response.data))
      .then((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<div>
          <Header />
          <hr className='separator' />
          <h2 className='save-head'>Saved Invoices</h2>
          {invoices.map((i) => (
              <Saved key={i._id} invoice = {i} />
          ))}
          
        </div>} />
        <Route path='/generate/*' element={<Main />} />
      </Routes>


    </div>
  );
}

export default App;
