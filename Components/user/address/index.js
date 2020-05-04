
import React from 'react';
import { API } from '../../../ConfigAPI/ConfigAPI'
import { FETCH_DATA } from '../../../Actions/index'
let style_button = {
    margin: "1rem .8rem",
    padding: ".4rem 1rem"
}



function FormAddress(props) {
    let { infoUser } = props
    if (sessionStorage.getItem("mode_Edit")) {
        return checkEdit(infoUser, props, true)
    } else {
        return checkEdit(infoUser, props, false)
    }
}
export default FormAddress;


function checkEdit(infoUser, props, edit) {
    let mode_Edit = JSON.parse(sessionStorage.getItem("mode_Edit"))
    let { fullName, tel, address } = infoUser;
    let addressIndex = address[mode_Edit - 1] //{id: name: tel: address}
    return (
        <div className="fl_r user" >
            <div className="user__info">
                <h2>{edit ? "Sửa Địa Chỉ" : "Thêm Địa Chỉ"}</h2>
                <div>
                    <label htmlFor="user__address--fullName">Họ và Tên </label>
                    <input id="user__address--fullName" type="text" defaultValue={edit ? addressIndex.name : fullName} />
                </div>
                <div>
                    <label htmlFor="user__address--tel">Số Điện Thoại </label>
                    <input id="user__address--tel" type="text" defaultValue={edit ? addressIndex.tel : tel} />
                </div>
                <div>
                    <label htmlFor="user__address--address">Địa Chỉ </label>
                    <input id="user__address--address" type="text" defaultValue={edit ? addressIndex.address : ""} />
                </div>
                <button style={style_button} onClick={() => formNewAddress(1, props, addressIndex)}>{edit ? "Sửa" : "Thêm"}</button>
                <button style={style_button} onClick={() => formNewAddress(-1, props, addressIndex)}>Hủy Bỏ</button>
            </div>
        </div>
    )
}


function formNewAddress(numb, props, addressIndex) {
    let { infoUser } = props
    if (numb === 1) {
        let name = document.getElementById("user__address--fullName").value,
            tel = document.getElementById("user__address--tel").value,
            address = document.getElementById("user__address--address").value,
            checkNumb = /0+([0-9]{9,10})\b/g;
        let data = { name, tel, address }
        if (name !== '' && checkNumb.test(tel) && address !== '') {
            // neu addressIndex ton tai ( Edit ) => PUT   
            FETCH_DATA(`${API}/${infoUser.id}/address/${addressIndex ? addressIndex.id : ""}`, `${addressIndex ? "PUT" : "POST"}`, data)
                .then(res => res.json())
                .then(() => {
                    console.log("them thanh cong")
                    props.checkedForm(true)
                    if (addressIndex) {
                        sessionStorage.removeItem("mode_Edit")
                    }
                })
                .catch(err => console.log(err))
        } else {
            if (checkNumb.test(tel) === false) alert("Số điện thoại không hợp lệ");
            if (name === '') alert("Tên không được để trống")
            if (address === '') alert("Địa chỉ không được để trống")
        }
    }
    if (numb === -1) {
        props.checkedForm(true)
        sessionStorage.removeItem("mode_Edit")
    }
}