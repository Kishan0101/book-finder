import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import BookList from "./components/BookList";
import Pagination from "./components/Pagination";
import "./index.css";

function App() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchBooks = async (bookTitle, page = 1) => {
    const response = await fetch(
      `https://openlibrary.org/search.json?title=${bookTitle}&page=${page}`
    );
    const data = await response.json();
    setBooks(data.docs);
    setTotalPages(Math.ceil(data.numFound / 10));
  };

  const handleSearch = (bookTitle) => {
    setQuery(bookTitle);
    setPage(1);
    fetchBooks(bookTitle, 1);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
    fetchBooks(query, newPage);
  };

  return (
    <div className="App">
      <SearchBar onSearch={handleSearch} />
      <BookList books={books} />
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default App;
