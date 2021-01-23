const router = require("express").Router();

const Model = require("../../utils/model")

const Products = new Model('products')

const db = require("../../utils/db");

// trying to GET /products/:id/reviews by JOIN
router.get("/:id/reviews", async (req, res, next) => {
    try {
        //SELECT * FROM products JOIN reviews ON products._id = reviews.productId
        //const query = `SELECT * FROM ${reviews} JOIN ${this.name} ON ${reviews.productId=this.name.id} WHERE ${review.productId}=${parseInt(id)} `;
        //const query=`SELECT * FROM reviews JOIN ${this.name} ON ${this.name}.id=reviews.productId`
        const query= `SELECT * FROM products JOIN reviews ON products._id = reviews.productId WHERE products._id=${req.params.id}`
        //SELECT * FROM reviews AS r, products AS p WHERE r.product_id = p.id AND p.id=${productId}
        const response = await db.query(query);
        res.send(response);
    }
    catch (error) {
        console.log(error);
        next(error);
  }
});

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