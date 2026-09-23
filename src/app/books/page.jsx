import React from "react";
import BookCard from "../components/BookCard";

const getBooks = async () => {
  const res = await fetch("http://localhost:5000/books");
  if (!res.ok) {
    throw new Error("Failed to fetch books");
  }
  return res.json();
};

const BooksPage = async () => {
  const books = await getBooks();

  return (
    <div>
      <h2>Books: {books.length}</h2>
      <div>
        {BooksPage.map((book) => (
          <BookCard key={book.id} book={book}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default BooksPage;
