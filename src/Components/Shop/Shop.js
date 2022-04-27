import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";
// import useProducts from "../../hooks/useProducts";
import { addToDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
// import Pagination from "../Pagination/Pagination";
import Products from "../Products/Products";
import "./Shop.css";

const Shope = () => {
    // const [products] = useProducts();
    const [page, setPage] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const [quantity, setQuantity] = useState(5);
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useCart();

    useEffect(() => {
        fetch(
            `https://quiet-reef-36489.herokuapp.com/product?page=${page}&quantity=${quantity}`
        )
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, [page, quantity]);

    useEffect(() => {
        fetch(`https://quiet-reef-36489.herokuapp.com/productCount`)
            .then((res) => res.json())
            .then((data) => {
                const count = data.count;
                const pages = Math.ceil(count / 10);
                setPageCount(pages);
            });
    }, [page, quantity]);

    const addCartHandler = (product) => {
        let newCart = [];
        let exists = cart.find((item) => item._id === product._id);
        if (!exists) {
            product.quantity = 1;
            newCart = [...cart, product];
        } else {
            const rest = cart.filter((item) => item._id !== product._id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }

        setCart(newCart);
        addToDb(product._id);
    };

    return (
        <>
            <div className="shope-container">
                <div className="products-container">
                    {products.map((product) => {
                        return (
                            <Products
                                addCartHandler={addCartHandler}
                                key={product._id}
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
            <div className="pb-5">
                {[...Array(pageCount).keys()].map((number, id) => {
                    return (
                        <button
                            key={id}
                            onClick={() => setPage(number)}
                            className={`btn btn-outline-primary btn-sm me-2 ${
                                page === number ? "active" : ""
                            }`}
                        >
                            {number + 1}
                        </button>
                    );
                })}
                <select onClick={(e) => setQuantity(e.target.value)}>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>
            </div>
        </>
    );
};

export default Shope;
