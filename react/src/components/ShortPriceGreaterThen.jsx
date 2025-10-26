
// 2) Show only those products whose price is greater than 45000,
// sorted by price (high to low)

function SortPriceGreaterThen({ products2 }) {
  const GreaterThen = products2.filter((p) => p.price > 45000);
  // console.log(GreaterThen)
  const ShortPrice = [...GreaterThen].sort((a, b) => b.price - a.price);
  //   console.log(ShortPrice)

  return (
    <div className="top-div">
      <h1>Sorted by price (high to low) & greater than 45000</h1>
      <div className="container">
        {ShortPrice.map((p) => (
          <div className="main-container">
            <h2>{p.name}</h2>
            <p>Price : {p.price}</p>
            <span style={{ color: p.status ? "blue" : "red" }}>
              <p>{p.status ? "Available" : "Not Available"}</p>
            </span> 
            </div>
        ))}
      </div>
    </div>
  );
}

export default SortPriceGreaterThen;
