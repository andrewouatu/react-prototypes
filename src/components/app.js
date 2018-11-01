import React from 'react';
import Table from './table';

const students = [
    {
        student: "Tweety Bird",
        course:  "Aviation",
        grade: 75,
    },
    {
        student: "Sylvester Cat",
        course: "Speech",
        grade: 50,
     },
     {
        student: "Elmer Fudd",
        course: "Hunting",
        grade: 80,
     },
];

function App(){
    return (
        <div className="container">
            <h1>Student Grade Table</h1>
            <Table data = {students}/>
        </div>
    )
}

export default App;






