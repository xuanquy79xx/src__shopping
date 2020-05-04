
import React, { useState } from 'react';
import FormAddress from './address/index'
import Info from './info';
import './user.css'
import { API } from '../../ConfigAPI/ConfigAPI'
import { Prompt } from 'react-router-dom';
let infoData = []
function User() {

    const [checked, set_New_Address] = useState(true) // check add address
    const [info, setInfo] = useState(true) // fetch data

    if (!localStorage.getItem('username')) {
        return document.location.pathname = "/login"
    }
    // checkForm props
    function checkedForm(checked) {
        set_New_Address(checked)
        setInfo(!info)
    }

    function deleteAddress(userID, id) {
        if (window.confirm("Bạn muốn xóa địa chỉ này ?")) {
            fetch(`${API}/${userID}/address/${id}`, {
                method: 'DELETE'
            })
                .then(() => {
                    console.log('xóa thành công')
                    setInfo(!info)
                })
        }
    }

    function editAddress(id) {
        sessionStorage.setItem("mode_Edit", JSON.stringify(id))
        set_New_Address(false)
    }
    function paymentAddress(info) {
        let { address } = info
        if (address.length > 0) {
            return address.map((item, index) => {
                return (
                    <div key={index}>
                        <div className="fl_r user__address--info">
                            <h5>{item.name}</h5>
                            <h5>{item.tel}</h5>
                        </div>
                        <div className="user__address--detail">
                            <p>{item.address}</p>
                        </div>
                        <div >
                            <button className="user__address--button button__edit" onClick={() => editAddress(item.id)}>
                                <i className="far fa-edit"></i>
                            </button>
                            <button className="user__address--button button__delete" onClick={() => deleteAddress(info.id, item.id)}>
                                <i className="far fa-trash-alt"></i>
                            </button>
                        </div>
                    </div>
                )
            })
        }
    }

    // show address
    function addressDetail(checked, infoData) {
        if (checked) {

            if (infoData) { // neu ton tai info
                return (
                    <>
                        <h4>Địa Chỉ Thanh Toán</h4>
                        <div className="user__address--body">
                            {paymentAddress(infoData)}
                        </div>
                        <button className="user__address--add"
                            onClick={() => infoData.address.length > 1 ? alert("chỉ được tối đa 2 địa chỉ thanh toán") : set_New_Address(!checked)}>
                            <i className="fas fa-plus"></i>
                        </button>
                    </>
                )
            }

        } else {
            return <FormAddress checkedForm={checkedForm} infoUser={infoData} />
        }
    }

    //check fetch user
    let user = JSON.parse(localStorage.getItem('username'))
    if (info) {
        fetch(API)
            .then(res => res.json())
            .then(data => {
                infoData = data.filter(item => item.ID === user.ID)
                setInfo(!info)
            })
            .catch(err => alert("fetch API error :: " + err))
    }

    return (
        <div className="main--content txt_c" style={{ padding: "3rem 0" }}>

            <Prompt
                when={sessionStorage.getItem("mode_Edit") ? true : false}
                message={() => {
                    sessionStorage.removeItem("mode_Edit")
                    return "are you sure"
                }}
            />
            <div className="fl_r user">
                <Info infoUser={infoData[0]} />
                <div className="user__address">
                    {addressDetail(checked, infoData[0])}
                </div>
            </div>
        </div>
    )
}
export default User;




