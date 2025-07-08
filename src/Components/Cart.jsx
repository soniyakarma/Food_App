import React, { useEffect, useRef, useState } from 'react';
import { IoMdClose } from "react-icons/io";
import CartItem from './CartItem';
import { useSelector } from "react-redux";
import { IoMdCart } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Success from '../Pages/Success';
const Cart = ({ setShowPopup }) => {    //  used to select the item (cart item )
    const [activeCart, setActiveCart] = useState(true);
    const [showCart, setShowCart] = useState(true);
   
    const cartItems = useSelector((state) => state.cart.cart);     // console.log(cartItems);  // reduce method have 2 parameter ,1 accumilator (total) ,2nd is value 
    const totalQuantity = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);  // 0 is initial value of total qty
    const totalPrice = cartItems.reduce((total, item) => total + item.qty * item.price, 0);
    const handleCheckout = () => {
        setShowPopup(true);
    }
    return (<>  {showCart && (
        <div className={`fixed right-0 top-0 lg:w-[30vw]  bg-white p-3 mb-3 shadow-lg rounded-xl max-h-screen overflow-y-auto    ${activeCart ? "translate-x-0" : "translate-x-full"}`}>
            <div 
             className='flex justify-between items-center my-3 '>
                <span className='text-xl font-bold '>My Order</span>
                <IoMdClose onClick={() => setShowCart(false)} className='border-2 border-gray-600 text-gray-600 font-bold p-1 text-xl 
                    rounded-md hover:text-black, hover:bg-blue hover:border-blue-300  cursor-pointer' /> </div>
            {cartItems.length > 0 ? cartItems.map((food) => {
                return (<CartItem key={food.id}
                    id={food.id}
                    name={food.name}
                    price={food.price}
                    img={food.img}
                    qty={food.qty} />
                );
            }) : <h2 className='text-center text-xl font-bold'>Your Cart is Empty</h2>}
            {cartItems.length > 0 && (
                <div className='p-2 border-t '>
                    <h3 className='font-semibold'>Total Items : {totalQuantity}</h3>
                    <h3 className='font-semibold'>Total Amount : ₹ {totalPrice}</h3>
                    <hr /> <br />
                    <button className='btn bg-primary text-white' disabled={cartItems.length === 0} onClick={handleCheckout}>CheckOut</button>
                    <br />
                </div>
            )}
        </div>
    )} <IoMdCart onClick={() => setActiveCart(!activeCart)} className={`rounded-full bg-white shadow-md  text-5xl p-2 fixed bottom-4 right-4 ${totalQuantity > 0 && "animate-bounce delay-500 transition-all"} `} />
    </>);
}
export default Cart;