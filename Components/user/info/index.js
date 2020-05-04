import React from 'react'
import { API } from '../../../ConfigAPI/ConfigAPI'
import { FETCH_DATA } from '../../../Actions/index'
let checked = true;
function Info({ infoUser }) {
    if (!infoUser) {
        return (
            <div className="user__info">
                <h2>Thông Tin</h2>
            </div>
        )
    }
    return (
        <div id="user__info" className="user__info">
            <h2>Thông Tin</h2>
            <div>
                <label htmlFor="fullName">Họ và Tên </label>
                <input id="fullName" type="text" disabled defaultValue={infoUser.fullName} />
            </div>
            <div>
                <label htmlFor="email">Email </label>
                <input id="email" type="email" disabled defaultValue={infoUser.email} />
            </div>
            <div>
                <label htmlFor="tel">Số Điện Thoại </label>
                <input id="tel" type="tel" disabled defaultValue={infoUser.tel} />
            </div>
            <div>
                <label htmlFor="male" >Giới Tính </label>
                <div>
                    <label htmlFor="male"> Nam</label>
                    <input type="radio"
                        name="gender"
                        className="user__info--gender "
                        id="male"
                        disabled
                        defaultChecked={infoUser.gender ? true : false}
                    /> &nbsp;&nbsp;
                <label htmlFor="female"> Nữ</label>
                    <input type="radio"
                        name="gender"
                        className="user__info--gender "
                        id="female"
                        defaultChecked={infoUser.gender ? false : true}
                        disabled />
                </div>
            </div>
            <div>
                <label htmlFor="date">Ngày Sinh</label>
                <input id="date" type="date" disabled defaultValue={infoUser.date} />

            </div>

            <div className="fl_r" style={{ justifyContent: "flex-end" }}>
                <button id="user__info--edit" onClick={() => onEdit(infoUser.id)}> sửa </button>
                <button id="user__info--changePassword" > đổi mật khẩu </button>
            </div>
        </div>
    )
}
export default Info;

function onEdit(id) {
    let setInput = document.querySelectorAll("#user__info input") // many input
    let text = document.getElementById("user__info--edit") // change text edit
    let pass = document.getElementById("user__info--changePassword") // button change password
    if (checked) {
        text.innerHTML = "cập nhật"
        pass.style.display = "none"
        for (let i = 0; i < setInput.length; i++) {
            setInput[i].removeAttribute("disabled")
        }
        return checked = false;
    } else {
        fetchUpdateData(id, setInput[0].value, setInput[1].value, setInput[2].value, setInput[3].checked, setInput[5].value)
        text.innerHTML = "sửa"
        pass.style.display = "inline"
        for (let i = 0; i < setInput.length; i++) {
            setInput[i].setAttribute("disabled", true)
        }
        return checked = true;
    }

}
function fetchUpdateData(id, fullName, email, tel, gender, date) {
    let data = { fullName, email, tel, gender, date }
    FETCH_DATA(`${API}/${id}`,"PUT", data)
        .then(res => res.json())
        .then(data => {
            localStorage.setItem("username", JSON.stringify({ fullName: data.fullName, ID: data.ID }))
        })

}
