const ProductFilters = ({
    searchTerm,
    selectedCategory,
    categories,
    onSearchChange,
    onCategoryChange
}) => {
    return (
        <div className="filters">
            <input type="text" placeholder="Buscar por nombre ..." value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)} />

            <select value={selectedCategory} onChange={(e) => onCategoryChange(e.target.value)} >
                <option value="">Todas las categorías</option>

                {categories.map((category)=> (
                    <option key={category} value={category}>{category}</option>
                ))}
            </select>
        </div>
    )
}

export default ProductFilters;