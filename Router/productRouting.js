const productRoute = require('express').Router();
productRoute.get("/api/product", (req, res) => {
    res.send("This our all product page")
})
productRoute.get("/api/product", (req, res) => {
    res.send("This is product   page")
})
productRoute.get("/api/createProduct", (req, res) => {
    res.send("This our  createProduct page")
})
module.exports = productRoute;