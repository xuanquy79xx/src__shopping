
const dataMessenger = "TẤT CẢ";
const Messenger = (state = dataMessenger, action) => {
    if (action.TypeMess) { state = action.TypeMess; }
    return state;
}
export default Messenger;