

// const dataUser = JSON.parse(sessionStorage.getItem('addressUser'))
// const Data = dataUser ? dataUser : [];
let data = []
const CheckOut = (state = [], action) => {
    let { address, method } = action;
    switch (action.type) {
        case "SHIPPING_CHECKOUT__ADDRESS":
            {
                data[0] = address
                return [...data]
            }
        case "SHIPPING_CHECKOUT__METHOD":
            {
                data[1] = method
                return [...data]
            }
        default: return [...state]
    }
}
export default CheckOut;