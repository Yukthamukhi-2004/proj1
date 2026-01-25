import React, { useState, useEffect } from "react";

function FilterTable() {
  const [filterCategory, setFilterCategory] = useState("All");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const products = [
    {
      id: 1,
      name: "Laptop",
      category: "Electronics",
      price: 999,
      status: "In Stock",
    },
    {
      id: 2,
      name: "Phone",
      category: "Electronics",
      price: 599,
      status: "Out of Stock",
    },
    {
      id: 3,
      name: "Shirt",
      category: "Clothing",
      price: 29,
      status: "In Stock",
    },
    {
      id: 4,
      name: "Jeans",
      category: "Clothing",
      price: 79,
      status: "In Stock",
    },
    {
      id: 5,
      name: "Headphones",
      category: "Electronics",
      price: 199,
      status: "In Stock",
    },
    {
      id: 6,
      name: "Shoes",
      category: "Footwear",
      price: 89,
      status: "Out of Stock",
    },
  ];

  /* const filteredProducts = useMemo(() => {
    if (filterCategory === "All") return products;
    return products.filter((p) => p.category === filterCategory);
  }, [filterCategory]);
 */
  useEffect(() => {
    if (filterCategory === "All") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((p) => p.category === filterCategory);
      setFilteredProducts(filtered);
    }
  }, [filterCategory]);
  const getStatusBadge = (status) => {
    const baseClass = "px-3 py-1 rounded-full text-xs font-bold";
    return status === "In Stock" ? `${baseClass} ` : `${baseClass} `;
  };

  return (
    <div>
      <div>
        <h2 className="font-bold text-gray-800">Product Inventory</h2>
        <div>
          <label>Filter:</label>
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            <option>All</option>
            <option>Electronics</option>
            <option>Clothing</option>
            <option>Footwear</option>
          </select>
          <span>Showing: {filteredProducts.length} items</span>
        </div>
      </div>

      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>${product.price.toLocaleString()}</td>
                <td>
                  <span className={getStatusBadge(product.status)}>
                    {product.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredProducts.length === 0 && (
          <div>No products found for "{filterCategory}"</div>
        )}
      </div>
    </div>
  );
}

export default FilterTable;
