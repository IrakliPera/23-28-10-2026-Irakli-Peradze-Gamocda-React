import Child from "./Child";

function Parent() {
  const books = [
    { id: 1, name: "შოთა რუსთავეელი", author: "ვეფხისტყაოსანი" },
    { id: 2, name: "იაკობ ცურტაველი", author: "შუშანიკის წამება" },
    { id: 3, name: "სილხან-საბა ორბელიანი", author: "სიბრძნე სიცრუისა" },
  ];

  return (
    <section>
      <h2>Books</h2>
      <Child books={books} />
    </section>
  );
}

export default Parent;