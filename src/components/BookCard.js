import React from "react";

function BookCard({ book }) {
  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : "https://via.placeholder.com/150";

  return (
    <div className="book-card">
      <img src={coverUrl} alt={book.title} />
      <h3>{book.title}</h3>
      <p>
        Author: {book.author_name ? book.author_name.join(", ") : "Unknown"}
      </p>
      <p>First Published: {book.first_publish_year}</p>
      <p>Publisher: {book.publisher ? book.publisher.join(", ") : "N/A"}</p>
    </div>
  );
}

export default BookCard;
