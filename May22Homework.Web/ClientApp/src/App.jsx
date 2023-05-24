import React from 'react';
import './App.css';
import Layout from './Layout';
import { Route, Routes } from 'react-router-dom';
import Home from './HomePage';
import OrderPage from './OrderPage';
import ViewOrders from './ViewOrders';
import OrderDetails from './OrderDetails';
import Success from './assets/Success';

class App extends React.Component {

    render() {
        return (
            <Layout>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/orderPage' element={<OrderPage/>}/>
                    <Route exact path='/vieworders' element={<ViewOrders/>}/>
                    <Route exact path='/orderdetails/:id' element={<OrderDetails/>}/>
                    <Route exact path='/Success' element={<Success/>}/>
                </Routes>
            </Layout>
        );
    }
};

export default App;