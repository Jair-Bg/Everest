function Header({ darkMode, toggleDarkMode, cartCount, search, onSearch }) {
  return (
    <header className="header">
      <h1>🛒 Everest</h1>
      <input
        className="search-input"
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={e => onSearch(e.target.value)}
      />
      <div className="header-actions">
        <span className="cart-badge">Cart: {cartCount}</span>
        <button className="toggle-btn" onClick={toggleDarkMode}>
          {darkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
      </div>
    </header>
  )
}

export default Header