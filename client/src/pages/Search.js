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
    const [noresultsmsg, setNoResultsMsg] = useState();


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
                     setNoResultsMsg("No Results to Display")
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
        {books.length>0 ? (<Results results={books} />) : <h2> {noresultsmsg} </h2>}
        
    </div>
);

}

    


export default Search;