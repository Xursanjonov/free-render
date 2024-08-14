import express from "express"
import BlogsController from "../controller/blog.js";
import UsersController from "../controller/user.js"
import ProductsController from "../controller/product.js"
import { auth } from "../middleware/auth.js";
import { upload } from '../middleware/uploader.js'
import { adminMiddleware } from "../middleware/admin-middleware.js";
import { ownerMiddleware } from "../middleware/owner-middleware.js";
const router = express.Router()

// Products
router.get("/api/products", ProductsController.getAllProducts)
router.get("/api/products/:id", ProductsController.getProductById)
router.post("/api/products", ProductsController.createProduct)
router.delete("/api/products/:id", ProductsController.deleteProduct)
router.get("/api/products/search", ProductsController.searchProduct)
// Blogs
router.get("/api/blogs", [auth, adminMiddleware], BlogsController.get)
router.post("/api/blogs", [auth, ownerMiddleware], BlogsController.create)
// Users
router.get('/api/profile', [auth], UsersController.getProfile)
router.get('/api/users', UsersController.getAllUsers)
router.get('/api/users/search', UsersController.getUserSearch)
router.post('/api/users/sign-up', UsersController.registerUser)
router.post('/api/users/sign-in', UsersController.loginUser)
router.get('/api/users/:id', UsersController.getUserId)
router.patch('/api/users/:id', UsersController.updateUser)

// Upload image
router.post('/api/new-upload', [upload.array('news', 5)], (req, res) => {
    res.json(req.files.map(file => `${req.protocol}://${req.get("host")}/upload/${file.filename})`))
})

export default router

