const db = require("../config/db");

// GET all products
const getAllProducts = (callback) => {
    db.query("SELECT * FROM products", callback);
};

module.exports = { getAllProducts };