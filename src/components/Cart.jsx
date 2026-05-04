function Cart({ cart }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p className="cart-empty">No items yet.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cart.map(item => (
              <li key={item.id} className="cart-item">
                <span className="cart-title">{item.title}</span>
                <span className="cart-qty">x{item.quantity}</span>
                <span className="cart-price">${(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <p className="cart-total">Total: <strong>${total.toFixed(2)}</strong></p>
        </>
      )}
    </div>
  )
}

export default Cart