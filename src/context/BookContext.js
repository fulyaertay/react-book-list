import React,{createContext,useState} from 'react';

export const BookContext=createContext();
const BookContextProvider=(props)=>{
    const [books,setBooks]=useState([
        {
            title:'Dönüşüm',
            author:'Franz Kafka',
            id:1
        },
        {
            title:'Hayavn Çiftliği',
            author:'George Orwell',
            id:2

        }
    ]);
    const addBook=(title,author)={
        setBooks([...books,{title,author,id:3}])
    }
    return(
        <BookContext.Provider value={{books}}>
            {props.children}
        </BookContext.Provider>

    )
}

export default BookContextProvider