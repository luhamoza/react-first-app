import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
const author = "Gregory E. Lang";
const title = "Why a Daughter Need a Dad";

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};
const Book = () => {
  return (
    <article className="book">
      <img src="./img/book-1.jpg" alt="Why a Daughter Needs a Dad" />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
