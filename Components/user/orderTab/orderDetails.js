import React from "react";
import { Link } from 'react-router-dom';

function OrderDetails() {
    let listItem = JSON.parse(sessionStorage.getItem("orderDetails"))
    if (!listItem) return document.location.pathname = "/user/order"

    console.log(listItem);
    let listProducts = listItem.product.map((item, index) => {
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
    return (
        <div className="main--content" style={{ padding: "3rem 0" }}>

            <div className="orderDetails">
                <div className="orderDetails__address" style={{background:'#dddddd',padding:'1rem'}}>
                        <em style={{borderBottom:"1px solid red"}}>{listItem.status}</em>
                        <h5>Địa Chỉ: {listItem.address}</h5>
                        <h5>Tên: {listItem.name}</h5>
                        <h5>Địện thoại: {listItem.tel}</h5>
                        <h5>Ghi Chú: <em>{listItem.note}</em></h5>
                </div>
                <div className="orderDetails__info">
                    <h3 className="txt_c">Thông Tin Hóa Đơn</h3>
                    <div className="Payment__products">
                        {listProducts}
                    </div>
                    <h4 className="txt_c">{listItem.date} &nbsp; {listItem.price}$</h4>
                    <h4 className="txt_c">Tổng Tiền: {listItem.total} $</h4>
                </div>
            </div>
        </div>
    )
}
export default OrderDetails;

function pre_detail(product) {
    localStorage.setItem('productDetail', JSON.stringify(product))
}