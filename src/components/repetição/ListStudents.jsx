import React from "react";
import students from "../../data/students";

export default props => {

    const studentsJSX= students.map((student)=>{

        return (
            <li key={student.id}>
                {student.id}) {student.name} = {student.nota}
            </li>
        );

    });

    return (
        <div>
            <ul style={{ listStyle: 'none'}}>
                {studentsJSX}
            </ul>
        </div>
    )
}