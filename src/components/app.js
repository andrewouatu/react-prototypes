import React from 'react';
import { Route } from 'react-router-dom';
import Welcome from './welcome.js';
import Nav from './nav.js';
import Macarons from './our_macarons';
import GiftsParties from './gifts_parties';
import Contact from './contact';

function Container(props){
    return (
        <div className="container">
            <Nav/>
            <Route exact path="/" component={Welcome}/>
            <Route path="/our-macarons" component={Macarons}/>
            <Route path="/gifts-and-parties" component={GiftsParties}/>
            <Route path="/contact" component={Contact}/>
        </div>
    )
}

export default Container;

