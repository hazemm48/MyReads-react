import React, { Component } from "react";
import Grid from './Grid';
class Shelfs extends Component{
    
    render(){
        return(
            <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">{this.props.title}</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                {this.props.books && this.props.books.map( (book) => (<Grid book={book} moveBook={this.props.moveBook} books={this.props.books}/>))}
                </ol>
              </div>
            </div>
            </div>
                )
    }
}
export default Shelfs