import React from "react"
import API from "../../utils/API"

function ResultList(props) {

    console.log(props);

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
            })
            .catch(err => console.log(err));
    };

    // Deletes a book from the database with a given id, then reloads books from the db
    // function deleteBook(id) {
    //     API.deleteBook(id)
    //         .then(res => {
    //             console.log(res);
    //         })
    //         .catch(err => console.log(err));
    // }

    function viewBooks() {
        window.open(props.bookLink, '_blank');
    }

    // onClick={() => props.deleteFunc(props.bookid)}

    return (
        <div className="list-group-item list-group-item-action">
            <div className="row">
                <div className="col-10 col-md-10 col-sm-10">
                    <div className="book-heading">
                        {props.title}
                    </div>
                    <p className="book-authors">Written By: {props.authors}</p>
                </div>
                <div className="col-2 col-md-2 col-sm-2">
                    <button className="btn-primary btn-md" onClick={viewBooks}>View</button>
                    {props.searchPage ? <button className="btn-primary btn-md mr-2" onClick={saveBook}>Save</button> :
                        <button className="btn-primary btn-md mr-2" onClick={() => props.deleteFunc(props.bookid)}>Delete</button>}
                </div>
            </div>
            <div className="row">
                <div className="col-2 col-md-2 col-sm-2">
                    <img src={props.imageurl} alt="Book Thumbnail" />
                </div>
                <div className="col-10 col-md-10 col-sm-10">
                    <p>{props.description}</p>
                </div>
            </div>
        </div>

    )
}

export default ResultList;