import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
const firstBook = {
  author: "Rick Rubin",
  title: "The Creative Act",
  img: "https://images-na.ssl-images-amazon.com/images/I/A1YhM3oRFbL._AC_UL600_SR600,400_.jpg",
};
const secondBook = {
  author: "Dr. Seuss",
  title: "Oh, the Places You'll Go!",
  img: "https://images-na.ssl-images-amazon.com/images/I/81a5KHEkwQL._AC_UL600_SR600,400_.jpg",
};
const thirdBook = {
  author: "Bonnie Garmus",
  title: "Lessons in Chemistry",
  img: "https://images-na.ssl-images-amazon.com/images/I/71yNgTMEcpL._AC_UL600_SR600,400_.jpg",
};

const BookList = () => {
  return (
    <section className="booklist">
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      />
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
      <Book
        author={thirdBook.author}
        title={thirdBook.title}
        img={thirdBook.img}
      />
    </section>
  );
};
const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
