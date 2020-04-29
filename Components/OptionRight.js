import React from 'react';
import Products from './Products';
import { SORT_BY_HOT_PRODUCT, SORT_BY_PRICE, SORT_BY_RATE, SORT_DEFAULT } from '../Actions/index';
import { connect } from 'react-redux';



const mapStateToProps = state => {
    return {
        Messenger: state.Messenger
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        SORT_DEFAULT: (Messenger) => {
            return dispatch(SORT_DEFAULT(Messenger))
        },
        SORT_BY_PRICE: (type) => {
            return dispatch(SORT_BY_PRICE(type))
        },
        SORT_BY_RATE: () => {
            return dispatch(SORT_BY_RATE())
        },
        SORT_BY_HOT_PRODUCT: () => {
            return dispatch(SORT_BY_HOT_PRODUCT())
        },
    }
}
function OptionRight({ SORT_BY_HOT_PRODUCT, SORT_BY_PRICE, SORT_BY_RATE, SORT_DEFAULT, Messenger }) {

    return (
        <div className="--right--content">
            <div className="--right--option fl_r">
                <div className="--sort fl_r">
                    <p><strong>Sắp xếp theo </strong></p>
                    <button className="btn_c" onClick={() => SORT_DEFAULT(Messenger)} >Mặc Định</button>
                    <button className="btn_c" onClick={() => SORT_BY_RATE()} >Đánh Giá</button>
                    <button className="btn_c" onClick={() => SORT_BY_HOT_PRODUCT()} >Bán Chạy</button>
                    <button className="btn_c" onClick={() => SORT_BY_PRICE(1)} >Giá Cao</button>
                    <button className="btn_c" onClick={() => SORT_BY_PRICE(-1)} >Giá Thấp</button>
                </div>
                <div id="--hashtag">
                    <span className="btn_c cursor_p"></span>
                    <span className="btn_c cursor_p"></span>
                    <span className="btn_c cursor_p"></span>
                </div>
            </div>
            <Products />
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(OptionRight);