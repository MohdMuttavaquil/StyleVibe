import orderModel from "../Model/orderSchema.js";

const order = async (req, res)=>{
     const { address, price, phoneNo, productName, payment, name, sellerName } = req.body
     
    try {
        const newOrder = new orderModel({
            productName: productName,
            address: address,
            price: price,
            phoneNo: phoneNo,
            payment: payment,
            sellerName: sellerName,
            buyerName: name
        })

        await newOrder.save()

        res.json({success: true, message: "Thanks for order"})
    } catch (error) {
        console.log(error)
        res.json({sucess: false, message: "some error"})
    }
}


export { order }