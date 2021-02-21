import React, {useState} from "react"
import {Redirect} from "react-router-dom"
import API from "../../utils/API"

function ResultList(props) {

   const [redirect, setReDirect] = useState(null);

    function saveBook() {
          API.saveBook({
            title: props.title,
            authors: props.authors,
            description: props.description,
            imageURL: props.imageurl,
            bookLink: props.bookLink
          })
            .then(res => {
                console.log(res);
                setReDirect("/saved");
            })
            .catch(err => console.log(err));
      };

  // Deletes a book from the database with a given id, then reloads books from the db
  function deleteBook(id) {
    API.deleteBook(id)
      .then(res => {
        console.log(res);
        setReDirect("/saved");
    })
      .catch(err => console.log(err));
  }

    if(!redirect) {
    return (
        <div className="list-group-item list-group-item-action">
            <div className="row">
                <div className="col-10">
                   <div className="book-heading">
                    {props.title}
                    </div>
                    <p className="book-authors">Written By: {props.authors}</p>
                </div>
                <div className="col-2">
                    <button className="btn-primary btn-md">View</button>
                    {props.searchPage?<button className="btn-primary btn-md mr-2" onClick={saveBook}>Save</button>:
                    <button className="btn-primary btn-md mr-2" onClick={deleteBook(props.id)}>Delete</button>}
                </div>
            </div>
            <div className="row">
                <div className="col-2">
                    <img src={props.imageurl} alt="Book Thumbnail" />
                </div>
                <div className="col-10">
                    <p>{props.description}</p>
                </div>
            </div>
        </div>

    )
    } else {
       return <Redirect to pathname={redirect} />
    }

}

export default ResultList;