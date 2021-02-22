import React from "react";

function SearchForm(props) {
  return (
    <div>
    <h5>Book Search </h5> 
    <form>
      <div className="form-group">
        <label htmlFor="book">Search:</label>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Enter Book Title"
          id="search"
        />
        <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3">
          Search
        </button>
      </div>
    </form>
    </div>
  );
}

export default SearchForm;