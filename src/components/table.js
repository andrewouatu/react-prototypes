import React from 'react';

function table(){
    return (
            <table className="table">
                <thead className="thead-inverse">
                    <tr>
                        <th>Name</th>
                        <th>Course</th>
                        <th>Grade</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Bugs Bunny</td>
                        <td>Agriculture</td>
                        <td>75</td>
                    </tr>
                    <tr>
                        <td>Wiley E Coyote</td>
                        <td>Explosives</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td>Road Runner</td>
                        <td>Track and Field</td>
                        <td>95</td>
                    </tr>
                </tbody>
            </table>
    )
}

export default table;
