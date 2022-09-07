import React, { useContext, useEffect, useState } from 'react'
import ABC from "../userContext";
import '../css/generate.css'

function Preview() {

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
    const {rowData} = useContext(ABC);
    const {total} = useContext(ABC);
    const {transaction} = useContext(ABC);

    return (
        <div className='generate'>
            <div className='invoice'>
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
                                <h2>{transaction}</h2>
                            </h3>
                            Paid on {date}
                        </div>
                        <div className='item2'>
                            <h4>
                                Amount Paid
                                <br />
                            </h4>
                            <span>Rs.{total}</span>
                        </div>
                    </div>
                    <div className='table-content'>
                        <table>
                            <col style={{ width: "40%" }} />
                            <col style={{ width: "20%" }} />
                            <col style={{ width: "20%" }} />
                            <col style={{ width: "20%" }} />
                            <thead>
                                <tr>
                                    <th>Description</th>
                                    <th>Rate</th>
                                    <th>Qty</th>
                                    <th>Line Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rowData.map((row, index) => (
                                    <tr key={index}>
                                        <td>{row.description}</td>
                                        <td>Rs.{row.rate}</td>
                                        <td>{row.qty1}</td>
                                        <td>Rs.{row.lineTotal}</td>

                                    </tr>
                                ))}
                                
                            </tbody>
                        </table>
                    </div>

                    <div className='total'>
                        <div>Total <hr /></div>
                        <div>Rs.{total} <hr /></div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Preview