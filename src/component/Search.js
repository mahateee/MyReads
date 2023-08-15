import Book from "./Book";
import * as BooksAPI from "../BooksAPI"
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

function Search(){
  const [searchedBooks, setSearchedBooks] = useState([]);
  const [searchText, setSearchText] = useState([]);
  const handleSearchTextChange = () => {
    if (searchText.length>0) {
      BooksAPI.search(searchText).then(searchedBooks => {
        if (searchedBooks) {
          BooksAPI.getAll().then(() => {
            setSearchedBooks(searchedBooks);
          });
        } else {
          setSearchedBooks([]);
        }
      });
    }
  };

  useEffect(() => {
    handleSearchTextChange();
  }, [searchText]);

return(  <div >
      <div className="search-books">
          <div className="search-books-bar">
          <Link to="/">  <a
              className="close-search"
              
            >
              Close
            </a></Link>
           
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
                onChange={event => setSearchText(event.target.value)}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid"></ol>
          </div>
        </div>
 <div className="bookshelf-books">
      <ol className="books-grid">
      {searchedBooks &&
            searchedBooks.map((book, index) => (
              <Book
              id={book.id}
                key={index}
                title={book.title}
                authors={book.authors}
                imageUrl={book.imageLinks && book.imageLinks.thumbnail}
                isSearching={true}
                bookshelf={book.shelf}
                book={book}
                setBooks={setSearchedBooks}
              />
            ))}
        <li>
     
        </li>
       
      </ol>
    </div>
</div>)
}
export default Search;