const axios = require("axios");

const fetchProducts = async () => {
  const response = await axios.get("https://dummyjson.com/products");
  return response.data;
};

module.exports = { fetchProducts };
