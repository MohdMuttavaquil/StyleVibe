import productModel from "../Model/productSchema.js";

const getItems = async (req, res) => {

    try {
        const items = await productModel.find()
        res.json({ success: true, items })
    } catch (error) {
        console.log(error)
        res.json({ success: true, message: "some error" })
    }
}

const categoryItems = async (req, res) => {

    const { category } = req.body
    console.log(category)
    try {
        const items = productModel.find({ category: category })
        res.json({ success: true, items })
    } catch (error) {
        console.log(error)
        res.json({ success: true, message: "some error" })
    }
}


const check = async (req, res)=>{
    console.log("requse recive")
    res.json({message: "middlewere woek", name: req.body.userName})
}

export { getItems, categoryItems, check }