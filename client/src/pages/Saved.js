import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import SavedResults from "../components/SavedResults"
import Navbar from "../components/Navbar"

function Books() {
  // Setting our component's initial state
  const [books, setBooks] = useState([])

  // Load all books and store them with setBooks
  useEffect(() => {
    loadBooks()
  }, [books])

  // Loads all books and sets them to books
  function loadBooks() {
    API.getBooks()
      .then(res => 
        setBooks(res.data)
      )
      .catch(err => console.log(err));
  };

   //Deletes a book from the database with a given id, then reloads books from the db
    function deleteBook(id) {
        API.deleteBook(id)
            .then(res => {
                console.log(res);
            })
            .catch(err => console.log(err));
    }


    return (
        <div className="container">
        <Navbar />
        <Jumbotron />
        <br />  
        {books.length>0 ? (<SavedResults results={books} deleteFunc={deleteBook}/>) : <h1> No results to display </h1>}
    </div>
    );
  }


export default Books;
