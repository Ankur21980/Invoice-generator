import React, { useEffect, useState, useContext } from 'react'
import '../css/generate.css'
import axios from 'axios';
import data1 from '../data.json';
import ABC from "../userContext";

function Generate() {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
    // const {value, setValue} = useContext(ABC);
    // const {transactionP, setTransactionP} = useContext(ABC);
    // const {totalP, setTotalP} = useContext(ABC);

    // const {totalP, setTotalP} = useContext(ABC);
    //For API
    const [products, setProducts] = useState([]);
    const [singleProduct, setSingleProduct] = useState([]);
    const [qty, setQty] = useState(1);
    //END
    // const [rowData, setRowData] = useState([]);
    // const [total, setTotal] = useState(0);
    // const [transaction, setTransaction] = useState('');
    const {rowData, setRowData} = useContext(ABC);
    const {total, setTotal} = useContext(ABC);
    const {transaction, setTransaction} = useContext(ABC);
    

    //Api Fetch
    useEffect(function () {
        axios
            .get("https://fakestoreapi.com/products")
            .then((response) => setProducts(response.data))
            .then((error) => console.log(error));
    }, []);

    const onChanged = (e) => {
        axios
            .get("https://fakestoreapi.com/products/" + e.target.value)
            .then((response) => setSingleProduct(response.data))
            .then((error) => console.log(error));
    };
    //END

    const AddNewRowHandler = () => {

        const emptyRow = {
            description: singleProduct.title,
            rate: singleProduct.price,
            qty1: qty,
            lineTotal: singleProduct.price * qty
        }

        setTotal(singleProduct.price * qty + total)
        setRowData([...rowData, emptyRow]);
        // setValue([...rowData, emptyRow]);
        // setTransactionP(transaction);
        // setTotalP(singleProduct.price * qty + total);

    }

    const handleTransaction = event => {
        setTransaction(event.target.value);
    }

    const handleQty = event => {
        setQty(event.target.value);
    }
    
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
                                <input className="transaction" type="text" name="transaction" onChange={handleTransaction} value={transaction} 
                                placeholder="Enter transaction name"/>
                                <br />
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
                                <tr>
                                    <td>
                                        <select onChange={onChanged} className="list">
                                            <option value="0">Add Product</option>
                                            {products.map((product) => (
                                                <option key={product.id} value={product.id}>
                                                    {product.title}
                                                </option>
                                            ))}
                                        </select>
                                    </td>
                                    <td>Rs.{singleProduct.price}</td>
                                    <td><input className="qty" type="number" onChange={handleQty} value={qty} /></td>
                                    <td>Rs.{qty * singleProduct.price}</td>
                                </tr>
                            </tbody>
                        </table>
                        <button className='add' onClick={AddNewRowHandler}>Add Product</button>
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

export default Generate