import { NextResponse } from 'next/server';
export async function POST(request) {
    const data = await request.json()
    const amount = data.amount;
    console.log(amount);
    try {
        const Razorpay = require("razorpay");
        console.log(process.env.NEXT_PUBLIC_RAZOR_PAY_KEY_ID)
        console.log(process.env.RAZOR_PAY_KEY_SECRET);
        const instance = new Razorpay({
            key_id: process.env.NEXT_PUBLIC_RAZOR_PAY_KEY_ID,
            key_secret: process.env.RAZOR_PAY_KEY_SECRET,
        });
        const options = {
            amount: amount,
            currency: "INR",
            receipt: "order_rcptid_11",
        };
        const order = await new Promise((resolve, reject) => {
            instance.orders.create(options, function (err, order) {
                if (err) {
                    reject(err);
                } else {
                    resolve(order);
                }
            });
        });
        console.log(order);
        return NextResponse.json({ success: true, order: order });


    } catch (error) {
        return NextResponse.json({ success: false, message: error.message });
    }
}