import React from 'react';
import { Link } from 'react-router-dom';

function nav(props){
    return (
        <ul className="nav nav-tabs mt-3">
            <li className="nav-item">
                <Link to="/" className="nav-link">Welcome</Link>
            </li>
            <li>
                <Link to="/our-macarons" className="nav-link">Our Macarons</Link>
            </li>
            <li>
                <Link to="/gifts-and-parties" className="nav-link">Gifts & Parties</Link>
            </li>
            <li>
                <Link to="/contact" className="nav-link">Contact</Link>
            </li>
        </ul>
    )
}

export default nav;