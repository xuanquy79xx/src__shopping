import React from 'react'

function Order() {
    return (
        <div className="order">
            <h3>Địa Chỉ</h3>
            <div className="order__shipping">
                    <div className="fl_r">
                        <h5>khucxuanquy</h5>
                        <h5>0123123123</h5>
                    </div>
                    <div className="order__shipping--address">
                        <p>abca asdasd asd asdas adagad gadf</p>
                    </div>
            </div>
            <h3>Phương Thức Vận Chuyển</h3>
            <div>
                <span>1 - 2 ngày</span>
                <span>1$</span>
            </div>
        </div>
    )

}
export default Order;