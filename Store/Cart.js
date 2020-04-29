

let Products = JSON.parse(localStorage.getItem('products'))
let Data = Products ? Products : [];
const Cart = (state = Data, action) => {
    let { product, quantity, size } = action;
    switch (action.type) {

        case 'ADD_TO_CART':
            {
                let item = findSuperProductInCart(state, product, size);
                if (item !== -1) {
                    state[item].quantity += quantity;
                } else {
                    state.push({ product, size, quantity })
                }
                localStorage.setItem('products', JSON.stringify(state));
                return [...state];
            }
        case 'DELETE_PRODUCT_IN_CART':
            {
                let item = findProductInCart(state, product);
                if (item !== -1) {
                    state.splice(item, 1);
                }
                localStorage.setItem('products', JSON.stringify(state));
                return [...state];
            }

        case 'CHANGE_QUANTITY_IN_CART':
            {
                let item = findProductInCart(state, product);
                if (item !== -1) {
                    state[item].quantity += quantity;
                    if (state[item].quantity < 1) state[item].quantity = 1;
                    localStorage.setItem('products', JSON.stringify(state));
                    return [...state]
                }
                break;
            }

        default: return [...state];
    }
}
let findProductInCart = (state, product) => {
    let index = -1;
    if (state.length > 0) {
        for (let i = 0; i < state.length; i++) {
            if (state[i].product.id === product.id) {
                index = i;
                break;
            }
        }
    }
    return index;
}
let findSuperProductInCart = (state, product, size) => {
    let index = -1;
    if (state.length > 0) {
        for (let i = 0; i < state.length; i++) {
            if (state[i].product.id === product.id && state[i].size === size) {
                index = i;
                break;
            }
        }
    }
    return index;
}
export default Cart;