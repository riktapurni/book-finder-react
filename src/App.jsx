import { useState } from "react";

import BookListHeader from "./components/BookListHeader/BookListHeader";

import BookList from "./components/Books/BookList";
import Navbar from "./components/Navbar";
import booksData from "./db/booksData";

function App() {
  const [books, setBooks] = useState(booksData);
  const [bookName, setBookName] = useState("");
  const [sortBy, setSortBy] = useState("");

  const filterBySearch = (book) => {
    if (bookName !== "") {
      return book?.title.toLowerCase().includes(bookName.trim().toLowerCase());
    }
    return true;
  };
  const handleSort = (sortBy) => {
    setSortBy(sortBy);
  };
  return (
    <>
      <Navbar />
      <main className="my-10 lg:my-14">
        <BookListHeader
          bookName={bookName}
          setBookName={setBookName}
          handleSort={handleSort}
          sortBy={sortBy}
        />
        <BookList sortBy={sortBy} filterBySearch={filterBySearch}
        books={books} setBooks={setBooks}
         bookName={bookName} 
         />
      </main>
    </>
  );
}

export default App;
