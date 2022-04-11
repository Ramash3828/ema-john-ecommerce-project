import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import { addToDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Products from "../Products/Products";
import "./Shop.css";

const Shope = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);

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
                <Cart cart={cart}>
                    <button className="delete-btn"> Clear</button>
                    <Link to={"/orders"}>
                        <button className="order-btn"> Order Review</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shope;
