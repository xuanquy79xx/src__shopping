import React from 'react'

function ListOrder() {
    return (
        <ul className="fl_c listOrder__info">
            <li className="active" onClick={() => checkListOrder(0)}>Đang xử lý</li>
            <li onClick={() => checkListOrder(1)}>Đã xác nhận</li>
            <li onClick={() => checkListOrder(2)}>Đang vận chuyển</li>
            <li onClick={() => checkListOrder(3)}>Hoàn Thành</li>
            <li onClick={() => checkListOrder(4)}>Hủy đơn</li>
        </ul>
    )
}
export default ListOrder;

function checkListOrder(checkLs) {
    let ul = document.querySelector(".listOrder__info")
    let lis = Array.from(ul.querySelectorAll("li"))
    for (let i = 0; i < lis.length; i++) {
        if (checkLs === i) {
            lis[i].classList.add("active")
        } else {
            lis[i].classList.remove("active")
        }
    }
}