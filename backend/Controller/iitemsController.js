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
    console.log(req.body)
    const { category } = req.body
    console.log(category)
    try {
        const items = await productModel.find({ category: category })
        res.json({ success: true, items })
    } catch (error) {
        console.log(error)
        res.json({ success: true, message: "some error" })
    }
}

const trendingItems = async (req, res) => {

    let a = ['mens were', 'womens were', 'kids were', 'shose', 'jewelary', 'mens accessories']
    let items = []

    try {
        for (const element of a) {
            const item = await productModel.findOne({ category: element })
            items.push(item)
        }
        
        res.json({ success: true, items })
    } catch (error) {
        console.log(error)
        res.json({ success: true, message: "some error" })
    }
}

const itemById = async (req, res)=>{

    try {
        const item = await productModel.findById({id: req.param.id})
        res.json({success: true, item})
    } catch (error) {
        console.log(error)
        res.json({ success: true, message: "some error" })
    }
}

export { getItems, categoryItems, trendingItems, itemById }