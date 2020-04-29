
import React, { Component } from 'react';
import { ADD_TO_CART } from '../../Actions/index';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const mapDispatchToProps = dispatch => {
    return {
        ADD_TO_CART: (product, size, quantity) => {
            dispatch(ADD_TO_CART(product, size, quantity))
        }
    }
}
const sizeChar = ["S", "M", "L"];
const sizeNum = [36, 37, 38, 39, 40, 41, 42, 43, 44, 45];
class ProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: null,
            quantity: 0,
            total: 0
        }
    }
    BuyNow(product) {
        let { size, quantity } = this.state;
        console.log(this.state)
        if (size !== null && quantity > 0) {
            this.props.ADD_TO_CART(product, size, parseInt(quantity))
        } else {
            quantity <= 0 ? alert("Bạn chưa thêm số lượng kìa") : alert("bạn chưa chọn size à??")
        }
    }
    changeQuantity = (e, price) => {
        let target = e.target;
        let name = target.name;
        let value = target.value;
        if (value >= 0) {
            this.setState({
                [name]: value,
                total: price * value
            })
        } else {
            alert("Sản Phẩm Phải Lớn Hơn 0")
        }
    }
    size = (item) => {
        this.setState({
            size: item.toString()
        })
    }

    loadSize = (id, size) => {
        if (id >= 30 && id <= 38) {
            return sizeNum.map((item, index) => {
                return (
                    <button
                        key={index}
                        onClick={() => this.size(item)}
                        className={item.toString() === size ? `btn_c btn--active` : `btn_c`}>
                        {item}
                    </button>
                )
            })
        } else {
            return sizeChar.map((item, index) => {
                return (
                    <button
                        key={index}
                        onClick={() => this.size(item)}
                        className={item.toString() === size ? `btn_c btn--active` : `btn_c`}>
                        {item}
                    </button>
                )
            })
        }
    }
    render() {
        let { quantity, size, total } = this.state;
        let get_Local = null;
        if (localStorage.getItem('productDetail')) {
            get_Local = JSON.parse(localStorage.getItem('productDetail'))
        }
        let product = get_Local;
        if (!get_Local) {
            document.location.pathname = ""
        }
        document.title = product.name;
        return (
            <div className="main--content" >
                <div className=" --product--detail fl_r">
                    <div className="--product--detail--image">
                        <img src={product.image} alt={product.name} />
                    </div>

                    <div className="--product--detail--content txt_c">
                        <h2>{product.name}</h2>
                        <p><span></span><strong>Giá</strong><span></span> </p>
                        <p><strong>{product.price}$</strong></p>
                        <p><span></span><strong>Mô Tả Sản Phẩm</strong><span></span></p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quos ducimus non vero deserunt cumque assumenda sit
                            blanditiis fugit ipsum perferendis provident, sunt amet. Consequuntur non neque exercitationem fugit quasi!
                    </p>
                        <p><span></span><strong>Size</strong><span></span> </p>
                        <p id="Size">{this.loadSize(product.id, size)}</p>
                        <p><span></span><strong>Số Lượng</strong><input id="quantity" type="number" onChange={(e) => this.changeQuantity(e, product.price)} name="quantity" value={quantity} /><span></span> </p>
                        <strong>Tổng: <span>{total}</span>$
                        <Link to={quantity > 0 && size !== null ? `/cart` : `/product-detail/${product.id}`}> <button style={{ width: "100px" }} className="btn_c" onClick={() => this.BuyNow(product)}>Xúc Luôn</button></Link>
                        </strong>
                    </div>
                </div>
            </div>
        )
    }
}
export default connect(null, mapDispatchToProps)(ProductDetail);