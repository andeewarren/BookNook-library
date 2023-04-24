import React from "react";

function ListLength({ books } ) {
    return (
        <div className='length'>
            <h4 id='list-length'>
                You have {books.length} books in your library
            </h4>
        </div>
    )
}

export default ListLength;