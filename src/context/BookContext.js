import React,{createContext,useState,useEffect} from 'react';
import  {v1 as uuid}  from 'uuid';
export const BookContext=createContext();
const BookContextProvider=(props)=>{
    const [books,setBooks]=useState(()=>{
        const savedItem = localStorage.getItem("books");
        const parsedItem = JSON.parse(savedItem);
        return parsedItem || "";
    });
    useEffect(()=>{
        localStorage.setItem('books',JSON.stringify(books));
        

    },[books])
   
    const addBook=(title,author)=>{
        setBooks([...books,{title,author,id:uuid()}]);
    }
    const removeBook=(id)=>{
        setBooks(books.filter(book=>book.id!==id));
    }
    
    return(
        <BookContext.Provider value={{books,addBook,removeBook}}>
            {props.children}
        </BookContext.Provider>
        

    )
}

export default BookContextProvider;