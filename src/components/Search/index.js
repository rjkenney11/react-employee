import React, { Component } from 'react';
import API from "../../utils/API.js";
import './style.css';

const Search = (emp) => {
//const context = useContext(DataAreaContext)

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