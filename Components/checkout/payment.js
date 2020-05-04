import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
const mapStateToProps = state => {
    return {
        Cart: state.Cart
    }
}

function Payment({ Cart }) {
    let pre_detail = (product) => {
        localStorage.setItem('productDetail', JSON.stringify(product))
    }

    let productResult = Cart.map((item, index) => {
        return (
            <div className="Payment__products--details" key={index}>

                <div className="fl_r">
                    <Link to={`/product-detail`} onClick={() => pre_detail(item.product)} >
                        <img src={item.product.imageThumbnail} alt={item.product.name} />
                    </Link>
                    <div className="fl_c" style={{ justifyContent: "space-around" }}>
                        <Link to={`/product-detail`} onClick={() => pre_detail(item.product)} >
                            <strong>{item.product.name}</strong>
                        </Link>
                        <small>{item.product.price}$</small>
                        <small>size: {item.size}</small>
                    </div>
                </div>
                <span>x {item.quantity}</span>
            </div>
        )
    })


    let sumTotal = () => {
        let sum = null;
        for (let i = 0; i < Cart.length; i++) {
            sum += Cart[i].quantity * Cart[i].product.price;
        }
        return sum;
    }

    return (
        <div className="Payment">
            <h4>Thông Tin Đơn Hàng</h4>
            <div className="Payment__products">
                {productResult}
            </div>
            <div className="Payment__total">
                <div className="fl_r">
                    <h5>Tổng Tiền Hàng:</h5>
                    <span>{sumTotal()}$</span>
                </div>
                <div className="fl_r">
                    <h5>Phí Vận Chuyển:</h5>
                    <span>1$</span>
                </div>
            </div>
            <div className="Payment__note">
                <div>
                    <h5>Ghi Chú</h5>
                </div>
                <div>
                    <textarea
                        placeholder="Bạn có nhắn gì tới shop không?"
                        rows="6"
                        maxLength="1000"
                        tabIndex="5"
                    />
                </div>
            </div>
            <div className="Payment__totalAndSubmit">
                <div className="fl_r ">
                    <h5>Tổng thanh toán</h5> <span>{sumTotal() + 1}$</span>
                </div>
                <button className="btn_c" style={{ width: "100px" }}>Đặt Hàng</button>
            </div>


        </div >
    )

}
export default connect(mapStateToProps, null)(Payment);