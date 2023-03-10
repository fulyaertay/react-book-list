import React,{useContext} from "react";
import { BookContext } from "../context/BookContext";
const Navbar=()=>{
    const {books}=useContext(BookContext);
    return(

        <div className="navbar">
            <h2>AOS Book List</h2>
            <p>{books.length} books found!</p>
        </div>
    )
}
export default Navbar;