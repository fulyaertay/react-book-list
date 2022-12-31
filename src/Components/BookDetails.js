import React, {useContext} from 'react';
import { BookContext } from '../context/BookContext';

const BookDetails=({book})=>{
    const {removeBook}=useContext(BookContext);
    return(
        <li onAuxClick={()=>removeBook(book.id)}>
            <div class="title">
                {book.title}
            </div>
            <div class="author">
                {book.author}
            </div>
        </li>
    )
}
export default BookDetails;