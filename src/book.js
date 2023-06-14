const Book = (props) => {
  const { author, title, img, getBook, id, number } = props;
  // console.log(props);
  //   console.log(number);
  const getSingleBook = () => {
    getBook(id);
  };
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button className="btn" onClick={getSingleBook}>
        Display object in console
      </button>
      <h4>{author}</h4>
      <span className="number">{`# ${number + 1}`}</span>
    </article>
  );
};
export default Book;
