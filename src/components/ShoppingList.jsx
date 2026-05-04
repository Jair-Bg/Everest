import ProductCard from './ProductCard'

function ShoppingList({ products, addToCart }) {
  return (
    <div className="shopping-list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  )
}

export default ShoppingList