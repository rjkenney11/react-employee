import React, { Component } from 'react';
import API from "../../utils/API.js";
import './style.css';

const Search = (emp) => {
//const context = useContext(DataAreaContext)
// emp = data in search field
// emp=tolowercase(emp)
// create a new array of the filtered results
// var filteredEmployees = employees.map((person) => tolowercase(person.firstName).includes(emp) 
//                                          || tolowercase(person.lastName).includes(emp) 
//                                          || person.email.includes(emp)}
// once you have your new array, you can save it to state
// maybe have two employee arrays in state -- one is the original employee
// second one is filtered. ON initial page load, set filtered list to equal api results,
// render from filtered list


return (
  <form>
  <div className="form-group search-widget">
    <div className="input-group mb-3">

      <input
        onChange={emp.handleInputChange}
        value={emp.search}
        name="search"
        type="text"
        className="form-control"
        placeholder='Search directory for Employee'
        id="search"
      />
    </div>
  </div>
</form>
);
}
export default Search;