import React, { Component } from "react";
import * as BooksAPI from '../BooksAPI'

class Menu extends Component{
   handleChange = async (e) => {
      try {
         const bookId =e.target.closest('li').getAttribute('value')
         const shelf=e.target.value
         await BooksAPI.update(bookId,shelf)  
         this.props.moveBook() 
      }catch(error){
          console.log(error)
         }       
      }

   render() {
   return(
    <div className="book-shelf-changer">
    <select onChange={this.handleChange} defaultValue={this.props.shelf}>
       <option value="move" disabled >Move to...</option>
       <option value="currentlyReading">Currently Reading</option>
       <option value="wantToRead">Want to Read</option>
       <option value="read">Read</option>
       <option value="none">None</option>
    </select>
    </div>
    )
   }
}

export default Menu
