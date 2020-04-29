import { combineReducers } from 'redux';
import Products from './Products';
import Messenger from './Messenger';
import Cart from './Cart';
const Reducer = combineReducers({
    Products, Messenger, Cart
})
export default Reducer;