const products = require("../models/productModel");

const getAllProducts = (req, res) => {
    res.json(products);
};

const getProductById = (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
};

module.exports = { getAllProducts, getProductById };