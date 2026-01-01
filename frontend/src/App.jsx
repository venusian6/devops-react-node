import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect } from "react";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:4000";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function api() {
      const res = await fetch(`${API_URL}/api/products`);
      const data = await res.json();
      setProducts(data.products);
    }
    api();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-medium mb-5">Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((p) => (
          <div
            key={p.id}
            className="bg-gray-100 hover:bg-gray-200 rounded-lg p-4"
          >
            <img
              src={p.thumbnail}
              className="w-full h-40 object-cover rounded-md"
            />

            <div className="mt-2">
              <h3 className="font-medium">{p.title}</h3>
              <p>₹ {p.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
