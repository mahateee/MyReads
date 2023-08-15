import "../App.css";
import { useState,useEffect } from "react";
import Book from "./Book";
import React from "react";
import * as BooksAPI from "../BooksAPI";
import Bookshelf from './Bookshelf'
import { Link } from "react-router-dom";
import BookDetail from './BookDetail'
function Home() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    BooksAPI.getAll().then(booksFromApi => {
      setBooks(booksFromApi);
    });
   
  }, []);
  const bookshelf=[
    {title:'currently Reading',shelfName:"currentlyReading"}
    ,{title:'want to read',shelfName:'wantToRead'}
    ,{title:'read',shelfName:'read'}
  ]
  console.log(books)
  return (
    <div className="app">
         
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
          
            {bookshelf.map((b, index) => (
              <Bookshelf
                key={index}
                shelfTitle={b.title}
                books={
                  books &&
                  books.filter(
                    book => book && book.shelf === b.shelfName
                  )
                }
                setBooks={setBooks}
              />
            ))}
            </div>
          </div>
          <div className="open-search">
          <Link to="/search"> <a>search a book</a> </Link>

        
          </div>
        </div>
      
    </div>
  );
}

export default Home;