import React from "react"
import FA from "react-fontawesome"

//use axios call here to get data.  
function Table(props) {
    // console.log(props.employee)
    return (
        <div>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Name<button onClick={props.sort}>sort</button></th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">DOB</th>
                    </tr>
                </thead>
                <tbody>
                    {props.employee.map(person =>
                        <tr>
                            <th><img src={person.picture.large} alt="Epicture"></img></th>
                            <td>{person.name.first} {person.name.last}</td>
                            <td value={person.cell}>{person.cell}</td>
                            <td>{person.email}</td>
                            <td>{person.dob.date.slice(0, 7)}</td>
                        </tr>
                    )}
                </tbody>
            </table >

        </div>
    )
}
export default Table