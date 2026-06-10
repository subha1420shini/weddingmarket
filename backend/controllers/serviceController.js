const services = require("../models/serviceModel");

const getAllServices = (req, res) => {
    res.json(services);
};

const getServiceById = (req, res) => {
    const service = services.find(s => s.id === parseInt(req.params.id));
    if (!service) return res.status(404).json({ message: "Service not found" });
    res.json(service);
};

module.exports = { getAllServices, getServiceById };