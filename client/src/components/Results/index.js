import React from "react";
import ResultItems from "../ResultList"

function Results(props) {
  
    return (
    <div>
    <h3>Results</h3>
    <ul className="list-group mb-5">
    {props.results.map(item => (
        item.volumeInfo.hasOwnProperty("imageLinks") ? (<ResultItems searchPage={true} key={item.id} title={item.volumeInfo.title} authors={JSON.stringify(item.volumeInfo.authors)} description={item.volumeInfo.description} imageurl={item.volumeInfo.imageLinks.thumbnail} bookLink={item.volumeInfo.previewLink} />) :
        (
         <ResultItems searchPage={true} key={item.id} title={item.volumeInfo.title} authors={JSON.stringify(item.volumeInfo.authors)} description={item.volumeInfo.description} bookLink={item.volumeInfo.previewLink} />
        )
    ))}
    </ul>
    </div>
     
    )
}

export default Results;