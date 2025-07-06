import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    /* jb slice create karate h to usme 3 chije rhti h 
    1)  name (apne hisab se kuch bhi rkh skte h)
    2) Card ki initial state (apne hisab se kuch bhi rkh skte h)
    3) reducers means we can store multiple functions in reducers*/

    name: "cart",
    initialState: {
        cart: [],
        isCartOpen: false,
    },
    reducers: {
        // state - yha state h (value) [],action - means aap kya krna chahte ho like me chijo add krna chahata hu ya remove karana chahata hu 
        addToCart: (state, action) => {
            // jb ye function trigger ho to usme state ki cart me push kro jo action me data milane wala h wo (action.payload ) 
            //  payloAD MEANS - DATA 
            const existingItem = state.cart.find((item)=>item.id === action.payload.id);
            if(existingItem){
               state.cart = state.cart.map((item)=>item.id===action.payload.id ? {...item,qty:item.qty+1}:item);
            }else
            state.cart.push(action.payload);
        },
        toggleCart:(state,action)=>{
            state.isCartOpen= action.payload;

        },
        removeFromCart: (state,action)=>{
           state.cart = state.cart.filter((item)=>item.id !== action.payload.id);
        },
        incrementQty : (state,action)=>{
            state.cart = state.cart.map((item)=>item.id === action.payload.id ? {...item,qty:item.qty+1}:item)
        },
        decrementQty : (state,action)=>{
            state.cart = state.cart.map((item)=>item.id === action.payload.id ? {...item,qty:item.qty-1}:item)
        }
    }
    ,
});
export const {addToCart,removeFromCart,incrementQty,decrementQty,toggleCart} = CartSlice.actions ;
export default CartSlice.reducer;