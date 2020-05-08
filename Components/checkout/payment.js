import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { LOADING, FETCH_ALL_DATA } from '../../Actions';
const mapStateToProps = state => {
    return {
        Cart: state.Cart,
        CheckOut: state.CheckOut,
        User: state.User

    }
}

function Payment({ Cart, User, CheckOut }) {
    let methodOrder = CheckOut[1]
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
                    <span>{methodOrder ? methodOrder.price : "..."}$</span>
                </div>
            </div>
            <div className="Payment__note">
                <div>
                    <h5>Ghi Chú</h5>
                </div>
                <div>
                    <textarea
                        id="noteCustomer"
                        placeholder="Bạn có nhắn gì tới shop không?"
                        rows="6"
                        maxLength="1000"
                        tabIndex="5"
                    />
                </div>
            </div>
            <div className="Payment__totalAndSubmit">
                <div className="fl_r ">
                    <h5>Tổng thanh toán</h5> <span>{sumTotal() + (methodOrder ? methodOrder.price : 0)}$</span>
                </div>
                <button className="btn_c" style={{ width: "100px" }} onClick={() => methodOrder ? submitCheckOut(User, Cart, CheckOut, sumTotal() + methodOrder.price) : alert("Bạn chưa chọn phương thức vận chuyển")}>Đặt Hàng</button>
            </div>
        </div>
    )
}
export default connect(mapStateToProps, null)(Payment);

async function submitCheckOut(user, cart, checkout, sum) {
    let shippingAddress = checkout[0]
    let shippingOrder = checkout[1]
    if (shippingAddress && shippingOrder && cart.length > 0) {

        LOADING(true)
        let noteCustomer = document.querySelector("#noteCustomer").value
        let newUser = user[0]
        let data = {
            user: { ID: newUser.ID, id: newUser.id, email: newUser.email },
            order: [{ product: cart, ...shippingAddress, ...shippingOrder, total: sum, note: noteCustomer, status: "chờ xử lý" }],
        }

        await FETCH_ALL_DATA("https://5e3d62c7a49e540014dc0ba4.mockapi.io/dbCustomer", dt => {
            let index = -1;
            let temp = null;
            for (const i in dt) {
                if (dt[i].user.ID === newUser.ID) {
                    index = dt[i].id
                    temp = i
                }
            }
            fetch(`https://5e3d62c7a49e540014dc0ba4.mockapi.io/dbCustomer/${index !== -1 ? index : ""}`, {
                method: `${index !== -1 ? "PUT" : "POST"}`,
                headers: { 'Content-Type': 'application/json', },
                body: JSON.stringify(index !== -1 ? { order: [...dt[temp].order, ...data.order] } : data)
            })
                .then(res => res.json())
                .then(() => {
                    localStorage.removeItem("products")
                    document.location.pathname = "/user/order"
                })
                .catch(er => {
                    LOADING(false)
                    console.error(er)
                })
        })



    } else {
        if (!shippingAddress) alert("Bạn chưa chọn địa chỉ giao hàng")
        if (!localStorage.getItem("products")) alert("chưa có sản phẩm nào trong giỏ hàng")
    }
}