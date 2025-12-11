import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    desc: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true,
    },
    mrpPrice: {
        type: Number,
        require: true
    },
    salePrice: {
        type: Number,
        require: true
    },
    quantity: {
        type: Number,
        require: true
    },
    admainName: {
        type: String,
        require: true
    },
    image: {
        type: Array,
        require: true
    }
})

productSchema.index({ category: 1 })

const productModel = mongoose.model || mongoose.model("Products", productSchema)

export default productModel