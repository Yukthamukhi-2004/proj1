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
    return status === "In Stock"
      ? `${baseClass} bg-green-100 text-green-800`
      : `${baseClass} bg-red-100 text-red-800`;
  };

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="mb-8 flex flex-col lg:flex-row gap-4 items-center justify-between bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800">Product Inventory</h2>
        <div className="flex items-center gap-4">
          <label className="font-medium text-gray-700">Filter:</label>
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>All</option>
            <option>Electronics</option>
            <option>Clothing</option>
            <option>Footwear</option>
          </select>
          <span className="font-semibold text-gray-700">
            Showing: {filteredProducts.length} items
          </span>
        </div>
      </div>

      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="w-full bg-white border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className=" font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className=" font-medium text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th className=" font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th className=" font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product.id} className="hover:bg-gray-50 border-b">
                <td className="px-6 py-4 font-medium text-gray-900">
                  {product.name}
                </td>
                <td className="px-6 py-4 text-gray-700">{product.category}</td>
                <td className="px-6 py-4 font-semibold text-green-600">
                  ${product.price.toLocaleString()}
                </td>
                <td className="px-6 py-4">
                  <span className={getStatusBadge(product.status)}>
                    {product.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredProducts.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No products found for "{filterCategory}"
          </div>
        )}
      </div>
    </div>
  );
}

export default FilterTable;
