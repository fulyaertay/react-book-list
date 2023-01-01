import React, {useContext} from 'react';
import BookDetails from './BookDetails';
import { BookContext } from '../context/BookContext';

const BookList=()=>{
    const {books}=useContext(BookContext);
    return books.length ?(
        <div className="book-list">
            <ul>
                {books.map(book=>{
                    return (<BookDetails book={book} key={book.id}></BookDetails>)
                })}
            </ul>

        </div>

    ):(
        <div className="empty">No books added yet!</div>
    )
}

export default BookList;