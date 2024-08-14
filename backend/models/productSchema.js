import { Schema, model } from "mongoose"
import Joi from "joi"

const productSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    oldPrice: {
        type: Number,
        required: false
    },
    stock: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    available: {
        type: Boolean,
        required: true,
        default: true
    },
    urls: {
        type: Array,
        required: false,
        default: []
    },
    desc: {
        type: String,
        required: false,
        default: ""
    },
    info: {
        type: Array,
        required: false,
        default: []
    },
    rating: {
        type: Number,
        required: true
    }
}, { timestamps: true })

export const Products = model("newproject-products", productSchema)

export const validateProduct = (body) => {
    const schema = Joi.object({
        title: Joi.string().required(),
        price: Joi.number().required(),
        oldPrice: Joi.number(),
        stock: Joi.number().required(),
        category: Joi.string().required(),
        available: Joi.boolean(),
        urls: Joi.array(),
        desc: Joi.string(),
        info: Joi.array(),
        rating: Joi.number()
    })

    return schema.validate(body)
}