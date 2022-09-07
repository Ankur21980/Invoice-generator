import React from 'react'
import '../css/header.css';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
        <h1>Invoice Generator</h1>
        <div className='generateF'>
            <input type="text" placeholder='Enter name'/>
            <Link to="generate"><button>Generate Invoice</button></Link>
        </div>
    </div>
  )
}

export default Header