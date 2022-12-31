import React,{useContext} from "react";
import { BookContext } from "../context/BookContext";
const Navbar=()=>{
    const {books}=useContext(BookContext);
    return(

        <div classname="navbar">
            <h2>AOS Book List</h2>
            <p>{books.length} books</p>
        </div>
    )
}
export default Navbar;