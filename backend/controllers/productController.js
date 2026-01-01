const { fetchProducts } = require("../services/productService");

const getProducts = async (req, res) => {
  try {
    const products = await fetchProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
};

module.exports = { getProducts };
