const getProducts = (req, res) => {

    const products = [
        {
            id: 1,
            name: "Wedding Invitation",
            price: 500
        },
        {
            id: 2,
            name: "Flower Decoration",
            price: 3000
        },
        {
            id: 3,
            name: "Return Gift",
            price: 250
        }
    ];

    res.json(products);
};

module.exports = { getProducts };