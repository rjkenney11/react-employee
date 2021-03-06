import React, { Component } from 'react';
import API from "../../utils/API.js";
import './style.css';


class DataTable extends Component {
    // Logic 
    state = {
        employees: [],
        filteredEmployees: [],
        search: ""
    }

    componentDidMount() {
        // Make A Request for that Data (from the API)
        API.getEmployees().then((res) => {
            console.log(res);
            const mapEmployees = res.data.results.map((emp) => {
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
            this.setState({ ...this.state, filteredEmployees: this.state.employees })
        })
            .catch(err => {
                console.log(err);
            })

    }


    filterList = e => {
        const filterTarget = e.target.value;
        let employeeList = this.state.employees;
        employeeList = employeeList.filter(i => {
            let values = Object.values(i)
                .join("")
                .toLocaleLowerCase();
            return values.indexOf(filterTarget.toLowerCase()) !== -1;
        })
        this.setState({ filteredEmployees: employeeList });
    }

    render() {
        return (
            <div className="filter-list">
                <input className="search" type="text" placeholder='Search directory for Employee' onChange={this.filterList} />
                <body>
                    <h1></h1>
                    <div className="employee-list">
                        <table>
                            <thead>
                                <tr>
                                    <th className="pic">Profile Picture</th>
                                    <th className="fname">First Name</th>
                                    <th className="lname">Last Name</th>
                                    <th className="age">Age</th>
                                    <th className="phone">Phone #</th>
                                    <th className="email">Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.filteredEmployees[0] ?

                                        this.state.filteredEmployees.map(emp => (
                                            <tr>
                                                <td><img src={emp.pic} className="thumbnail" alt="thumbnail" /></td>
                                                <td>{emp.firstName}</td>
                                                <td>{emp.lastName}</td>
                                                <td>{emp.age}</td>
                                                <td>{emp.phone}</td>
                                                <td>{emp.email}</td>
                                            </tr>
                                        ))
                                        :
                                        this.state.employees.map(emp => (
                                            <tr>
                                                <td><img src={emp.pic} className="thumbnail" alt="thumbnail" /></td>
                                                <td>{emp.firstName}</td>
                                                <td>{emp.lastName}</td>
                                                <td>{emp.age}</td>
                                                <td>{emp.phone}</td>
                                                <td>{emp.email}</td>
                                            </tr>
                                        ))
                                }
                            </tbody>
                        </table>
                    </div>
                </body>

            </div>
        )
    }
}




//     // Display Component View
//     render() {
//         console.log(this.state);

//         return (
//             <body>
//                 <h1></h1>
//                 <div className="employee-list">
//                     <table>
//                         <thead>
//                             <tr>
//                                 <th className="pic">Profile Picture</th>
//                                 <th className="fname">First Name</th>
//                                 <th className="lname">Last Name</th>
//                                 <th className="age">Age</th>
//                                 <th className="phone">Phone #</th>
//                                 <th className="email">Email</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//   
//                         </tbody>
//                     </table>
//                 </div>
//             </body>
//         )
//     }
// }


export default DataTable;