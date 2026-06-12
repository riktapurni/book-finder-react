import React, { useMemo, useState } from 'react'
import booksData from '../../db/booksData';
import BookListHeader from './BookListHeader/BookListHeader';
import BookList from './BookList';

const BookContainer = () => {
    const [books, setBooks] = useState(booksData);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("");
  const filteredBooks = useMemo(() => {
    const searchQuery = searchTerm.trim().toLowerCase()
    return books.filter((book) => {
      const matchesSearch = book.title.toLowerCase().includes(searchQuery)
      return matchesSearch
    })
  }, [books, searchTerm])
  //  console.log("searchTerm:", searchTerm);
  // const filterBySearch = (book) => {
  //   if (bookName !== "") {
  //     return book?.title.toLowerCase().includes(bookName.trim().toLowerCase());
  //   }
  //   return true;
  // };
  const sortedBooks = useMemo(() => {
return [...filteredBooks].sort((a, b) => {
    switch (sortBy) {
      case "name_asc":
        return a.title.localeCompare(b.title);
      case "name_desc":
        return b.title.localeCompare(a.title);
      case "year_asc":
        return a.publishedYear - b.publishedYear;
      case "year_desc":
        return b.publishedYear - a.publishedYear;
      default:
        return 0;
    }
  });
},[filteredBooks, sortBy])
   
  const handleSort = (sortBy) => {
    setSortBy(sortBy);
  };
  return (
    <div>
      <BookListHeader
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleSort={handleSort}
          sortBy={sortBy}
          setSortBy = {setSortBy}
        />
        <BookList
          sortBy={sortBy}
          sortedBooks={sortedBooks}
          books={books}
          setBooks={setBooks}
          searchTerm={searchTerm}
        />
    </div>
  )
}

export default BookContainer
