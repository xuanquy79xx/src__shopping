import { combineReducers } from 'redux';
import Products from './Products';
import Messenger from './Messenger';
import Cart from './Cart';
import User from './user';
import CheckOut from './checkOut';

const Reducer = combineReducers({
    Products, Messenger, Cart, User,CheckOut
})
export default Reducer;