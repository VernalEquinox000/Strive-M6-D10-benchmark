const router = require("express").Router();

const Model = require("../../utils/model")

const Products = new Model('products')

const db = require("../../utils/db");

// GET /products
router.get("/", async (req, res, next) => {
    try {
        const response  = await Products.find();
        res.send(response);
    }
    catch (error) {
        console.log(error)
        next(error)
    }
})

// GET /products/:id
router.get("/id", async (req, res, next) => {
    try {
        const { rows } = await Products.findById(req.params.id)
        res.send(rows)
    }
    catch (error) {
        console.log(error)
        next(error)
    }
})

// POST /products/:id
router.post("/", async (req, res, next) => {
    try {
        const response = await Products.save(req.body)
        res.send(response)
    }
    catch (error) {
        console.log(error)
        next(error)
    }
})

// PUT /products/:id
router.put("/id", async (req, res, next) => {
    try {
        const response = await Products.findByIdAndUpdate(req.params.id,req.body)
        res.send(response);
    }
    catch (error) {
        console.log(error)
        next(error)
    }
})

// DELETE /products/:id
router.delete("/id", async (req, res, next) => {
    try {
        const { rows } = await Products.findByIdAndDelete(req.params.id);
        res.send(rows);
    }
    catch (error) {
        console.log(error)
        next(error)
    }
})


module.exports = router;