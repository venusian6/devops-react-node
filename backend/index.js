const express = require("express");
const cors = require("cors");

const productRoutes = require("./routes/productRoutes");

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.use("/api", productRoutes);

app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
