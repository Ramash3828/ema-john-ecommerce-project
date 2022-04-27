import { useEffect, useState } from "react";
import { getProduct } from "../utilities/fakedb";

const useCart = () => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const storedProduct = getProduct();
        const saveProduct = [];
        const keys = Object.keys(storedProduct);

        fetch("http://localhost:5000/productById", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(keys),
        })
            .then((res) => res.json())
            .then((products) => {
                for (const id in storedProduct) {
                    const storedItem = products.find(
                        (product) => product._id === id
                    );
                    if (storedItem) {
                        const quantity = storedProduct[id];
                        storedItem.quantity = quantity;
                        saveProduct.push(storedItem);
                    }
                }
            });

        setCart(saveProduct);
    }, []);
    return [cart, setCart];
};

export default useCart;
