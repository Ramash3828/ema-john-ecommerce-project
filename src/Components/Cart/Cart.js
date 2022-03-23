import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
    let quantity = 0;
    let total = 0;
    let shippingPrice = 0;
    for (let item of cart) {
        quantity = quantity + item.quantity;
        total = total + item.price * quantity;
        shippingPrice = shippingPrice + item.shipping;
    }

    let tax = total * 0.2;
    tax = parseFloat(tax.toFixed(2));
    return (
        <div>
            <h2>Order Summary</h2>
            <p className="item-info">
                Product quantity: <span>{quantity}</span>
            </p>
            <p className="item-info">
                Shipping: <span>${shippingPrice}</span>
            </p>
            <h5 className="item-info">
                Total price: <span>${total}</span>
            </h5>
            <p className="item-info">
                Tax (2%): <span>$ {tax} </span>
            </p>
            <h4 className="item-info">
                Grand total: <span>${total + tax + shippingPrice}</span>
            </h4>
        </div>
    );
};

export default Cart;
