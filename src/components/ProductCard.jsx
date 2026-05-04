function ProductCard({ product, addToCart }) {
  const { title, price, image, category } = product

  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <div className="product-info">
        <span className="product-category">{category}</span>
        <h3>{title}</h3>
        <p className="product-price">${price}</p>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  )
}

export default ProductCard