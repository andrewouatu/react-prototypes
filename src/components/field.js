import React from 'react';

export default function(props){

    return (
        <div className="form-group">
            <label>{props.label}</label>
            <input {...props} className="form-control" />
        </div>
    )
}

