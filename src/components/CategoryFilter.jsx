function CategoryFilter({ categories, selected, onSelect }) {
  return (
    <div className="category-filter">
      <h2>Categories</h2>
      <ul>
        {categories.map(cat => (
          <li
            key={cat}
            className={selected === cat ? 'active' : ''}
            onClick={() => onSelect(cat)}
          >
            {cat}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CategoryFilter