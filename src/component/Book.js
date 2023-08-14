import * as BooksAPI from "../BooksAPI";
function Book({title,authors,imageUrl,book,setBooks}){

    function handleChange(shelfValue){
        BooksAPI.update(book,shelfValue)
        .then(()=>BooksAPI.getAll())
        .then((newBook)=>{setBooks(newBook)})
    }
 
    return( <div className="book">
    <div className="book-top">
      <div
        className="book-cover"
        style={{
          width: 128,
          height: 193,
          backgroundImage: `url("${imageUrl}")`
        }}
      ></div>
      <div className="book-shelf-changer">
        <select onChange={(event)=> {handleChange(event.target.value)}}>
          <option value="none" disabled>
            Move to...
          </option>
          <option value="currentlyReading">
            Currently Reading
          </option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    </div>
    <div className="book-title">{title}</div>
    <div className="book-authors">{authors}</div>
  </div>)
}
export default Book