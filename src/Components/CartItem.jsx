import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { removeFromCart, incrementQty, decrementQty } from '../redux/Slices/CartSlice';
import toast from 'react-hot-toast';
const CartItem = ({ id, name, qty, price, img }) => {
    const dispatch = useDispatch()
    return (
        <div className='flex shadow-md rounded-lg p-2 mb-3 '>
            <img src={img} alt=""
                className='w-[100px] h[50px] sm:w-[100px]  ' />
            <div className='leading-5'>
                <h2 className='text-lg font-semibold '>{name}</h2>
                <div>
                    <span className='text-primary font-bold'>Rs:{price}</span>
                    <button onClick={() => {
                        dispatch(removeFromCart({ id, img, name, price, qty }));
                        toast(`${name} Removed!`, {
                            icon: '👋',
                        });
                    }} className='ms-20'><DeleteIcon /></button> <br />
                </div><br />
                <div>
                    <h3 className='mb-1.5'>Sub Total : ₹ {price * qty} </h3>

                    <button className='btn bg-primary text-white' onClick={() => qty >= 1 ? dispatch(incrementQty({ id })) : (qty = 0)}><AddIcon /></button>
                    <span className='px-2 py-2 '>{qty}</span>
                    <button className='btn bg-primary text-white' onClick={() => qty > 1 ? dispatch(decrementQty({ id })) : (qty = 0)}><RemoveIcon /></button>
                </div>
            </div>
        </div>
    );
}
export default CartItem;