import React from "react";
import "./ReviewItem.css";
import DeleteIcon from "@mui/icons-material/Delete";

const ReviewItem = (props) => {
    const { product, onRemoveItem } = props;
    const { name, img, price, quantity, shipping } = props.product;

    return (
        <div className="item-conatiner">
            <img src={img} alt="" />
            <div className="item-details">
                <h3>{name}</h3>
                <p>
                    Price: <span>${price}</span>
                </p>
                <p>
                    Shipping: <span>${shipping}</span>
                </p>
                <p>
                    Quantity: <span>{quantity}</span>
                </p>
            </div>
            <button
                onClick={() => onRemoveItem(product)}
                className="remove-btn"
            >
                <DeleteIcon />
            </button>
        </div>
    );
};

export default ReviewItem;
