
import React from 'react';
import { connect } from 'react-redux';
import { OPTION_LEFT } from '../Actions';

const style_button = {
    width: 100,
    margin: '10px 0'
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        OPTION_LEFT: (Messenger, search, star, priceFrom, priceTo) => {
            return dispatch(OPTION_LEFT(Messenger, search, star, priceFrom, priceTo))
        }
    }
}
const mapStateToProps = state => {
    return {
        Messenger: state.Messenger
    }
}

function OptionLeft({ OPTION_LEFT, Messenger }) {

    let checkStar = 0;

    const applyOptionLeft = (status) => {
        let searchOptionLeft = document.getElementById("searchOptionLeft");
        let price_from = document.getElementById("price_from");
        let price_to = document.getElementById("price_to");

        if (status) {
            if (price_from.value === "") price_from.value = 0;
            if (price_to.value === "") price_to.value = 9999;
            if (parseInt(price_from.value) <= parseInt(price_to.value)) {
                OPTION_LEFT(Messenger, searchOptionLeft.value, checkStar, parseInt(price_from.value), parseInt(price_to.value))
                resetFrom(searchOptionLeft, price_from, price_to)
            } else {
                alert("check lai di")
            }
        } else {
            resetFrom(searchOptionLeft, price_from, price_to)
        }
    }
    const resetFrom = (searchOptionLeft, price_from, price_to) => {

        searchOptionLeft.value = "";
        price_from.value = "";
        price_to.value = "";
        checkOptionStar(0)
    }

    const checkOptionStar = (id) => {
        let leftOption = document.getElementsByClassName("left--option")[0];
        let rate = leftOption.getElementsByClassName("rate--star")[0];
        let data = rate.getElementsByTagName("div"); //[]
        for (let i = 0; i < data.length; i++) {
            if (i === 5 - id) {
                data[i].classList.add("active");
            } else {
                data[i].classList.remove("active");
            }
        }
        checkStar = id;
    }

    return (
        <div className="--left--content left--option txt_c fl_c">
            <input id="searchOptionLeft" type="search" placeholder={`Tìm Kiếm Trong [ ${Messenger} ]`} /><br />
            {/* address */}

            {/* rate */}
            <h5>Đánh Giá</h5>
            <div className="rate--star">
                <div className="five--star cursor_p" onClick={() => checkOptionStar(5)} >
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                </div>
                <div className="four--star cursor_p" onClick={() => checkOptionStar(4)}>
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="far fa-star" />
                    <span> Trở Lên</span>
                </div>
                <div className="three--star cursor_p" onClick={() => checkOptionStar(3)}>
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="far fa-star" />
                    <i className="far fa-star" />
                    <span> Trở Lên</span>
                </div>
                <div className="two--star cursor_p" onClick={() => checkOptionStar(2)}>
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="far fa-star" />
                    <i className="far fa-star" />
                    <i className="far fa-star" />
                    <span> Trở Lên</span>
                </div>
                <div className="one--star cursor_p" onClick={() => checkOptionStar(1)}>
                    <i className="fas fa-star" />
                    <i className="far fa-star" />
                    <i className="far fa-star" />
                    <i className="far fa-star" />
                    <i className="far fa-star" />
                    <span> Trở Lên</span>
                </div>
            </div>
            {/* price */}
            <h5>Khoảng Giá</h5>
            <div className="price">
                <input type="number" placeholder="$ Từ" id="price_from" />
                <span> - </span>
                <input type="number" placeholder="$ Đến" id="price_to" />
            </div>
            <div className="check--form">
                <button className="btn_c" style={style_button} onClick={() => applyOptionLeft(true)} >Áp Dụng</button>
                &nbsp;<button className="btn_c" style={style_button} onClick={() => applyOptionLeft(false)}>Xóa</button>
            </div>
        </div>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(OptionLeft);



/**
 *   <h5>Nơi bán</h5>
            <div className="check--address fl_c txt_l">
                <div className="--checkbox">
                    <label>
                        <input type="checkbox" defaultValue={1} />
                        <span> Hà Nội</span>
                    </label>
                </div>
                <div className="--checkbox">
                    <label>
                        <input type="checkbox" defaultValue={2} />
                        <span> Hồ Chí Minh</span>
                    </label>
                </div>
                <div className="--checkbox">
                    <label>
                        <input type="checkbox" defaultValue={3} />
                        <span> Đà Nẵng</span>
                    </label>
                </div>
                <div className="--checkbox">
                    <label>
                        <input type="checkbox" defaultValue={4} />
                        <span> Hải Phòng</span>
                    </label>
                </div>
            </div><br />

 */