const router = require("express").Router();

const Model = require("../../utils/model")

const Reviews = new Model('reviews')

const db = require("../../utils/db");




// GET /reviews
router.get("/", async (req, res, next) => {
    try {
        const response  = await Reviews.find();
        res.send(response);
    }
    catch (error) {
        console.log(error)
        next(error)
    }
})


// GET /reviews/:id
router.get("/id", async (req, res, next) => {
    try {
        const { rows } = await Reviews.findById(req.params.id)
        res.send(rows)
    }
    catch (error) {
        console.log(error)
        next(error)
    }
})

// POST /reviews/
router.post("/", async (req, res, next) => {
    try {
        const response = await Reviews.save(req.body)
        res.send(response)
    }
    catch (error) {
        console.log(error)
        next(error)
    }
})

// PUT /reviews/:id
router.put("/id", async (req, res, next) => {
    try {
        const response = await Reviews.findByIdAndUpdate(req.params.id,req.body)
        res.send(response);
    }
    catch (error) {
        console.log(error)
        next(error)
    }
})

// DELETE /reviews/:id
router.delete("/id", async (req, res, next) => {
    try {
        const { rows } = await Reviews.findByIdAndDelete(req.params.id);
        res.send(rows);
    }
    catch (error) {
        console.log(error)
        next(error)
    }
})


module.exports = router;