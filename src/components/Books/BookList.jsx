import React, { useState } from "react";
import booksData from "../../db/booksData";
import SingleBook from "./SingleBook";
import { customSort } from "../../utils";

const BookList = ({bookName,books, setBooks, sortBy, filterBySearch}) => {
  // const [books, setBooks] = useState(booksData);

  
  
  const handleFav = (bookId) => {
    const favoriteBooks = books.map((book) => {
      if (book.id === bookId) {
        return {
          ...book,
          favourite: !book.favourite,
        };
      }
      return book;
    });
    setBooks(favoriteBooks);
  };
  const sortByNameYear = customSort({sortBy})
  // const sortByNameYear = (a, b) => {
  //   switch (sortBy) {
  //     case "name_asc":
  //       return a.title.localeCompare(b.title);
  //     case "name_desc":
  //       return b.title.localeCompare(a.title);
  //     case "year_asc":
  //       return a.publishedYear - b.publishedYear;
  //     case "year_desc":
  //       return b.publishedYear - a.publishedYear;
  //     default:
  //       return 0;
  //   }
  // };
  return (
    <div className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {[...books].filter(filterBySearch).sort(sortByNameYear).map((book) => (
        <SingleBook key={book.id} book={book} handleFav={handleFav}  />
      ))}
    </div>
  );
};

export default BookList;
