import React from 'react'
import { connect } from 'react-redux'
import { SHIPPING_CHECKOUT } from '../../Actions/index'
let ShippingMethod = [
    { date: "1 - 2 ngày", price: 5 },
    { date: "3 - 4 ngày", price: 3 },
]
const mapDispatchToProps = dispatch => {
    return {
        SHIPPING_CHECKOUT: (checkOption, v1, v2, v3) => {
            dispatch(SHIPPING_CHECKOUT(checkOption, v1, v2, v3))
        }
    }
}
function Order({ address, SHIPPING_CHECKOUT }) {
    //  set 1 th nua, them dia chi neu k ton tai address nao
    let result = address.map((item, index) => {
        return (
            <div className="order__shipping" key={index} >
                <input name="address" type="radio" onClick={() => SHIPPING_CHECKOUT("address", item.name, item.tel, item.address)} />
                <div className="fl_r">
                    <h5>{item.name}</h5>
                    <h5>{item.tel}</h5>
                </div>
                <div className="order__shipping--address">
                    <p>{item.address}</p>
                </div>
            </div>
        )
    })
    let resultMethod = ShippingMethod.map((item, index) => {
        return (
            <div className="order__shipping" key={index}>
                <input type="radio" name="shippingMethod" onClick={() => SHIPPING_CHECKOUT("method", item.date, item.price)} />
                <div>
                    <span>{item.date}</span>
                    <span>{item.price} $</span>
                </div>
            </div>
        )
    })
    return (
        <div className="order">
            <h3>Địa Chỉ</h3>
            {result}
            <h3>Phương Thức Vận Chuyển</h3>
            {resultMethod}
        </div>
    )

}
export default connect(null, mapDispatchToProps)(Order);
