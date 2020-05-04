

const dataUser = JSON.parse(sessionStorage.getItem('user'))
const Data = dataUser ? dataUser : [];

const User = (state = Data, action) => {

    switch (action.type) {

        default: return [...state]
    }
}
export default User;