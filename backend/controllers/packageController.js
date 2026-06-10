const packages = require("../models/packageModel");

const getAllPackages = (req, res) => {
    res.json(packages);
};

const getPackageById = (req, res) => {
    const pkg = packages.find(p => p.id === parseInt(req.params.id));
    if (!pkg) return res.status(404).json({ message: "Package not found" });
    res.json(pkg);
};

module.exports = { getAllPackages, getPackageById };