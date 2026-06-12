import SingleBook from "./SingleBook";

const BookList = ({ books, setBooks, sortedBooks }) => {
  
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
  // const sortByNameYear = customSort({ sortBy });

  return (
    <div className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {sortedBooks.map((book) => (
        <SingleBook key={book.id} book={book} handleFav={handleFav} />
      ))}
    </div>
  );
};

export default BookList;
