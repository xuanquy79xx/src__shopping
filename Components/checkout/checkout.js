import React from 'react'
import Payment from './payment'
import Order from './order'
import './checkout.css'
function CheckOut() {
    if (!localStorage.getItem('username')) {
        return document.location.pathname = "/login"
    }
    return (
        <div className="main--content txt_c" style={{ padding: "3rem 0" }}>
            <div className="checkout">
                <Order />
                <Payment />

            </div>
        </div>
    )

}
export default CheckOut;