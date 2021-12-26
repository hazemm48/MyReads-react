import React, { Component } from "react";
import Menu from './Books'

class Grid extends Component{
render(){
    return(<div>
        <li value={this.props.book.id}>
        <div className="book" >
          <div className="book-top">
            <div className="book-cover" style={{
              width: 128, height: 193, 
              backgroundImage:`url(${this.props.book.imageLinks ? this.props.book.imageLinks.thumbnail : '' })`}}>
              </div>
            <Menu moveBook={this.props.moveBook} shelf={this.props.book.shelf} />
          </div>
          <div className="book-title">{this.props.book.title ? this.props.book.title : 'No title'}</div>
          <div className="book-authors">{this.props.book.authors ? this.props.book.authors: 'No authors' }</div>
        </div>
      </li>
</div>)
}
}
export default Grid
