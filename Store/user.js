

// const dataUser = JSON.parse(sessionStorage.getItem('addressUser'))
// const Data = dataUser ? dataUser : [];
const User = (state = [], action) => {
    let { data } = action;
    switch (action.type) {
        case "FETCH_USER_DATA":
            {
                return [...data]
            }
        default: return [...state]
    }
}
export default User;