import { useEffect, useState } from "react";
import { getProduct } from "../utilities/fakedb";

const useCart = (products) => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const storedProduct = getProduct();
        const saveProduct = [];
        for (const id in storedProduct) {
            const storedItem = products.find((product) => product.id === id);
            if (storedItem) {
                const quantity = storedProduct[id];
                storedItem.quantity = quantity;
                saveProduct.push(storedItem);
            }
        }
        setCart(saveProduct);
    }, [products]);
    return [cart, setCart];
};

export default useCart;
