import { configureStore } from '@reduxjs/toolkit';
import CartSlice from './Slices/CartSlice';
import SearchSlice from './Slices/SearchSlice';
const Store = configureStore({                       // for exa class me bhot sare students h or jo cart nam ka student h wo h CartSlice 
    reducer : {
        cart : CartSlice,
        search : SearchSlice,
    },
});
export default Store;