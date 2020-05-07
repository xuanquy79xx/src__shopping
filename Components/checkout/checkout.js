import React from 'react'
import Payment from './payment'
import Order from './order'
import './checkout.css'
import { connect } from 'react-redux'
import { FETCH_ALL_DATA, FETCH_USER_DATA } from '../../Actions'
import { API } from '../../ConfigAPI/ConfigAPI'
const mapStateToProps = state => {
    return {
        User: state.User
    }
}
const mapDispatchToProps = dispatch => {
    return {
        FETCH_USER_DATA: (data) => {
            dispatch(FETCH_USER_DATA(data))
        }
    }
}
let infoData = null;
function CheckOut({ User, FETCH_USER_DATA }) {
    document.title="Đặt hàng"
    let username = localStorage.getItem('username')
    let products = localStorage.getItem('products')
    if (!username) {
        return document.location.pathname = "/login"
    }
    if(!products){
        alert("bạn chưa có sản phẩm nào")
        return document.location.pathname = "/"
    }
    // let address = null;
    let user = JSON.parse(username)
    if (User.length === 0) {
        FETCH_ALL_DATA(API, data => {
            infoData = data.filter(item => item.ID === user.ID)
            FETCH_USER_DATA(infoData)
        })
    }
    return (
        <div className="main--content txt_c" style={{ padding: "3rem 0" }}>
            <div className="checkout">
                <Order address={User.length > 0 ? User[0].address : []} />
                <Payment />
            </div>
        </div>
    )

}
export default connect(mapStateToProps, mapDispatchToProps)(CheckOut);