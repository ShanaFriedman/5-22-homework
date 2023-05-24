import { Link } from 'react-router-dom';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
    return (<>
        <div className="d-flex align-items-center justify-content-center" style={{height: 600,  backgroundColor: 'lightgray'}}>
            <div className="text-center">
                <h1 className="display-4">Welcome to the Cheesecake Factory</h1>
                <p className="lead">
                    <Link to="/orderPage">
                        <button className="btn btn-dark btn-lg" >Click here to order your own custom cheesecake</button>
                    </Link>
                </p>
            </div>
        </div>
    </>)
}

export default Home