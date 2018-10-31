import React from 'react';
import ReactDOM from 'react-dom';

var user = {
    name: "Andrew",
    luckyNumber: luckyNumber(),
};

ReactDOM.render(
    greeting(user),
    document.getElementById('root')
);


function luckyNumber(){
    var randomNum = Math.floor(Math.random() * 1000) + 1;
    return randomNum;
};

function greeting(object){
    return (<div className="container">
            <h1>Welcome {object.name}</h1>
            <h2 className="text-muted">Your lucky number is: {object.luckyNumber}</h2>
            </div>)
};




