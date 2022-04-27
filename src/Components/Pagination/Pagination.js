import React, { useEffect, useState } from "react";

const Pagination = () => {
    const [page, setPage] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const [quantity, setQuantity] = useState(10);

    useEffect(() => {
        fetch(`https://quiet-reef-36489.herokuapp.com/productCount`)
            .then((res) => res.json())
            .then((data) => {
                const count = data.count;
                const pages = Math.ceil(count / 10);
                setPageCount(pages);
            });
    }, [page, quantity]);
    return (
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
                <option value="10" selected>
                    10
                </option>
                <option value="15">15</option>
                <option value="20">20</option>
            </select>
        </div>
    );
};

export default Pagination;
