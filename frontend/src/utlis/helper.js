import { categoryItmeApi } from "../Api//user.api"
import { showErrorToast, showSuccessToast } from './toast'
const url = "http://localhost:3000/api"

// Fatching items by their category
const itemsApi = async (category) => {

    const value = category.toLowerCase()
    const data = { category: value }
    const res = await categoryItmeApi(data)
    return res
}

// order api function 
const orderApi = async (value, token) => {

    const res = await fetch(`${url}/order`, {
        method: "POST",
        headers: { "Content-Type": "application/json", token: token },
        body: JSON.stringify(value)
    })
    const result = await res.json()
    showSuccessToast(result.message)
}

// Online Payment Function 
const onlinepay = async (order, value, token) => {

    const options = {
        key: 'rzp_test_QXiPiAaXY4WeKN',
        amount: order.amount,
        currency: order.currency,
        name: "Style Vibe",
        description: 'Test Transaction',
        order_id: order.id,
        handler: async function (response) {

            const result = await fetch(`${url}/order/verifypay`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    order_id: response.razorpay_order_id,
                    payment_id: response.razorpay_payment_id,
                    signature: response.razorpay_signature,
                })
            })
            const res = await result.json()

            if (res.success) {
                orderApi(value, token)
            } else {
                showErrorToast("Payment verification failed!");
            }
        },
        prefill: {
            name: 'Test User',
            email: 'test@example.com',
            contact: '9999999999',
        },
        theme: {
            color: '#812972',
        },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();

}


// Toast
const toast = (res)=>{
    if (res.success) {
        showSuccessToast(res.message)
    } else {
        showErrorToast(res.message)
    }
}


export { itemsApi, onlinepay, orderApi, toast }