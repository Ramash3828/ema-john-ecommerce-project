import React, { useEffect, useState } from "react";
import { addToDb, getProduct } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Products from "../Products/Products";
import "./Shope.css";

const Shope = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch("products.json")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    useEffect(() => {
        const storedProduct = getProduct();
        const saveProduct = [];
        for (const id in storedProduct) {
            const stordedItems = products.find((product) => product.id === id);
            if (stordedItems) {
                const quantity = storedProduct[id];
                stordedItems.quantity = quantity;
                saveProduct.push(stordedItems);
            }
        }
        setCart(saveProduct);
    }, [products]);

    const addCartHandler = (product) => {
        let newCart = [];
        let exists = cart.find((item) => item.id === product.id);
        if (!exists) {
            product.quantity = 1;
            newCart = [...cart, product];
        } else {
            const rest = cart.filter((item) => item.id !== product.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }

        setCart(newCart);
        addToDb(product.id);
    };

    return (
        <div className="shope-container">
            <div className="products-container">
                {products.map((product) => {
                    return (
                        <Products
                            addCartHandler={addCartHandler}
                            key={product.id}
                            product={product}
                        ></Products>
                    );
                })}
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shope;
