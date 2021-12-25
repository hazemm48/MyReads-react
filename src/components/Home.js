import React,{ Component } from "react";
import Shelfs from'./Shelf'
import * as BooksAPI from '../BooksAPI'
import { Link } from "react-router-dom";

class Home extends Component {
    state ={
        books:[],
        currentRead:[],
        wantRead:[],
        read:[],
        viewBooks:(books)=>{
            const currentRead= books.filter(book => book.shelf == "currentlyReading")
            const wantRead= books.filter(book => book.shelf == "wantToRead")
            const read= books.filter(book => book.shelf == "read")
            this.setState(()=>({
                books:books,
                currentRead:currentRead,
                wantRead:wantRead,
                read:read
            }))},
        moveBook:(bookId,shelf,newState)=>{
            const newBooks = this.state.books.map(book =>{
                const found = newState[shelf].find(
                bookId =>bookId == book.id
                )
                if(found){
                    book.shelf=shelf
                    console.log(found)
                }
                return book 
            })
            this.state.viewBooks(newBooks)
        }
    }

    async componentDidMount(){
        try{
        const allBooks = await BooksAPI.getAll()
        this.state.viewBooks(allBooks)
        }
        catch(error){
            console.log(error)}
        }
        
    render(){
    return(
        <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <Shelfs title='Currently reading' books={this.state.currentRead} moveBook={this.state.moveBook} />
        <Shelfs title='Want to read' books={this.state.wantRead} moveBook={this.state.moveBook} />
        <Shelfs title='Read' books={this.state.read} moveBook={this.state.moveBook} />
        <div className="list-books-content">
        </div>
        <div className="open-search">
          <Link className="open-search-link" to='/search'>Add a book</Link>
        </div>
        </div>
          )}
}
export default Home