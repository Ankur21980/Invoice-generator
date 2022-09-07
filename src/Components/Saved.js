import React, { useContext } from 'react';
import { useState } from 'react';
import '../css/saved.css';
import '../css/invoice.css'


function Saved(props) {


    const [hide, setHide] = useState(false);
    const onClick = () => {
        setHide(!hide);
    }
    return (
        <div className='invoices'>
            <div className='saved'>
                <div className='flex-container'>
                    <div className='item1'>
                        <h3>{props.invoice.transaction}</h3>
                        <p>{props.invoice.date}</p>
                    </div>
                    <div className='item2'>
                        <button onClick={onClick}>
                            View Invoice
                        </button>
                    </div>
                </div>
                {hide ? <div className='invoice'>
                    <hr className='top' />
                    <div className='content'>
                        <div className='top-content flex-container'>
                            <div className='item1 invoice-head'>
                                Invoice Generator
                            </div>
                            <div className='item2'>
                                13/b, Navdurga Society, Nizampura
                                <br />
                                Vadodara
                                <br />
                                Gujrat
                                <br />
                                02225344386
                                <br />
                                400607
                                <br />
                                India
                            </div>
                        </div>
                        <div className='main-content flex-container'>
                            <div className='item1'>
                                <h3>
                                    {props.invoice.transaction}
                                    <br />
                                </h3>
                                Paid on {props.invoice.date}
                            </div>
                            <div className='item2'>
                                <h4>
                                    Amount Paid
                                    <br />
                                </h4>
                                <span>{props.invoice.total}</span>
                            </div>
                        </div>
                        <div className='table-content'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Description</th>
                                        <th>Rate</th>
                                        <th>Qty</th>
                                        <th>Line Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {props.invoice.items.map((item, idx) => (
                                        <tr key={idx}>
                                            <td>{item.description}</td>
                                            <td>Rs.{item.rate}</td>
                                            <td>{item.qty1}</td>
                                            <td>Rs.{item.lineTotal}</td>

                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className='total'>
                            <div>Total <hr /></div>
                            <div>{props.invoice.total} <hr /></div>
                        </div>

                    </div>
                </div>
                    : null}
            </div>
        </div>
    )
}

export default Saved;