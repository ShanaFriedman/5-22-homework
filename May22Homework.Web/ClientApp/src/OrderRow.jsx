import React from 'react';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
const OrderRow = ({ cheeseCake }) => {

    const { name, email, baseFlavor, toppings, specialRequests, quantity, dateDelivery, total, id } = cheeseCake
    // const formattedPrice = new Intl.NumberFormat('en-US', {
    //     style: 'currency',
    //     currency: 'USD',
    // }).format(total);

    return (<>
        <tr style={{ backgroundColor: "rgb(248, 249, 250)", borderRadius: 15 }}>
            <td style={{ paddingTop: 15, paddingBottom: 15 }}>
                <Link to={`/orderdetails/${id}`}>
                    {name} - {email}
                </Link>
            </td>
            <td>{baseFlavor}</td>
            <td>{toppings}</td>
            <td>{specialRequests ? specialRequests : "N/A"}</td>
            <td>{quantity}</td>
            <td>{dayjs(dateDelivery).format("MMMM/DD/YYYY")}</td>
            <td>{total.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
        </tr>
    </>)
} 

export default OrderRow;