import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

function Books() {
  // Setting our component's initial state
  const [books, setBooks] = useState([])

  // Load all books and store them with setBooks
  useEffect(() => {
    loadBooks()
  }, [])

  // Loads all books and sets them to books
  function loadBooks() {
    API.getBooks()
      .then(res => 
        setBooks(res.data)
      )
      .catch(err => console.log(err));
  };

    return (
        <div className="container">
        <Navbar />
        <Jumbotron />
        <br />
        {books.length>0 ? (<Results isSearchPage={false} results={books} />) : <h1> No results to display </h1>}
    </div>
    );
  }


export default Books;
