import React from 'react';

// WHY DOES THIS WAY NOT WORK? AT THE END OF FEATURE SET 2, ONLY FULL NAME WOULD DISPLAY, AND NO ACTUAL NAMES
// export default function props(){
//     return (
//         <h1>Full Name: {props.firstName} {props.lastName}</h1>
//     )
// }

export default props => {
    return (
        <h1>Full Name: {props.firstName} {props.lastName}</h1>
    )
}


