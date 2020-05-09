import React, { useState } from 'react'
import ListOrder from './listOrder'
import { FETCH_ALL_DATA, LOADING } from '../../../Actions/index'
import { API_ORDER } from '../../../ConfigAPI/ConfigAPI'
let Data = []
function OrderTab() {
    const [state, func] = useState(true);
    let user = JSON.parse(localStorage.getItem("username"))
    if (!user) return document.location.pathname = "login"
    if (state) {
        LOADING(true)
        FETCH_ALL_DATA(API_ORDER, data => {
            Data = data.filter(i => i.user.ID === user.ID)
            func(!state)
        })
    }
    return (
        <div className="main--content" style={{ padding: "3rem 0" }}>
            <div id="user__orderTab">
                <h3>Tình trạng đơn hàng</h3>

                <div className="fl_r listOrder">
                    <ListOrder />
                    <div className="listOrder__content">
                        {showOrder(Data)}
                    </div>

                </div>
            </div>
        </div>
    )

}
export default OrderTab;

function showOrder(Data) {
    if (Data.length === 0) return false;
    let result = null;
    let { order } = Data[0];
    console.log(order)
    result = order.map((item, index) => {
        return (
            <div className="fl_r" key={index}>
                <div className="fl_c listOrder__content--image" data-before={`+${item.product.length}`} >
                    <img src={item.product[0].product.imageThumbnail} alt="order" />
                </div>
                <div className="fl_c listOrder__content--status txt">
                    <strong>trạng thái</strong>
                    <span>{item.status}</span>
                </div>
                <div className="fl_c listOrder__content--method txt">
                    <strong>phương thức</strong>
                    <span>{item.date}</span>
                </div>
                <div className="fl_c listOrder__content--total txt">
                    <strong>tổng tiền</strong>
                    <span>{item.total}$</span>
                </div>
                <div className="fl_c listOrder__content--viewDetail">
                    <button className="btn_c">xem thêm</button>
                </div>
            </div>
        )
    })
    LOADING(false)
    return result;
}
