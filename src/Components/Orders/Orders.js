import React from "react";
import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import { removeFromDb } from "../../utilities/fakedb";

import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./Orders.css";

const Orders = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);
    const onRemoveItem = (product) => {
        const reviewItem = cart.filter((item) => item.id !== product.id);
        setCart(reviewItem);
        removeFromDb(product.id);
    };

    return (
        <div className="shope-container">
            <div className="review-item">
                {cart.length === 0
                    ? "No Order Items Here!!!"
                    : cart.map((product) => (
                          <ReviewItem
                              key={product.id}
                              onRemoveItem={onRemoveItem}
                              product={product}
                          ></ReviewItem>
                      ))}
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button className="delete-btn">Clear</button>
                    <Link to={"/"}>
                        <button className="checkout-btn">
                            Proceed Checkout
                        </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;
