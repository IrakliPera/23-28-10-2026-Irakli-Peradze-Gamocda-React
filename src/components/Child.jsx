function Child({ books }) {
  if (books.length === 0) {
    return <p>წიგნები არ მოიძებნა</p>;
  }

  return (
    <div>
      {books.map((book) => (
        <article key={book.id}>
          <h3>{book.name}</h3>
          <p>Author: {book.author}</p>
        </article>
      ))}
    </div>
  );
}

export default Child;