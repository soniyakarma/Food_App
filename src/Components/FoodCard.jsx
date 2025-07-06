import React from 'react';
import { FaStar } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/Slices/CartSlice';
const FoodCard = ({ id, name, price, desc, img, rating, handleToast}) => {
    const dispatch = useDispatch();
    return (
        <>
            <div className='w-[250px]  md:w-[250px] h-[auto]  p-5 bg-white flex flex-col rounded-lg gap-2 '>
                <img src={img}
                    className='w-full h-[130px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out overflow-hidden' />
                <div><h2 className='font-bold '>{name}</h2>
                    <span className='font-bold text-primary' >₹{price}</span></div>
                <p className='text-sm'>{desc.slice(0, 50)}...</p>
                <div className='flex justify-between'>
                    <span className='flex justify-center items-center'>
                        <FaStar className='mr-1 text-yellow-400' /> {rating}
                    </span>
                    <button onClick={() => {
                        dispatch(addToCart({
                            id, name, price, rating, qty: 1,img
                        }));
                        handleToast(name);
                    }} className='btn bg-primary text-white   '>Add to cart</button>
                </div>
            </div>
        </>

    );

}
export default FoodCard;