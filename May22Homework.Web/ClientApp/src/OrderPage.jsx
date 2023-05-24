import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const OrderPage = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [baseFlavor, setBaseFlavor] = useState('Choose...')
    const [toppings, setToppings] = useState('')
    const [specialRequests, setSpecialRequests] = useState('')
    const [quantity, setQuantity] = useState(1)
    const [dateDelivery, setDateDelivery] = useState('')
    let [didChooseCake, setDidChooseCake] = useState(false)

    const onNameChange = e => {
        setName(e.target.value)
    }
    const onEmailChange = e => {
        setEmail(e.target.value)
    }
    const onSpecialRequestChange = e => {
        setSpecialRequests(e.target.value)
    }
    const onToppingClick = e => {
        const toppingsArray = toppings.split(', ').filter(t => t !== '')
        if (toppingsArray.includes(e.target.name)) {
            setToppings(toppingsArray.filter(t => t !== e.target.name).join(', '))
        } else {
            toppingsArray.push(e.target.name)
            setToppings(toppingsArray.join(', '))
        }
    }
    
    const onQuantityChange = (event) => {
        setQuantity(event.target.value);
    };
    const onDateChange = e => {
        setDateDelivery(e.target.value)
    }

    const onChooseBase = (e) => {
        const flavor = e.target.value;
        setBaseFlavor(flavor); 
        if (e.target.value === 'Choose...') {
            setDidChooseCake(false)
        } else {
            setDidChooseCake(true)
        }
    };

    const onSubmitClick = async () => {
        const price = ((quantity * 49.99) + (toppings.split(', ').filter(t => t !== '').length * 3.95))
        console.log(price)
        await axios.post('/api/cheesecake/addcake', {
            name: name,
            email: email,
            baseFlavor: baseFlavor,
            toppings: toppings,
            specialRequests: specialRequests,
            quantity: quantity,
            dateDelivery: dateDelivery,
            total: ((quantity * 49.99) + (toppings.split(', ').filter(t => t !== '').length * 3.95))
        })
    }

    return (<>

        <h1 className="text-center my-4">Cheesecake Factory Order Form</h1>
        <div className="row">
            <div className="col-md-6">
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" value={name} onChange={onNameChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" value={email} onChange={onEmailChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Cheesecake Base Flavor ($49.99)</label>
                    <select className="form-select" value={baseFlavor} onChange={onChooseBase} >
                        <option value="Choose...">Choose...</option>
                        <option value="Classic">Classic</option>
                        <option value="Chocolate">Chocolate</option>
                        <option value="Red Velvet">Red Velvet</option>
                        <option value="Brownie">Brownie</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">Toppings (each topping adds an additional $3.95)</label>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name='Chocolate Chips' onChange={onToppingClick} />
                        <label className="form-check-label">Chocolate Chips</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name='Carmel Drizzle' onChange={onToppingClick} />
                        <label className="form-check-label">Caramel Drizzle</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name='Whipped Cream' onChange={onToppingClick} />
                        <label className="form-check-label">Whipped Cream</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name='Pecans' onChange={onToppingClick} />
                        <label className="form-check-label">Pecans</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name='Almonds' onChange={onToppingClick} />
                        <label className="form-check-label">Almonds</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name='Toasted Coconut' onChange={onToppingClick} />
                        <label className="form-check-label">Toasted Coconut</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name='Graham Cracker Crumble' onChange={onToppingClick} />
                        <label className="form-check-label">Graham Cracker Crumble</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name='Cookie Dough' onChange={onToppingClick} />
                        <label className="form-check-label">Cookie Dough</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name='Mint Chocolate Chips' onChange={onToppingClick} />
                        <label className="form-check-label">Mint Chocolate Chips</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name='Caramelized Bananas' onChange={onToppingClick} />
                        <label className="form-check-label">Caramelized Bananas</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name='Rainbow Sprinkles' onChange={onToppingClick} />
                        <label className="form-check-label">Rainbow Sprinkles</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name='Powdered Sugar' onChange={onToppingClick} />
                        <label className="form-check-label">Powdered Sugar</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name='White Chocolate Shavings' onChange={onToppingClick} />
                        <label className="form-check-label">White Chocolate Shavings</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name='Peanut Butter Drizzle' onChange={onToppingClick} />
                        <label className="form-check-label">Peanut Butter Drizzle</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name='Dark Chocolate Drizzle' onChange={onToppingClick} />
                        <label className="form-check-label">Dark Chocolate Drizzle</label>
                    </div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Special Requests</label>
                    <textarea className="form-control" rows="3" onChange={onSpecialRequestChange}></textarea>
                </div>
                <div className="mb-3">
                    <label className="form-label">Quantity</label>
                    <input type="number" className="form-control" min="1" value={quantity} onChange={onQuantityChange} />
                </div>
                <div className="mb-3"><label className="form-label">Delivery Date</label>
                    <input type="date" className="form-control" value={dateDelivery} onChange={onDateChange} />
                </div>
                <Link to='/success'>
                    <button type="submit" disabled={!name || !email || baseFlavor === 'Choose...' || !quantity || !dateDelivery} className="btn btn-primary" onClick={onSubmitClick}>Submit Order</button>
                </Link>

            </div>
            <div className="col-md-6 position-sticky" style={{ top: 2 }} />
            <h2 className="mb-4">Live Preview</h2>
            <div className="card" >
                {/* <img src="/cheesecake.jpg" className="card-img-top" alt="Cheesecake" /> */}
                <div className="card-body">
                    <h5 className="card-title">Your Custom Cheesecake</h5>
                    {/* <p className="card-text">Base: {baseFlavor ? { baseFlavor } : 'choose'}</p> */}
                    <p className="card-text">Base:  {baseFlavor}</p>
                    <p className="card-text">Toppings: {toppings} </p>
                    <p className="card-text">Special Requests: {specialRequests} </p>
                    <p className="card-text">Quantity: {quantity}</p>
                    <p className="card-text">Delivery Date: {dateDelivery} </p>
                    {!didChooseCake && <p className="card-text fw-bold">Total: 0</p>}
                    {!!didChooseCake && <p className="card-text fw-bold">Total: {((quantity * 49.99) + (toppings.split(', ').filter(t => t !== '').length * 3.95))
                        .toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>}

                </div>
            </div>
        </div>

    </>)
}

export default OrderPage