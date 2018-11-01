import React from 'react';

function table(props){
    const tableRows = props.data.map(function(item, index){
        return (
            <tr key={index}>
                <td>{item.student}</td>
                <td>{item.course}</td>
                <td>{item.grade}</td>
            </tr>
        );
    });

    console.log('Table Rows:', tableRows);

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
                    {tableRows}
                </tbody>
            </table>
    )
}

export default table;
