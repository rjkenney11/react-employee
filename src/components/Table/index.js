import React, { Component } from 'react';
import API from "../../utils/API.js";
import './style.css';


class DataTable extends Component {
    // Logic 
    state = {
        employees: []
    }

    componentDidMount() {
        // Make A Request for that Data (from the API)
        API.getEmployees().then((res) => {
            console.log(res);
                const mapEmployees = res.data.results.map((emp) =>{
                    return {
                        id: emp.id.value,
                        pic: emp.picture.thumbnail,
                        firstName: emp.name.first,
                        lastName: emp.name.last,
                        age: emp.dob.age,
                        phone: emp.phone,
                        email: emp.email
                    }
                });
                // Once we have the data --> Update our STATE 
                this.setState({ employees: mapEmployees });
            })
            .catch(err => {
                console.log(err);
            })

    }


    // Display Component View
    render() {
        console.log(this.state);
        let tableThing;
        if (this.state.employees[0]) tableThing = 
        <tbody>
        <img src={this.state.employees[0].pic} className="thumbnail" alt="thumbnail" />
        <td>{this.state.employees[0].firstName}</td>
        <td>{this.state.employees[0].lastName}</td>
        <td>{this.state.employees[0].age}</td>
        <td>{this.state.employees[0].phone}</td>
        <td>{this.state.employees[0].email}</td>
        </tbody>
        return (
            <body>
                <h1>Data table</h1>
                <div className="employee-list">
                    <table>
                        <thead>
                            <tr>
                                <th>Profile Picture</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Age</th>
                                <th>Phone #</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        {tableThing}
                    </table>
                </div>
            </body>
        )
    }
}


export default DataTable;