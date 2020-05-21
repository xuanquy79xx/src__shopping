
export const allProduct = (Messenger) => { return { type: "ALL_PRODUCT", TypeMess: Messenger } }
export const ProductAo = (Messenger) => { return { type: "PRODUCT_AO", TypeMess: Messenger } }
export const ProductQuan = (Messenger) => { return { type: "PRODUCT_QUAN", TypeMess: Messenger } }
export const ProductGiay = (Messenger) => { return { type: "PRODUCT_GIAY", TypeMess: Messenger } }
export const ProductPhuKien = (Messenger) => { return { type: "PRODUCT_PHU_KIEN", TypeMess: Messenger } }

export const SORT_DEFAULT = (Messenger) => { return { type: "SORT_DEFAULT", TypeMess: Messenger } }
export const SORT_BY_RATE = () => { return { type: "SORT_BY_RATE" } }
export const SORT_BY_HOT_PRODUCT = () => { return { type: "SORT_BY_HOT_PRODUCT" } }
export const SORT_BY_PRICE = (type) => { return { type: "SORT_BY_PRICE", numb: type } }


export const OPTION_LEFT = (Messenger, search, star, priceFrom, priceTo) => { return { type: "OPTION_LEFT", TypeMess: Messenger, search, star, priceFrom, priceTo } }


export const ADD_TO_CART = (product, size, quantity) => { notification("thêm"); return { type: "ADD_TO_CART", product, size, quantity } }
export const DELETE_PRODUCT_IN_CART = (product) => { notification("xóa"); return { type: "DELETE_PRODUCT_IN_CART", product } }
export const CHANGE_QUANTITY_IN_CART = (product, size, quantity) => { notification('thay đổi số lượng'); return { type: "CHANGE_QUANTITY_IN_CART", product, size, quantity } }
export const SEARCH_IN = (Messenger) => { return { Type: "SEARCH_IN", Messenger } }



function notification(string) {
    let notification = document.querySelector('.footer__notification')
    notification.innerHTML = `
    <p><strong>Thông Báo</strong>: ${string} thành công</p>
    `
    notification.classList.add("active")
    setTimeout(() => {
        notification.classList.remove("active")
    }, 1000);

}

export const FETCH_USER_DATA = data => { return { type: "FETCH_USER_DATA", data } }


export const FETCH_DATA = (URL, method, data) => {
    return fetch(URL, {
        method,
        headers: { 'Content-Type': 'application/json', },
        body: JSON.stringify(data)

    })
}
// fetch cho vao callback function


export const FETCH_ALL_DATA = (URL, nextFunction) => {
    return fetch(URL)
        .then(res => res.json())
        .then(nextFunction)
        .catch(err => { console.error(err); LOADING(false) })
}

export const SHIPPING_CHECKOUT = (checkOption, v1, v2, v3) => {
    if (checkOption === "address") {
        return { type: "SHIPPING_CHECKOUT__ADDRESS", address: { name: v1, tel: v2, address: v3 } }
    }
    if (checkOption === "method") {
        return { type: "SHIPPING_CHECKOUT__METHOD", method: { date: v1, price: v2 } }
    }
}
export const LOADING = checked => {
    let cursorBody = document.body.style;
    checked ? cursorBody.cursor = "wait" : cursorBody.cursor = "default"
}