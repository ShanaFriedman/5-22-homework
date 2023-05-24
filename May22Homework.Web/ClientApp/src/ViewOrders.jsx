import React, { useState, useEffect } from 'react';
import OrderRow from './OrderRow';
import axios from 'axios';

const ViewOrders = () => {

    let [cheeseCakes, setCheeseCakes] = useState([])

    useEffect (() => {
        let getCakes = async() => {
            let {data} = await axios.get('/api/cheesecake/getall')
            setCheeseCakes(data)
        }

        getCakes()
    }, [])

    return (<><div className="d-flex justify-content-center">
        <table
            className="table text-center shadow-lg"
            style={{
                borderCollapse: "separate",
                borderSpacing: "0px 15px",
                maxWidth: "80%"
            }}
        >
            <thead>
                <tr
                    style={{
                        backgroundColor: "rgb(33, 37, 41)",
                        color: "white",
                        borderRadius: 15
                    }}
                >
                    <th>Name/Email</th>
                    <th>Base Flavor</th>
                    <th>Toppings</th>
                    <th>Special Requests</th>
                    <th>Quantity</th>
                    <th>Delivery Date</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                 {cheeseCakes.map(c => <OrderRow
                    cheeseCake={c} 
                    key={c.id}/>)}
            </tbody>
        </table>
    </div>
    </>)
}

export default ViewOrders
