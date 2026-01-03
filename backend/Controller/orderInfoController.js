import orderModel from "../Model/orderSchema.js";
import productModel from "../Model/productSchema.js";

const userOrder = async (req, res)=>{
    const id = req.user.userId

    try {
        const order = await orderModel.find({userId: id}).select('productName price payment status')
        res.json({success: true, order })
    } catch (error) {
        console.log(error)
        res.json({success: false, message: "some error"})
    }
}

const admainOrder = async (req ,res)=>{
     const name = req.user.userName

    try {
        const order = await orderModel.find({sellerName: name}).select('productName price payment status address phoneNo buyerName')
        res.json({success: true, order })
    } catch (error) {
        console.log(error)
        res.json({success: false, message: "some error"})
    }
}

const confirmOrder = async (req, res)=>{
    const  id  = req.body.id
    const name = req.body.name
console.log(name)
    try {
        await orderModel.findByIdAndUpdate(id, {status: "shipping"}, {new: true})
        await productModel.findOneAndUpdate({name: name}, { $inc: {quantity: - 1} }, {new: true})
        res.json({success: true, message: "Status update"})
    } catch (error) {
         console.log(error)
        res.json({success: false, message: "some error"})
    }
}


export { userOrder, admainOrder, confirmOrder}