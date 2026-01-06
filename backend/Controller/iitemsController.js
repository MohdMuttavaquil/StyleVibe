import productModel from "../Model/productSchema.js";

const getItems = async (req, res) => {

  try {
        const items = await productModel.find().select({ name:1, images: {$slice: 1}}).limit(12)
        res.json({success: true, items})
    } catch (error) {
         console.log(error)
        res.json({ success: true, message: "some error" })
    }
}

const categoryItems = async (req, res) => {

    const { category } = req.body
    try {
        const items = await productModel.find({ category: category }).select({
            name:1, price:1, images: {$slice: 2}
        })
        res.json({ success: true, items })
    } catch (error) {
        console.log(error)
        res.json({ success: true, message: "some error" })
    }
}

const trendingItems = async (req, res) => {

    let a = [ '6942aa84aa245a8186cdda75', '6942ab81aa245a8186cdda77', '6942ae21131bb91e065472eb', '6942af34131bb91e065472ef', '6942b1d9131bb91e065472fa', '6942b30f131bb91e065472fc' ]
    let items = []

    try {
        for (const element of a) {
            const item = await productModel.findById(element)
            items.push(item)
        }

        res.json({ success: true, items })
    } catch (error) {
        console.log(error)
        res.json({ success: true, message: "some error" })
    }
}

const itemById = async (req, res) => {
    const { id } = req.body
 
    try {
        const item = await productModel.findById(id)
        res.json({ success: true, item })
    } catch (error) {
        console.log(error)
        res.json({ success: true, message: "some error" })
    }
}


export { getItems, categoryItems, trendingItems, itemById }