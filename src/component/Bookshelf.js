import Book from "./Book";
function Bookshelf({shelfTitle,books,setAllBooks }){

    return (              <div className="bookshelf">
    <h2 className="bookshelf-title">{shelfTitle}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {books.map((book,index)=>{
   return(<Book key={index} id={book.id} title={book.title} authors={book.authors} setAllBooks={setAllBooks} book={book} imageLink={book.imageLinks && book.imageLinks.thumbnail}/>)
        })}
        <li>
     
        </li>
       
      </ol>
    </div>
  </div>)

}
export default Bookshelf;