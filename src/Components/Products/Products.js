import "./Product.css";

const Products = (props) => {
    const { name, seller, price, img, ratings } = props.product;

    return (
        <div className="product">
            <img src={img} alt="" />
            <h4>Product Name: {name}</h4>
            <p>Prcie ${price}</p>
            <p> Seller: {seller}</p>
            <p>Ratings: {ratings} star</p>
            <button
                onClick={() => props.addCartHandler(props.product)}
                className="cart-btn"
            >
                Add to cart
            </button>
        </div>
    );
};

export default Products;
