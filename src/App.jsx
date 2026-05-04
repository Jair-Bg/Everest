import { useState, useEffect, useCallback, useMemo } from 'react'
import Header from './components/Header'
import ShoppingList from './components/ShoppingList'
import Cart from './components/Cart'
import CategoryFilter from './components/CategoryFilter'
import './App.css'

function App() {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const [darkMode, setDarkMode] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data)
        setLoading(false)
      })
  }, [])

  const addToCart = useCallback((product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id)
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }, [])

  const categories = useMemo(() =>
    ['all', ...new Set(products.map(p => p.category))],
    [products]
  )

  const filtered = useMemo(() => {
    let result = selectedCategory === 'all'
      ? products
      : products.filter(p => p.category === selectedCategory)

    if (search.trim()) {
      result = result.filter(p =>
        p.title.toLowerCase().includes(search.toLowerCase())
      )
    }
    return result
  }, [products, selectedCategory, search])

  return (
    <div className={`App ${darkMode ? 'dark' : ''}`}>
      <Header
        darkMode={darkMode}
        toggleDarkMode={() => setDarkMode(prev => !prev)}
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
        search={search}
        onSearch={setSearch}
      />
      <div className="app-body">
        <aside className="sidebar">
          <CategoryFilter
            categories={categories}
            selected={selectedCategory}
            onSelect={setSelectedCategory}
          />
          <Cart cart={cart} />
        </aside>
        <main>
          {loading ? (
            <p className="loading">Loading products...</p>
          ) : (
            <ShoppingList products={filtered} addToCart={addToCart} />
          )}
        </main>
      </div>
    </div>
  )
}

export default App