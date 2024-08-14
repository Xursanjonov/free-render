import { Products, validateProduct } from "../models/productSchema.js"

class ProductsController {
    // GET all products
    async getAllProducts(req, res) {
        try {
            const products = await Products.find()
            const total = await Products.countDocuments()
            res.status(200).json({
                msg: "All Products",
                variant: "success",
                total,
                payload: products
            })
        } catch (err) {
            res.status(404).json({
                msg: err.message,
                variant: "error",
                payload: null
            })
        }
    }
    // GET product by id
    async getProductById(req, res) {
        try {
            const id = req.params.id
            if (!id) {
                return res.status(400).json({
                    msg: "Product not found",
                    variant: "error",
                    payload: null
                })
            }
            const product = await Products.findById(id)
            res.status(200).json({
                msg: "Product fetched successfully",
                variant: "success",
                payload: product
            })
        } catch (err) {
            res.status(404).json({
                msg: err.message,
                variant: "error",
                payload: null
            })
        }
    }
    // POST product
    async createProduct(req, res) {
        try {
            const { error } = validateProduct(req.body)
            if (error) {
                return res.status(400).json({
                    msg: error.details[0].message,
                    variant: "error",
                    payload: null
                })
            }
            const product = new Products.create(req.body)
            res.status(201).json({
                msg: "Product created successfully",
                variant: "success",
                payload: product
            })
        } catch (err) {
            res.status(500).json({
                msg: err.message,
                variant: "error",
                payload: null
            })
        }
    }
    // DELETE product
    async deleteProduct(req, res) {
        try {
            const id = req.params.id
            if (!id) {
                return res.status(400).json({
                    msg: "Product not found",
                    variant: "error",
                    payload: null
                })
            }
            await Products.findByIdAndDelete(id)
            res.status(200).json({
                msg: "Product deleted successfully",
                variant: "success",
                payload: null
            })
        } catch (err) {
            res.status(500).json({
                msg: err.message,
                variant: "error",
                payload: null
            })
        }
    }
    // Search Product
    async searchProduct(req, res) {
        try {
            const { q } = req.query
            if (!q) {
                return res.status(400).json({
                    msg: "Product not found",
                    variant: "error",
                    payload: null
                })
            }
            const product = await Products.find({ $text: { $search: q } })
            res.status(200).json({
                msg: "Product fetched successfully",
                variant: "success",
                payload: product
            })
        } catch (err) {
            res.status(500).json({
                msg: err.message,
                variant: "error",
                payload: null
            })
        }
    }
}

export default new ProductsController()