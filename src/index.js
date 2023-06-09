import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
const books = [
  {
    author: "Rick Rubin",
    title: "The Creative Act",
    img: "https://images-na.ssl-images-amazon.com/images/I/A1YhM3oRFbL._AC_UL600_SR600,400_.jpg",
    id: 1,
  },
  {
    author: "Dr. Seuss",
    title: "Oh, the Places You'll Go!",
    img: "https://images-na.ssl-images-amazon.com/images/I/81a5KHEkwQL._AC_UL600_SR600,400_.jpg",
    id: 2,
  },
  {
    author: "Bonnie Garmus",
    title: "Lessons in Chemistry",
    img: "https://images-na.ssl-images-amazon.com/images/I/71yNgTMEcpL._AC_UL600_SR600,400_.jpg",
    id: 3,
  },
];

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
};
const Book = (props) => {
  const { author, title, img } = props;
  console.log(props);
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
