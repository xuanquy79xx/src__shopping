import React from 'react';
import { Link } from 'react-router-dom';
function Product({ Product }) {

    let rate = function (num) {
        let result = [];
        for (let i = 1; i <= 5; i++) {
            (i <= num) ? result.push(<i key={i} className="fas fa-star" />)
                : result.push(<i key={i} className="far fa-star" />)
        }
        return result;
    }
    let saveToLocalStorage = (item) => {
        localStorage.setItem('productDetail', JSON.stringify(item))
    }
    return (
        <div className="--product" onClick={() => saveToLocalStorage(Product)}>
            <Link to={`/product-detail`}>
                <div className="--imgage" >
                    <img src={Product.imageThumbnail} alt={Product.name} />
                </div>
                <h4>{Product.name} </h4>

                <div className="--price txt_c">
                    <strong> <span>{Product.price}</span>$</strong>
                </div>
                <div className="--rate rate--star">
                    {rate(Product.rate)}
                    <span> <span>{Product.votes}</span> đánh giá</span>
                </div>
                <button className="btn_c">Mua</button>
            </Link>
        </div>
    )
}
export default Product;