import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const OrderDetails = () => {
    const [order, setOrder] = useState('')

    const { id } = useParams()

    useEffect(() => {
        const getOrder = async () => {
            const { data } = await axios.get('/api/cheesecake/getcakebyid', { params: { id: id } })
            setOrder(data)
        }

        getOrder()
    }, [])
    

    return (<div className="container" style={{ marginTop: 80 }}>
        <div className="d-flex align-items-center justify-content-center" style={{ height: 600 }}>
            <div className="card text-center shadow p-3 mb-5 bg-body rounded" style={{ width: 300, backgroundColor: "rgb(248, 249, 250)" }}>

            
        
        <div className="card-body">
            <h3 className="card-title fw-bold">{order.name}</h3>
            <p className="card-text fs-5">{order.email}</p>
            <p className="card-text fs-5">{order.baseFlavor}</p>
            <p className="card-text fs-5">
                {order.toppings}
            </p>
            <p className="card-text fs-5">{order.specialRequests}</p>
            <p className="card-text fs-5">{order.quantity}</p>
            <p className="card-text fs-5">{dayjs(order.dateDelivery).format("MMMM/DD/YYYY")}</p>
            <p className="card-text fs-5">{order.total}</p>
            <Link to='/vieworders'>
                <button className="btn btn-primary w-100" >Back to Orders</button>
            </Link>
            </div>
        </div>
        </div>
    </div>)
}

export default OrderDetails