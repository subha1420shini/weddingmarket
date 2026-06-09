const express = require("express");
const app = express();

app.get("/api/products", (req, res) => {
    res.json([{ id: 1, name: "TEST PRODUCT", price: 100 }]);
});

app.listen(5000, () => {
    console.log("Server running on 5000");
});