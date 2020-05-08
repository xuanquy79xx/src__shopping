import React from 'react';
import { Logo } from '../Store/images/index';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { allProduct, ProductAo, ProductQuan, ProductGiay, ProductPhuKien, OPTION_LEFT } from '../Actions/index';
const mapStateToProps = state => {
    return {
        Cart: state.Cart,
    }
}

function Header({ Cart, allProduct, productAo, productQuan, productGiay, productPhuKien, OPTION_LEFT }) {
    let totalQuantity = () => {
        let sum = 0;
        if (Cart.length !== 0) {
            for (let i = 0; i < Cart.length; i++) {
                sum += parseInt(Cart[i].quantity)
            }
        }
        return sum;
    }
    let nav__link = () => {
        let username = localStorage.getItem('username');
        let userDetail = JSON.parse(username)
        if (username) {
            return (
                <li><Link to='/user'>{userDetail.fullName} <i className="far fa-caret-square-down"></i></Link></li>
            )
        } else {
            return (
                <>
                    <li><Link to="/login">Đăng Nhập</Link></li>
                    <li><Link to="/register">Đăng Kí</Link></li>
                </>
            )
        }
    }
    window.onload = function () {
        let HeaderSearch = document.getElementById("HeaderSearch");
        HeaderSearch.addEventListener('keypress', function (e) {
            if (e.charCode === 13 || e.key === "Enter" || e.keyCode === 13) {
                if (window.location.pathname === "/") {
                    OPTION_LEFT("TẤT CẢ", HeaderSearch.value, 0, 0, 9999)
                }
            }
        })
    }


    return (
        <div className="page--top">
            <header>
                <div className="--header--top">
                    <div className="--left">
                        <ul>
                            <li><Link to=""><i className="fas fa-barcode"></i> <span className="text__responsive">Tải Ứng Dụng</span></Link></li>
                            <li><Link to=""><span className="text__responsive">Kết Nối</span> <i className="fab fa-facebook" /> <i className="fab fa-instagram" /></Link>
                            </li>
                        </ul>
                    </div>
                    <div className="--right">
                        <ul>
                            <li><Link to="/user/order"><i className="fas fa-bell" /><span className="text__responsive">Thông Báo</span> </Link></li>
                            <li><Link to="/user/order"><i className="far fa-question-circle" /><span className="text__responsive">Trợ Giúp</span></Link></li>
                            {nav__link()}
                        </ul>
                    </div>
                </div>
                <div className="--header--center">
                    <Link to="/"><img src={Logo} className="cursor_p" alt="logo" onClick={() => allProduct("TẤT CẢ")} /></Link>
                    <div className="--search">
                        <input id="HeaderSearch" type="search" placeholder="Bạn Muốn Tìm Gì?" />
                    </div>
                    <Link to="/cart">
                        <div className="--card cursor_p ">
                            <i className="fas fa-shopping-cart" />
                            <span>{totalQuantity()}</span>
                        </div>
                    </Link>
                </div>
                <div className="--header--bottom">
                    <ul>
                        <li className="option option1" onClick={() => productAo("ÁO")}> <Link to="/"><span>Áo</span></Link></li>
                        <li className="option option2" onClick={() => productQuan("QUẦN")}><Link to="/"><span>Quần</span></Link></li>
                        <li className="option option3" onClick={() => productGiay("GIÀY")}><Link to="/"><span>Giày</span></Link></li>
                        <li className="option option4" onClick={() => productPhuKien("PHỤ KIỆN")}><Link to="/"><span>Phụ Kiện</span></Link></li>
                    </ul >
                </div >
            </header >
        </div >

    )
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        allProduct: (Messenger) => { dispatch(allProduct(Messenger)) },
        productAo: (Messenger) => { dispatch(ProductAo(Messenger)) },
        productQuan: (Messenger) => { dispatch(ProductQuan(Messenger)) },
        productGiay: (Messenger) => { dispatch(ProductGiay(Messenger)) },
        productPhuKien: (Messenger) => { dispatch(ProductPhuKien(Messenger)) },
        OPTION_LEFT: (Messenger, search, star, priceFrom, priceTo) => { dispatch(OPTION_LEFT(Messenger, search, star, priceFrom, priceTo)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);