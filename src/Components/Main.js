import { Navigate, Route, Routes } from 'react-router-dom'
import '../css/generate.css'
import Generate from './Generate'
import Preview from './Preview'
import { Link, useNavigate } from 'react-router-dom'
import ABC from "../userContext"
import { useState } from 'react';
import '../css/main.css'
import axios from 'axios';

function Main() {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

  const [rowData, setRowData] = useState([]);
  const [total, setTotal] = useState(0);
  const [transaction, setTransaction] = useState('');
  const navigate = useNavigate();
  // console.log(transactionP);

  const SaveInvoiceHandler = () => {
    const newInvoice = {
      transaction: transaction,
      total: total,
      date: date,
      items: rowData
    }
    const url = 'http://localhost:5000/invoice';
    axios.post(url, newInvoice)
      .then(res => {
        // console.log(res);
        // console.log(res.data)
        window.alert("Invoice Saved Successfully!")
        navigate('/');
      })

  }

  return (
    <div>
      <div className='export flex-container'>
        <div className='item1 export-head'>Invoice Generator</div>
        <div className='item2 btn-group'>
          <button>Export as pdf</button>
          <button className='add' onClick={SaveInvoiceHandler}>Save Invoice</button>
        </div>
      </div>
      <div className='btn-grp'>
        <Link to="edit">
          <button>Edit</button>
        </Link>
        <Link to="preview">
          <button>Preview</button>
        </Link>
      </div>
      <ABC.Provider value={{ rowData, setRowData, transaction, setTransaction, total, setTotal }}>
        <Routes>
          <Route path='edit' element={<Generate />} />
          <Route path='preview' element={<Preview />} />
        </Routes>
      </ABC.Provider>
    </div>
  )
}

export default Main