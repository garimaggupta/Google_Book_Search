import React, { useState } from "react";
//import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import SearchForm from "../components/SearchForm";
import Navbar from "../components/Navbar"
import Results from "../components/Results"

function Search() {
    // Setting our component's initial state
    const [books, setBooks] = useState([])
    const [title, setTitle] = useState()


    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
        const { value } = event.target;
        setTitle(value);
    };

    function searchBooks(query) {
        API.search(query)
            .then(res =>
                {
                     //console.log(res);
                     setBooks(res.data.items);
                })
            .catch(err => console.log(err));
    };


    function handleFormSubmit(event) {
        event.preventDefault();
        searchBooks(title);
        //console.log(books);
    }


return (
    <div className="container">
        <Navbar />
        <Jumbotron />
        <SearchForm
            search={title}
            handleFormSubmit={handleFormSubmit}
            handleInputChange={handleInputChange}
        /> <br/> <br />
        {books.length>0 ? (<Results isSearchPage={true} results={books} />) : <h1> No results to display </h1>}
        
    </div>
);

}

    


export default Search;