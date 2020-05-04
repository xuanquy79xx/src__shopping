import React from 'react';
import { connect } from 'react-redux';
import { DELETE_PRODUCT_IN_CART, CHANGE_QUANTITY_IN_CART } from '../Actions/index';
import { Link } from 'react-router-dom';
const mapStateToProps = state => {
    return {
        Cart: state.Cart
    }
}
const mapDispatchToProps = dispatch => {
    return {
        DELETE_PRODUCT_IN_CART: product => {
            dispatch(DELETE_PRODUCT_IN_CART(product))
        },
        CHANGE_QUANTITY_IN_CART: (product, quantity) => {
            dispatch(CHANGE_QUANTITY_IN_CART(product, quantity))
        }
    }
}
function Cart({ Cart, DELETE_PRODUCT_IN_CART, CHANGE_QUANTITY_IN_CART }) {
    // window.scrollTo(0, 0);
    document.title = "cart products"

    let pre_detail = (product) => {
        localStorage.setItem('productDetail', JSON.stringify(product))
    }
    let resultPC = Cart.map((item, index) => {
        return (
            <tr key={index}>
                <th><Link to={`/product-detail`} onClick={() => pre_detail(item.product)} ><img src={item.product.imageThumbnail} alt={item.product.name} /></Link>  </th>
                <th><Link to={`/product-detail`} onClick={() => pre_detail(item.product)} >{item.product.name}</Link></th>
                <th>{item.size}</th>
                <th>{item.product.price}$</th>
                <th>
                    <button className="btn_c quantity" onClick={() => CHANGE_QUANTITY_IN_CART(item.product, -1)}>-</button>
                    {item.quantity}
                    <button className="btn_c quantity" onClick={() => CHANGE_QUANTITY_IN_CART(item.product, 1)}>+</button>
                </th>
                <th>{item.product.price * item.quantity}$</th>
                <th><button className="btn_c" onClick={() => DELETE_PRODUCT_IN_CART(item.product)} >X</button></th>
            </tr>
        )
    })
    let sumTotal = () => {
        let sum = null;
        for (let i = 0; i < Cart.length; i++) {
            sum += Cart[i].quantity * Cart[i].product.price;
        }
        return sum;
    }

    let pay = () => {
        // if (localStorage.getItem('username')) {
        //     alert('are you sure :: ' + sumTotal())
        // }
        console.log("let's pay")

    }
    window.onresize = () => {
        if (window.innerWidth > 500 && window.innerWidth < 550) {
            document.location.reload()
        }
    }
    if (window.innerWidth > 550) {
        return (
            <div className="main--content --cart">
                <table>
                    <thead>
                        <tr>
                            <th>Hình Ảnh</th>
                            <th>Tên</th>
                            <th>Size</th>
                            <th>Giá</th>
                            <th>Số lượng</th>
                            <th>Tổng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {resultPC}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th>{sumTotal()}$</th>
                            <th><Link to="/checkout" className="btn_c " style={{ width: "100px", padding: "10px" }} onClick={() => pay()}>Thanh Toán</Link></th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        )
    } else {
        return (
            <div className="main--content --cart" style={{ margin: "3rem auto" }}>
                {
                    Cart.map((item, index) => {
                        return (
                            <div className="fl_r cart__mobile" key={index} >
                                <Link to={`/product-detail`} onClick={() => pre_detail(item.product)} > <img className="cart__mobile--img" src={item.product.imageThumbnail} alt="img" /></Link>
                                <div>
                                    <Link to={`/product-detail`} onClick={() => pre_detail(item.product)} ><h4 >{item.product.name}</h4></Link>
                                    <span >size: {item.size}</span>
                                    <div className="fl_r cart__mobile--quantity" >
                                        <button className="btn_c quantity" onClick={() => CHANGE_QUANTITY_IN_CART(item.product, -1)}>-</button>
                                        {item.quantity}
                                        <button className="btn_c quantity" onClick={() => CHANGE_QUANTITY_IN_CART(item.product, 1)}>+</button>
                                    </div>
                                </div>
                                <span> {item.product.price}$ </span>
                                <button className="btn_c cart__mobile--delete" onClick={() => DELETE_PRODUCT_IN_CART(item.product)} > X </button>
                            </div>
                        )
                    })
                }
                <div className="fl_r" style={{ justifyContent: "flex-end" }}>
                    <span>{sumTotal()}$</span>
                    <Link to="/checkout" className="btn_c cart__mobile--pay" onClick={() => pay()}>Thanh Toán</Link>
                </div>
            </div >

        )

    }

}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);