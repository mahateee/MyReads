import "../App.css";
import { useState,useEffect } from "react";
import Book from "./Book";
import React from "react";
import * as BooksAPI from "../BooksAPI";
import Bookshelf from './Bookshelf'
import { Link } from "react-router-dom";
import BookDetail from './BookDetail'
function Home() {
  const [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    BooksAPI.getAll().then(booksFromApi => {
      setAllBooks(booksFromApi);
    });
   
  }, []);
  const bookshelf=[
    {title:'currently Reading',shelfName:"currentlyReading"}
    ,{title:'want to read',shelfName:'wantToRead'}
    ,{title:'read',shelfName:'read'}
  ]
  console.log(allBooks)
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
                  
                  allBooks.filter(
                    book => book && book.shelf === b.shelfName
                  )
                }
                setAllBooks={setAllBooks}
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