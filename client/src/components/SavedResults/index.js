import React from "react";
import ResultItems from "../ResultList"

function SavedResults(props) {
  
    return (
    <div>
    <h3>Saved Books</h3>
    <ul className="list-group mb-5">
    {props.results.map(item => (
        item.hasOwnProperty("imageURL") ? (<ResultItems searchPage={false} deleteFunc={props.deleteFunc} key={item._id} bookid={item._id} title={item.title} authors={JSON.stringify(item.authors)} description={item.description} imageurl={item.imageURL} bookLink={item.bookLink} />) :
        (
         <ResultItems searchPage={false} key={item._id} title={item.title} deleteFunc={props.deleteFunc} bookid={item._id} authors={JSON.stringify(item.authors)} description={item.description} bookLink={item.bookLink} />
        )
    ))}
    </ul>
    </div>
     
    )
}

export default SavedResults;