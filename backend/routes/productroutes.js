const express = require("express");
const router = express.Router();
const productModel = require("../models/productModel");

// GET ALL PRODUCTS
router.get("/", (req, res) => {
    console.time("DB Query Time");

    productModel.getAllProducts((err, results) => {
        console.timeEnd("DB Query Time");

        if (err) {
            return res.status(500).json({ error: err });
        }

        res.json(results);
    });
});

module.exports = router;